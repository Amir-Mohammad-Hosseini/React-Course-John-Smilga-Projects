import { useActionTask } from "./hooks/reactQueryCustomHooks";

const SingleItem = ({ item }) => {

  const { mutate: editTask, isPending: isEditingTask } = useActionTask(
    "patch",
    item.id,
    { isDone: !item.isDone },
    "Task updated successfully",
  );
  const { mutate: deleteTask, isPending: isDeletingTask } = useActionTask(
    "delete",
    item.id,
    null,
    "Task deleted successfully",
  );

  const handleEditTask = () => {
    editTask();
  };
  const handleDeleteTask = () => {
    deleteTask();
  };
  return (
    <div className="single-item">
      <input type="checkbox" checked={item.isDone} onChange={handleEditTask} />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.isDone && "line-through",
        }}
      >
        {item.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={handleDeleteTask}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
