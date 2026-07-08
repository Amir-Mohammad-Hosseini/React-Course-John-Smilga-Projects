import { useLoaderData } from "react-router-dom"
import { Filters, PaginationContainer, ProductsContainer } from "../components"
import {customFetch} from "./../utils"
const Products = () => {
  const {products , meta} = useLoaderData()
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  )
}

export default Products

const dynamicUrl = "/products"

export const loader = async({request}) => {
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()])
  const response = await customFetch(dynamicUrl , {
    params
  })
  const products = response.data.data
  const meta = response.data.meta
  return {products , meta , params}
}