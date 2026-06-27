import { useLoaderData } from "react-router-dom";
import CocktailList from "./../components/CocktailList";
import SearchForm from "./../components/SearchForm";
import { useQuery } from "@tanstack/react-query";
import { searchCocktailQuery } from "../utils/http";
import Loading from "../components/Loading";


const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks, isLoading } = useQuery(searchCocktailQuery(searchTerm));

  if (isLoading) {
    return <Loading />
  }
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};


export const loader = (queryClient) => async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search") || "";

  await queryClient.ensureQueryData(searchCocktailQuery(searchTerm))

  return { searchTerm };
};

export default Landing;
