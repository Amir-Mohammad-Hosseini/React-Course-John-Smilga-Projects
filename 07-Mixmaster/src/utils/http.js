import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
    },
  },
});

//=========================================

//Cocktails Query Search

const cocktailSearchParamUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const searchCocktailQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const response = await axios(
        `${cocktailSearchParamUrl}${searchTerm.trim().length || "a"}`,
      );
      return response.data.drinks;
    },
  };
};

//=========================================

//=========================================

//Cocktail Details

const cocktailIdParamUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const fetchCocktailDetails = (id) => {
  return {
    queryKey: ["search", { cocktailId: id }],
    queryFn: async () => {
      const { data } = await axios(`${cocktailIdParamUrl}${id}`);

      const cocktailDetails = data.drinks;
      if (!cocktailDetails) {
        throw new Response(
          JSON.stringify({
            message: "Could not fetch any cocktails with this id",
          }),
          {
            status: 404,
            statusText: "Cocktsail not found!",
          },
        );
      }

      return cocktailDetails[0];
    },
  };
};

//=========================================
