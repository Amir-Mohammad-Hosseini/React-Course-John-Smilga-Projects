import { useEffect } from "react";
import axios from "axios";
const productsUrl = "http://localhost:5000/api/react-store-products";
const bestMoviesApi = "https://moviesapi.ir/api/v1/movies?page={page}";

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const responseOne = await axios(productsUrl);
      const responseTwo = await axios(bestMoviesApi);
      console.log(responseOne);
      console.log(responseTwo);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2 className="text-center">global instance</h2>
      <p className="text-center" style={{margin : "0 auto" , color : "#645CFF"}}>See result in console</p>
      <br />
    </>
  );
};
export default GlobalInstance;
