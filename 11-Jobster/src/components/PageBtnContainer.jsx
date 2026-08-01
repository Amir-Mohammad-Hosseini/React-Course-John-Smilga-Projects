import Wrapper from "../assets/wrappers/PageBtnContainer";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";

const PageBtnContainer = ({ numOfPages }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const pages = Array.from({ length: numOfPages }, (_, index) => index + 1);
  const params = new URLSearchParams(searchParams);
  const currentPage = Number(searchParams.get("page")) || 1;

  const handleClickNextPage = () => {
    params.set("page", Math.min(currentPage + 1, numOfPages));

    setSearchParams(params);
  };

  const handleClickPrevPage = () => {
    params.set("page", Math.max(currentPage - 1, 1));

    setSearchParams(params);
  };

  const handleClickTargetPage = (pageNumber) => {
    params.set("page", pageNumber);
    setSearchParams(params);
  };

  // const handleClickPrevPage = () => {
  //   if (currentPage <= 1) {
  //     dispatch(changePage(numOfPages));
  //     return;
  //   }
  //   dispatch(changePage(currentPage + 1));
  // };
  // const handleClickNextPage = () => {
  //   if (currentPage >= numOfPages) {
  //     dispatch(changePage(1));
  //     return;
  //   }
  //   dispatch(changePage(currentPage - 1));
  // };

  return (
    <Wrapper>
      <button className="prev-btn" onClick={handleClickPrevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {pages.map((page) => (
          <button
            type="button"
            key={page}
            className={currentPage === page ? "pageBtn active" : "pageBtn"}
            onClick={() => handleClickTargetPage(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <button className="next-btn" onClick={handleClickNextPage}>
        <HiChevronDoubleRight />
        next
      </button>
    </Wrapper>
  );
};

export default PageBtnContainer;
