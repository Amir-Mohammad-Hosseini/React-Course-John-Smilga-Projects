import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
});

// const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
// const storedDarkMode = localStorage.getItem("darkTheme") === "true";

export const ThemeContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("darkTheme");

    if (savedTheme !== null) {
      return savedTheme === "true";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
    document.body.classList.toggle("light-theme", !isDarkTheme);

    localStorage.setItem("darkTheme", isDarkTheme);
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(ThemeContext);
};
