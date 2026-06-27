import Wrapper from "./../assets/wrappers/CocktailList";
import CocktailCard from "./CocktailCard";
const CocktailList = ({ drinks }) => {
  if (!drinks || !drinks.length || typeof drinks !== "object") {
    return (
      <h4 style={{ textAlign: "center" }}>No matching cocktails found...</h4>
    );
  }

  const formattedDrinks = drinks.map((drink) => {
    const { idDrink, strDrink, strAlcoholic, strDrinkThumb, strGlass } = drink;
    return {
      id: idDrink,
      name: strDrink,
      info: strAlcoholic,
      image: strDrinkThumb,
      glass: strGlass,
    };
  });
  return (
    <Wrapper>
      {formattedDrinks.map((drink) => {
        return <CocktailCard key={drink.id} {...drink} />;
      })}
    </Wrapper>
  );
};

export default CocktailList;
