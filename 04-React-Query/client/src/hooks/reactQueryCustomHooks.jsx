import { useMutation, useQuery } from "@tanstack/react-query";
import customFetch, { queryClient } from "../utils/utils";
import { toast } from "react-toastify";

export const useFetchTasks = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const response = await customFetch.get("/");
      return response;
    },
  });

  return { data, isLoading, isError, error };
};

export const useActionTask = (method, id = "", body = null, successMessage) => {
  const { mutate, isPending } = useMutation({
    mutationFn: () => {
      if (body) {
        return customFetch[method](`/${id}`, body);
      }
      return customFetch[method](`/${id}`);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success(successMessage);
    },
    onError: (error) => {
      toast.error(error?.response?.data || "An error occurred!");
    },
  });

  return { mutate, isPending };
};
