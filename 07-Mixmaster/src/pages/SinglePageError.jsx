import { isRouteErrorResponse, useRouteError, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
const SinglePageError = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <Wrapper>
        <h2 className="error-title">{error.statusText}</h2>
        <Link to="/" className="btn back-btn">
          back home
        </Link>
      </Wrapper>
    );
  }

  return <h2>{error.message}</h2>;
};

export default SinglePageError;
