import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loader from "./elements/Loading";

const Login = lazy(() => import("./pages/Login"));
const Browse = lazy(() => import("./pages/Browse"));
const Login2 = lazy(() => import("./pages/Login2"));
const Tvshows = lazy(() => import("./pages/Tvshows"));
const Movies = lazy(() => import("./pages/Movies"));
const Search = lazy(() => import("./pages/Search"));
const Popupwatch = lazy(() => import("./pages/Popupwatch"));
const Player = lazy(() => import("./pages/Player"));
const Mylist = lazy(() => import("./pages/Mylist"));
const Content = lazy(() => import("./pages/Content"));

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login2 />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/browse/Tvshows",
      element: <Tvshows />,
    },
    {
      path: "/browse/recommendations",
      element: <Popupwatch />,
    },
    {
      path: "/browse/Player",
      element: <Player />,
    },
    {
      path: "/browse/Movies",
      element: <Movies />,
    },
    {
      path: "/browse/search",
      element: <Search />,
    },
    {
      path: "/browse/Mylist",
      element: <Mylist />,
    },
    {
      path: "/browse/Content",
      element: <Content />,
    },
  ]);

  return (
    <Suspense fallback={<Loader/>}>
      <RouterProvider router={appRouter} />
    </Suspense>
  );
};

export default Body;
