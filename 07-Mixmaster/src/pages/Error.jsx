import { Link, useRouteError } from "react-router-dom"
import Wrapper from "../assets/wrappers/ErrorPage"
import notFoundImage from "./../assets/not-found.svg"
const Error = () => {
  const error = useRouteError()

  if(error.status === 404){
    return (
    <Wrapper>
      <img src={notFoundImage} alt="" />
      <h3>Ohh!</h3>
      <p>We can't seem to find the page you are looking for</p>
      <Link to="/">back home</Link>
    </Wrapper>
    )
  }
  return (
    <Wrapper>
      <div>
        <h3>Something went wrong</h3>
      </div>
    </Wrapper>
  )
}

export default Error
