import { useLoaderData, Link, Navigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailPage";
import { useQuery } from "@tanstack/react-query";
import { fetchCocktailDetails } from "../utils/http";
import Loading from "../components/Loading";

const Cocktail = () => {
  const cocktailId = useLoaderData();
  const { data: cocktailDetails, isLoading } = useQuery(
    fetchCocktailDetails(cocktailId),
  );

  if (isLoading) {
    return <Loading />
  }
  if (!cocktailDetails) {
    return <Navigate to="/" />;
  }

  const {
    idDrink: id,
    strAlcoholic: info,
    strDrinkThumb: image,
    strDrink: name,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = cocktailDetails;

  const validIngredients = Object.entries(cocktailDetails)
    .filter(([key, value]) => key.includes("strIngredient") && value)
    .map(([key, value]) => value);

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name : </span>
            {name}
          </p>
          <p>
            <span className="drink-data">category : </span>
            {category}
          </p>
          <p>
            <span className="drink-data">info : </span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass : </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">ingredients : </span>
            {validIngredients.map((ingredient, index) => {
              return (
                <span className="ing" key={ingredient}>
                  {ingredient}
                  {index < validIngredients.length - 1 ? "," : ""}
                </span>
              );
            })}
          </p>
          <p>
            <span className="drink-data">instructions : </span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;

export const loader =
  (queryClient) =>
  async ({ request, params }) => {
    const { id } = params;

    await queryClient.ensureQueryData(fetchCocktailDetails(id));

    return id;
  };
