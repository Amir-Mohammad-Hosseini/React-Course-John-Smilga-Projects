import { Form, Link, redirect, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo } from "../components";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { customFetch } from "../utils/axios";
import { toast } from "react-toastify";
import { registerUser } from "../store/features/user/userSlice";

const Register = () => {
  const navigation = useNavigation();

  return (
    <Wrapper className="full-page">
      <Form className="form" method="post">
        <Logo />
        <h3>Register</h3>
        {/* NAME FIELD */}
        <InputField name="name" label="name" />

        {/* EMAIL FIELD */}
        <InputField name="email" label="email" type="email" />

        {/* PASSWORD FIELD */}
        <InputField name="password" label="password" type="password" />

        {/* SUBMIT BTN */}
        <Button
          text={navigation.state === "submitting" ? "submitting..." : "submit"}
          disabled={navigation.state === "submitting"}
        />
        <p>
          Already a member?{" "}
          <Link className="member-btn" to="/login">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch.post("/auth/register", data);

      toast.success("Account created successfully!");
      store.dispatch(registerUser(response.data.user));
      return redirect("/login");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        error?.response?.data?.msg ||
        "Please double check your credentials";
      toast.error(errorMessage);
    }
    return null;
  };
