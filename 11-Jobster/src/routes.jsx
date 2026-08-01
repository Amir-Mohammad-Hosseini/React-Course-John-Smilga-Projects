import { createBrowserRouter } from "react-router-dom";
import { Error, Landing, Login, Register, RootLayout } from "./pages";
import {
  AddJob,
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
} from "./pages/dashboard";

//Loaders
import { loader as allJobsLoader } from "./pages/dashboard/AllJobs";
import { loader as statsLoader } from "./pages/dashboard/Stats";

//Actions
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";

import store from "./store/store";
import queryClient from "./utils/reactQuery";

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
            loader: statsLoader(queryClient),
          },
          {
            path: "all-jobs",
            element: <AllJobs />,
            loader: allJobsLoader(queryClient),
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
        action: registerAction(store),
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
  },
]);

export default router;
