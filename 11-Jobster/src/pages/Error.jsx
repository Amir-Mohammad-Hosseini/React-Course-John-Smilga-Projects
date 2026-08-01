import Wrapper from "./../assets/wrappers/ErrorPage";
import notFoundImg from "./../assets/images/not-found.svg";
import { Link, useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <Wrapper className="full-page">
        <div>
          <img src={notFoundImg} alt="not found" />
          <h3>{error.statusText || "Ohh! Page Not Found"}</h3>
          <p>We can't seem to find the page you're looking for</p>
          <Link to="/">Back Home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper className="full-page">
      <div>
        <img src={notFoundImg} alt="not found" />
        <h3>{error?.data?.msg || "Something went wrong..."}</h3>
        <Link to="/">Back Home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
