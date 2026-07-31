import { customFetch } from "./../utils/axios";

export const statsQuery = () => ({
  queryKey: ["stats"],

  queryFn: async () => {
    const { data } = await customFetch.get("/jobs/stats");

    return data;
  },
});
