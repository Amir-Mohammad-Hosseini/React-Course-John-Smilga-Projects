import { useLoaderData } from "react-router-dom";
import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "./../utils";
const Products = () => {
  const { products, meta } = useLoaderData();
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;

const dynamicUrl = "/products";

const allProductsQuery = (params) => {
  const { search, company, category, sort, price, shipping, page } = params;
  return {
    queryKey: [
      "products",
      search ?? "",
      company ?? "all",
      category ?? "all",
      sort ?? "a-z",
      price ?? 100_000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () =>
      customFetch(dynamicUrl, {
        params,
      }),
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    const response = await queryClient.ensureQueryData(
      allProductsQuery(params),
    );
    const products = response.data.data;
    const meta = response.data.meta;
    return { products, meta, params };
  };
