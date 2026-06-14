import { createContext, useContext, useState } from "react";

const SearchContext = createContext({
  searchTerm: "monkey",
  changeSeatchTerm: () => {},
});

export const SearchContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("monkey");

  const changeSearchTerm = (seatchTerm) => {
    setSearchTerm(seatchTerm);
  };

  return (
    <SearchContext.Provider value={{ searchTerm, changeSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useGlobalSearchContext = () => {
  return useContext(SearchContext);
};
