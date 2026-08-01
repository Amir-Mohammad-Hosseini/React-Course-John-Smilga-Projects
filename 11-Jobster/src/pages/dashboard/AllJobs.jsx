import { Suspense } from "react";
import { jobsQuery } from "../../api/jobsQuery";
import { SearchContainer } from "../../components";
import { JobsContainer } from "../../components";
import Loading from "../../components/Loading";
import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";

const AllJobs = () => {
  const { params } = useLoaderData();
  const { isLoading } = useQuery(jobsQuery(params));

  if (isLoading) {
    return <Loading center={true} />;
  }

  return (
    <>
      <SearchContainer />
      <JobsContainer />
    </>
  );
};

export default AllJobs;

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);

    const searchParams = Object.fromEntries(url.searchParams.entries());
    await queryClient.ensureQueryData(jobsQuery({ params: searchParams }));
    return { params: searchParams };
  };
