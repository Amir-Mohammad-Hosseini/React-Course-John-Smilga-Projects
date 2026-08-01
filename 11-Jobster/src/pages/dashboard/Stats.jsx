import { useQuery } from "@tanstack/react-query";
import { statsQuery } from "../../api/statsQuery";
import Loading from "../../components/Loading";
import { ChartsContainer, StatsContainer } from "../../components";

const Stats = () => {
  const { data: allStatsData, isPending } = useQuery(statsQuery());

  const { defaultStats, monthlyApplications } = allStatsData;

  if (isPending) {
    return <Loading center />;
  }
  return (
    <>
      <StatsContainer stats={defaultStats} />
      {monthlyApplications.length > 0 && <ChartsContainer data={monthlyApplications} />}
    </>
  );
};

export default Stats;

export const loader = (queryClient) => async () => {
  await queryClient.ensureQueryData(statsQuery());

  return null;
};
