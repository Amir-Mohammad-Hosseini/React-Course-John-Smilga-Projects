import { useEffect } from "react";

import authFetch from "../axios/custom";
import axios from "axios";

const bestMoviesApi = "https://moviesapi.ir/api/v1/movies?page={page}";

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const responseOne = await authFetch("/react-store-products");
      const responseTwo = await axios(bestMoviesApi);
      console.log(responseOne, " ", responseTwo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2 className="text-center">custom instance</h2>
      <p className="text-center" style={{ margin: "0 auto", color: "#645CFF" }}>
        See result in console
      </p>
      <br />
    </>
  );
};
export default CustomInstance;
