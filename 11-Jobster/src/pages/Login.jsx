import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo } from "../components";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { Form, Link } from "react-router-dom";

const Login = () => {
  return (
    <Wrapper className="full-page">
      <Form className="form">
        <Logo />
        <h3>Login</h3>

        {/* EMAIL FIELD */}
        <InputField name="email" label="email" type="email" />

        {/* PASSWORD FIELD */}
        <InputField name="password" label="password" type="password" />

        {/* SUBMIT BTN */}
        <Button text="submit" />
        <p>
          Not a member yet? <Link className="member-btn" to="/register">Register</Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login;
