import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const ComplexPaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  console.log(pageCount);

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handleChangePage = (pageNumber) => {
    const searchParams = new URLSearchParams();
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPageNumber = ({ pageNumber, activeClass }) => {
    return (
      <button
        onClick={() => handleChangePage(pageNumber)}
        key={pageNumber}
        className={`${activeClass ? "bg-base-300 border-base-300" : ""} btn btn-xs sm:btn-md join-item border-none`}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    // first button
    pageButtons.push(
      addPageNumber({
        pageNumber: 1,
        activeClass: page === 1,
      }),
    );

    // dots
    if (page > 2) {
      pageButtons.push(
        <button className="join-item btn btn-xs sm:btn-md" key="dots-1">
          ...
        </button>,
      );
    }

    // active/current page
    if (page !== 1 && page !== pageCount) {
      pageButtons.push(
        addPageNumber({
          pageNumber: page,
          activeClass: true,
        }),
      );
    }

    if (page < pageCount - 1) {
      // dots
      pageButtons.push(
        <button className="join-item btn btn-xs sm:btn-md" key="dots-2">
          ...
        </button>,
      );
    }

    // last button
    pageButtons.push(
      addPageNumber({
        pageNumber: pageCount,
        activeClass: page === pageCount,
      }),
    );

    return pageButtons;
  };

  if (pageCount < 2) {
    return null;
  }
  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handleChangePage(prevPage);
          }}
        >
          Prev
        </button>
        {renderPageButtons()}
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handleChangePage(nextPage);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ComplexPaginationContainer;
