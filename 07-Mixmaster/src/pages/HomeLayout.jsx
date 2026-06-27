import React from "react";
import { Link, Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";

const HomeLayout = () => {
  const navigation = useNavigation();

  const isPageLoading = navigation.state === "loading";

  return (
    <div>
      <Navbar />
      <section className="page">
        {isPageLoading ? <Loading /> : <Outlet />}
      </section>
    </div>
  );
};

export default HomeLayout;
