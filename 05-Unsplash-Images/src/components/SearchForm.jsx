import { useGlobalSearchContext } from "../context/searchContext";

const SearchForm = () => {
  const { changeSearchTerm } = useGlobalSearchContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchValue = event.target.elements.search.value;
    if (!searchValue.trim().length) {
      return;
    }
    changeSearchTerm(searchValue);
  };
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          placeholder="cat"
          name="search"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
