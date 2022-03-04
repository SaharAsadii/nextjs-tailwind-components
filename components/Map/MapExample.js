import dynamic from "next/dynamic";
const CustomMap = dynamic(() => import("components/Map"), {
  ssr: false,
});

const MapExample = () => {
  return (
    <>
      <p>map : </p>

      <div className="mt-8">
        <CustomMap
          latitude="35.704308"
          longitude="51.392706"
          onChange={(e) => console.log({ e })}
        />
      </div>
    </>
  );
};

export { MapExample };
