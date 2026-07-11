import React from "react";
import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "./../utils";
import { useLoaderData } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;

const dynamicUrl = "/products?featured=true";

const featuredProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => customFetch(dynamicUrl),
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const response = await queryClient.ensureQueryData(featuredProductsQuery);
    console.log(response);
    const products = response.data.data;
    return { products };
  };
