import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo } from "../components";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { Form, Link, redirect, useNavigation } from "react-router-dom";
import { customFetch } from "../utils/axios";
import { toast } from "react-toastify";
import { loginUser } from "../store/features/user/userSlice";

const Login = () => {

  const navigation = useNavigation()
  return (
    <Wrapper className="full-page">
      <Form className="form" method="post">
        <Logo />
        <h3>Login</h3>

        {/* EMAIL FIELD */}
        <InputField name="email" label="email" type="email" />

        {/* PASSWORD FIELD */}
        <InputField name="password" label="password" type="password" />

        {/* SUBMIT BTN */}
        <Button text={navigation.state === "submitting" ? "submitting..." : "login"} disabled={navigation.state === "submitting"} />
        <p>
          Not a member yet?{" "}
          <Link className="member-btn" to="/register">
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login;

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch.post("/auth/login", data);
      const userDatas = response.data.user;
      store.dispatch(loginUser(userDatas))
      toast.success(`Hello There ${userDatas.name}`);
      return redirect("/")
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        error?.response?.data?.msg ||
        "Please double check your credentials";
      toast.error(errorMessage);
    }
    return null;
  };
