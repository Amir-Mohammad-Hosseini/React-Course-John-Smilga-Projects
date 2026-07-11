import { Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { formatPrice } from "../utils/format";
import { customFetch } from "../utils";
import { clearCart } from "../store/features/cart/cartSlice";
import { toast } from "react-toastify";

const CheckoutForm = () => {
  return (
    <Form method="post" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl capitalize">shipping information</h4>
      <FormInput label="first name" name="name" type="text" />
      <FormInput label="address" name="address" type="text" />
      <div className="mt-4">
        <SubmitBtn text="place your order" />
      </div>
    </Form>
  );
};

export default CheckoutForm;

export const action =
  (store , queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      numItemsInCart,
      orderTotal: formatPrice(orderTotal),
      cartItems,
    };

    try {
      const response = await customFetch.post(
        "/orders",
        {
          data: info,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        },
      );
      store.dispatch(clearCart());
      toast.success("ordr placed successfully");
      queryClient.removeQueries(["orders"])
      return redirect("/orders");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "There was an error placing your order";
      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) {
        redirect("/login");
      }
      return null;
    }
  };
