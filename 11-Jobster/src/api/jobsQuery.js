import { customFetch } from "./../utils/axios";

export const jobsQuery = ({ params }) => ({
  queryKey: ["jobs", params],

  queryFn: async () => {
    const { data } = await customFetch.get("/jobs", {
      params,
    });

    return data;
  },
});
