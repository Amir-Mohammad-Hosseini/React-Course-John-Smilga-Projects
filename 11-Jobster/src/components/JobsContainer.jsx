import Wrapper from "../assets/wrappers/JobsContainer";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { jobsQuery } from "../api/jobsQuery";
import Job from "./Job";
import Loading from "./Loading";

const JobsContainer = () => {
  const [searchParams] = useSearchParams();

  const params = Object.fromEntries(searchParams.entries());
  const { data: jobsData, isPending } = useQuery(
    jobsQuery({ params }),
  );

  const { jobs, numOfPages, totalJobs } = jobsData;

  if (isPending) {
    return <Loading center={true} />;
  }
  return (
    <Wrapper>
      <h5>jobs info</h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;
