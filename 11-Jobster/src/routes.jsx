import { createBrowserRouter } from "react-router-dom";
import { Error, Landing, Login, Register, RootLayout } from "./pages";
import {
  AddJob,
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
} from "./pages/dashboard";

//Actions
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";

import store from "./store/store";

const router = createBrowserRouter([
{
  path: "/",
  element: <RootLayout />,
  errorElement: <Error />,
  children: [
    {
      element: <SharedLayout />,
      children: [
        {
          index: true,
          element: <Stats />,
        },
        {
          path: "all-jobs",
          element: <AllJobs />,
        },
        {
          path: "add-job",
          element: <AddJob />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "register",
      element: <Register />,
      action: registerAction,
    },
    {
      path: "login",
      element: <Login />,
      action: loginAction(store),
    },
    {
      path: "landing",
      element: <Landing />,
    },
  ],
}
]);

export default router;
