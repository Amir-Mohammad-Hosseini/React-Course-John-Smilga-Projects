import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/SearchContainer";
import InputField from "./InputField";
import SelectField from "./SelectField";
import {
  changeFilterValue,
  clearFilters,
} from "../store/features/allJobs/allJobsSlice";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SearchContainer = () => {
  const { search, status, jobType, sort, sortOptions } = useSelector(
    (store) => store.allJobsState,
  );
  const { jobTypeOptions, statusOptions } = useSelector(
    (store) => store.jobState,
  );
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(search);

  useEffect(() => {
    const searchDebounceTimer = setTimeout(() => {
      const params = new URLSearchParams(searchParams);

      params.set("search", searchValue);

      setSearchParams(params);
    }, 500);

    return () => clearTimeout(searchDebounceTimer);
  }, [searchValue]);

  const handleSearch = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    dispatch(changeFilterValue({ name, value }));

    if (name === "search") {
      setSearchValue(value);
      return;
    }

    const params = new URLSearchParams(searchParams);

    params.set(name, value);

    setSearchParams(params);
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          {/* SEARCH POSITION */}
          <InputField
            name="search"
            label="search"
            value={searchValue}
            onChange={handleSearch}
          />
          {/* SEARCH BY STATUS */}
          <SelectField
            name="status"
            label="status"
            options={["all", ...statusOptions]}
            value={status}
            onChange={handleSearch}
          />
          {/* SEARCH BY TYPE */}
          <SelectField
            name="jobType"
            label="type"
            options={["all", ...jobTypeOptions]}
            value={jobType}
            onChange={handleSearch}
          />
          {/* SORT */}
          <SelectField
            name="sort"
            label="sort"
            options={sortOptions}
            value={sort}
            onChange={handleSearch}
          />

          <button
            className="btn btn-block btn-danger"
            type="button"
            onClick={handleClearFilters}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
