import { useState } from "react";
import { Pagination } from "components/Pagination/Pagination";

const PaginationExample = () => {
  const [page, setPage] = useState(1);

  return (
    <>
      <p>pagination : </p>
      <Pagination setPage={setPage} page={page} total={4} />
    </>
  );
};

export { PaginationExample };
