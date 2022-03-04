import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useIsFetching, useIsMutating } from "react-query";
import MainLoader from "./MainLoader";

const Loader = () => {
  const router = useRouter();

  const [isFetching, setIsFetching] = useState(false);

  const isMutating = useIsMutating();
  //const isFetchingApi = useIsFetching();

  const loadStart = () => setIsFetching(true);

  const loadEnd = () => {
    setIsFetching(false);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    router.events.on("routeChangeStart", loadStart);
    router.events.on("routeChangeComplete", loadEnd);
    router.events.on("routeChangeError", (e, url) => loadEnd(url));

    return () => {
      router.events.off("routeChangeStart", loadStart);
      router.events.off("routeChangeComplete", loadEnd);
      router.events.off("routeChangeError", (e, url) => loadEnd(url));
    };
  }, [router]);

  return <MainLoader isLoading={isFetching || !!isMutating} />;
};

export default Loader;
