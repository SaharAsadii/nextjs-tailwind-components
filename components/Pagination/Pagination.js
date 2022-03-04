import React from "react";
import { usePagination, DOTS } from "./usePagination";

const Pagination = (props) => {
  const { setPage, total, siblingCount = 1, page, className } = props;

  const paginationRange = usePagination({
    page,
    total,
    siblingCount,
  });

  if (page === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    setPage((pre) => (pre === total ? pre : pre + 1));
  };

  const onPrevious = () => {
    setPage((pre) => (pre === 1 ? 1 : pre - 1));
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-center sm:px-6">
      <div>
        <ul
          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <li
            onClick={onPrevious}
            className={`cursor-pointer ${
              page === 1 && "opacity-70 !cursor-not-allowed"
            }  relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`}
          >
            <span className="sr-only">قبلی</span>
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>
          {paginationRange.map((pageNumber) => {
            if (pageNumber === DOTS) {
              return (
                <li className="relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                  &#8230;
                </li>
              );
            }

            return (
              <li
                key={pageNumber}
                aria-current="page"
                onClick={() => setPage(pageNumber)}
                className={`${
                  page === pageNumber
                    ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600"
                    : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                } relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer`}
              >
                {pageNumber}
              </li>
            );
          })}

          <li
            onClick={onNext}
            className={` ${
              page === lastPage && "opacity-70 !cursor-not-allowed"
            } cursor-pointer relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`}
          >
            <span className="sr-only">بعدی</span>

            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Pagination };
