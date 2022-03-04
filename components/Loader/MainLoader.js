import { useEffect, useRef } from "react";
import animationData from "./loading.json";
import Lottie from "lottie-react";

const MainLoader = ({ isLoading }) => {
  const animationRef = useRef(null);

  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: animationRef.current,
  //     renderer: "svg",
  //     loop: true,
  //     autoplay: true,
  //     animationData,
  //   });

  //   return () => lottie.stop();
  // }, []);

  return (
    <div
      className="center-flex-without-back"
      style={{
        display: isLoading ? "flex" : "none",
      }}
    >
      <div></div>
      <Lottie
        ref={animationRef}
        style={{
          height: 80,
          width: 80,
          display: isLoading ? "block" : "none",
        }}
        animationData={animationData}
      />
    </div>
  );
};

export default MainLoader;
