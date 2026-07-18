import { Form, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo } from "../components";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Register = () => {
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
        <Button text="submit" />
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
    console.log(data, store , "Register");
    return null;
  };
