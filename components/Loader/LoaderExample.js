import MainLoader from "./MainLoader";
import { TinyLoader } from "./TinyLoader";

const LoaderExample = () => {
  return (
    <>
      <p>loader : </p>
      <div className="mt-8">
        <MainLoader />
        <TinyLoader />
      </div>
    </>
  );
};

export { LoaderExample };
