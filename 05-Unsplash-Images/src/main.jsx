import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeContextProvider } from "./context/themeContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/http";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SearchContextProvider } from "./context/searchContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <SearchContextProvider>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </SearchContextProvider>
  </ThemeContextProvider>,
);
