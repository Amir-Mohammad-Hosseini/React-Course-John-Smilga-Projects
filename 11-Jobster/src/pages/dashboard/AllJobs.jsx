import { Suspense } from "react";
import { jobsQuery } from "../../api/jobsQuery";
import { SearchContainer } from "../../components";
import { JobsContainer } from "../../components";
import Loading from "../../components/Loading";

const AllJobs = () => {

  return (
    <>
      <SearchContainer />
      <Suspense fallback={<Loading center={true} />}>
      <JobsContainer />
      </Suspense>
    </>
  );
};

export default AllJobs;

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);

    const searchParams = Object.fromEntries(url.searchParams.entries());
    await queryClient.ensureQueryData(
      jobsQuery({ params: searchParams }),
    );
    return { params: searchParams };
  };
