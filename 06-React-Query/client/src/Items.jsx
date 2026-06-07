import SingleItem from "./SingleItem";
import { useFetchTasks } from "./hooks/reactQueryCustomHooks";
const Items = () => {
const {data : queryData , isLoading , isError , error}= useFetchTasks()

  if (isLoading) {
    return <p style={{ marginTop: "1rem" }}>Loading...</p>;
  }

  if (isError) {
    return (
      <p style={{ marginTop: "1rem" }}>
        {error.response?.data || "There was an error..."}
      </p>
    );
  }

  const taskList = queryData?.data?.taskList ?? [];
  return (
    <div className="items">
      {taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
