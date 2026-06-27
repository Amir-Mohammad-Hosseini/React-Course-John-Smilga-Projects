import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
  SinglePageError,
} from "./pages/index";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";
import { action as newsletterAction } from "./pages/Newsletter";
import { createBrowserRouter } from "react-router-dom";
import { queryClient } from "./utils/http";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        element: <Landing />,
        index: true,
        loader: landingLoader(queryClient),
        errorElement: <SinglePageError />,
      },
      {
        path: "about",
        element: <About />,
        children: [
          { element: <h2>Company</h2>, index: true },
          { path: "person", element: <h2>Person</h2> },
        ],
      },
      {
        path: "cocktail/:id",
        element: <Cocktail />,
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader(queryClient),
      },
      {
        path: "newsletter",
        element: <Newsletter />,
        action: newsletterAction,
        errorElement: <SinglePageError />,
      },
    ],
  },
]);

export default router;
