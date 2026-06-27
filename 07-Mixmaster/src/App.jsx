import { RouterProvider } from "react-router-dom";
import router from "./routes";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/http";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
