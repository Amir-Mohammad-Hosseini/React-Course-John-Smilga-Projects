import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

const URL = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`


export const queryClient = new QueryClient();

export const getAllPhotos = async (searchTerm) => {
  const result = await axios.get(`${URL}&query=${searchTerm}`);
  return result;
};
