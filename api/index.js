import axios from "axios";
import { BASE_URL, PROJECTNAME } from "constants/projectInfo";
import jsCookie from "js-cookie";

const client = axios.create({
  baseURL: BASE_URL,
});

//-----------------------------------------------request handle---------------------------------------------

client.interceptors.request.use(
  (config) => {
    client.loading = true;
    return config;
  },
  (error) => {
    client.loading = false;
    Promise.reject(error);
  }
);

//-----------------------------------------------responce handle---------------------------------------------

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

client.interceptors.response.use(
  function (response) {
    client.loading = false;
    return response;
  },
  function (error) {
    const originalRequest = error.config;
    client.loading = false;
    if (error && error.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        client.loading = true;
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers["Authorization"] = token;
            return client(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;
      client.loading = false;

      return new Promise(function (resolve, reject) {
        client({
          url: `${BASE_URL}/auth/revoke`,
          method: "post",
          headers: {
            Authorization: jsCookie.get(`${PROJECTNAME}:User:Token`),
            AccessToken: jsCookie.get(`${PROJECTNAME}:User:Token`),
            RefreshToken: jsCookie.get(`${PROJECTNAME}:User:ReToken`),
          },
        })
          .then(({ data }) => {
            jsCookie.set(`${PROJECTNAME}:User:Token`, data.data.accessToken, {
              secure: process.env.NODE_ENV === "production",
            });

            jsCookie.set(
              `${PROJECTNAME}:User:ReToken`,
              data.data.refreshToken,
              {
                secure: process.env.NODE_ENV === "production",
              }
            );

            client.defaults.headers.common["Authorization"] =
              data.data.accessToken;
            originalRequest.headers["Authorization"] = data.data.accessToken;
            processQueue(null, data.data.accessToken);
            resolve(client(originalRequest));
          })
          .catch((err) => {
            //Todo logout api

            jsCookie.remove(`${PROJECTNAME}:User:Token`);
            jsCookie.remove(`${PROJECTNAME}:User:ReToken`);

            window.location.href = "/";

            processQueue(err, null);
            reject(err);
          })
          .finally(() => {
            isRefreshing = false;
          });
      });
    }
    if (
      error &&
      error.response.status === 403 &&
      error.config.url === "/mainPage"
    ) {
      jsCookie.remove(`${PROJECTNAME}:User:Token`);
      jsCookie.remove(`${PROJECTNAME}:User:ReToken`);
    }
    return Promise.reject(error);
  }
);

export { client };
