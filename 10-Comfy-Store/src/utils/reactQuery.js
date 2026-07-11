import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      scaleTime: 1000 * 60 * 5,
    },
  },
});
