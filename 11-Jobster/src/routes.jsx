import { createBrowserRouter } from "react-router-dom";
import {
  Dashboard,
  Error,
  Landing,
  Login,
  Register,
  RootLayout,
} from "./pages";

//Actions
import {action as registerAction} from "./pages/Register"
import {action as loginAction} from "./pages/Login"


import store from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "register",
        element: <Register />,
        action : registerAction(store)
      },
      {
        path: "login",
        element: <Login />,
        action : loginAction(store)
      },
      {
        path: "landing",
        element: <Landing />,
      },
    ],
  },
]);

export default router;
