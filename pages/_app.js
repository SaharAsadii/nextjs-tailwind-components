import "styles/globals.css";
import MainWrapper from "layouts/MainWrapper";

function MyApp({ Component, pageProps }) {
  return <MainWrapper Component={Component} pageProps={pageProps} />;
}

export default MyApp;
