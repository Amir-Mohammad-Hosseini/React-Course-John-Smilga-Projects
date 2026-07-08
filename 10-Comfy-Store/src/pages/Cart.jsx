import React from 'react'
import { useSelector } from 'react-redux'
import { CartItemsList, CartTotals, SectionTitle } from '../components'
import { Link } from 'react-router-dom'

const Cart = () => {
  const user = useSelector((state) => state.userState.user)
  const {numItemsInCart} = useSelector((state) => state.cartState)

  if(numItemsInCart === 0){
    return(
      <SectionTitle text="Your cart is empty" />
    )
  }
  return (
    <>
    <SectionTitle text="Shopping Cart" />
    <div className="mt-8 grid gap-8 lg:grid-cols-12">
      <div className="lg:col-span-8">
        <CartItemsList />
      </div>
      <div className="lg:col-span-4 lg:pl-4">
        <CartTotals />
        {
          user ? <Link to="/checkout" className='mt-8 btn btn-primary btn-block'>proceed to checkout</Link> : <Link to="/login" className='mt-8 btn btn-primary btn-block'>please login</Link> 
        }
      </div>
    </div>
      
    </>
  )
}

export default Cart
