import React from 'react'
import { FeaturedProducts, Hero } from '../components'
import {customFetch} from "./../utils"
import { useLoaderData } from 'react-router-dom'

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  )
}

export default Landing

const dynamicUrl = "/products?featured=true"

export const loader = async ({request}) => {
  const response = await customFetch(dynamicUrl)
  const products = response.data.data
  return {products}
}