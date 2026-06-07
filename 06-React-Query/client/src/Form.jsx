import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import customFetch, { queryClient } from "./utils/utils";
import { toast } from "react-toastify";
const Form = () => {
  const [newItemName, setNewItemName] = useState("");

  const { mutate, isPending } = useMutation({
    mutationFn: async (taskName) =>
      customFetch.post("/", { title: taskName }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["tasks"] });
      setNewItemName("");
      toast.success("Toast added")
    },
    onError: (error) => {
      toast.error(error.response.data?.msg || error.response.data);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItemName.trim().length) {
      mutate(newItemName);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className="form-control">
        <input
          type="text "
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn">
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;
