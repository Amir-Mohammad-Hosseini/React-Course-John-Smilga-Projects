import { Outlet, useNavigate } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";
import { BigSidebar, Navbar, SmallSidebar } from "../../components";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const SharedLayout = () => {
  const { user } = useSelector((state) => state.userState);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/landing");
    }
  }, [user]);

  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;
