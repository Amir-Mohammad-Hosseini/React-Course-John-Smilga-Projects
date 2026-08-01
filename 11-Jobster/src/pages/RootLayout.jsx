import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const RootLayout = () => {
  const { user } = useSelector((store) => store.userState);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
};

export default RootLayout;
