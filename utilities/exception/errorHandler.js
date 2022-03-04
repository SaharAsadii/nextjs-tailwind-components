import exception from ".";

const errorHandler = (error) => {
  if (
    error &&
    (error?.data?.status === "validation-error" ||
      error?.status === "validation-error")
  ) {
    if (error.data) {
      for (
        let i = 0;
        i < (error.data?.data ? error.data?.data : error.data).length;
        i++
      ) {
        exception.message([
          {
            type: "error",
            title: (error.data?.data ? error.data?.data : error.data)[i]
              .errorMessage,
          },
        ]);
      }
    } else {
      exception.message([{ title: error.message, type: "error" }]);
      return "";
    }
  } else {
    if (error.message) {
      exception.message([{ title: error.message, type: "error" }]);
      return "";
    } else {
      exception.message([
        { title: "خطایی سمت سرور رخ داده است", type: "error" },
      ]);
      return "";
    }
  }
};

export { errorHandler };
