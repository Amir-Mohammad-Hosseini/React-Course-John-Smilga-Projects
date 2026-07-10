import { Link, useLoaderData } from "react-router-dom";
import { customFetch } from "../utils";
import { formatPrice } from "../utils/format";
import { useState } from "react";
import { generateAmountOptions } from "../utils/generateAmount";
import { useDispatch } from "react-redux";
import { addItem } from "../store/features/cart/cartSlice";

const SingleProduct = () => {
  const { productDetails } = useLoaderData();
  const { image, title, description, price, company, colors } =
    productDetails.attributes;
  const dollarsAmount = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

  const handleChangeAmount = (event) => {
    setAmount(parseInt(event.target.value));
  };

  const cartProduct = {
    cartID: productDetails.id + productColor,
    productID: productDetails.id,
    image,
    title,
    price,
    company,
    productColor,
    amount,
  };

  const handleAddToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        {/* PRODUCT INFO */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollarsAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          {/* COLORS */}
          <div className="mt-6">
            <h4 className="font-medium text-md tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`${color === productColor ? "border-2 border-secondary" : ""} badge w-6 h-6 mr-2 cursor-pointer`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
          </div>
          {/* AMOUNT */}
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="amount">
              <h4 className="text-md font-medium tracking-wider capitalize">
                amount
              </h4>
            </label>
            <select
              className="select select-secondary select-bordered select-md"
              id="amount"
              value={amount}
              onChange={handleChangeAmount}
            >
              {generateAmountOptions(20)}
            </select>
          </div>
          {/* CART BTN */}
          <div className="mt-10">
            <button
              className="btn btn-secondary btn-md"
              onClick={handleAddToCart}
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const productId = params.id;
    const response = await customFetch(`/products/${productId}`);
    const productDetails = response.data.data;
    return { productDetails };
  };
