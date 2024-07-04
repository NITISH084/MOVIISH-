import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Browse from "./pages/Browse";
import Login2 from "./pages/Login2";
import Tvshows from "./pages/Tvshows";
import Movies from "./pages/Movies";
import Search from "./pages/Search";
import Popupwatch from "./pages/Popupwatch";
import Player from "./pages/Player";
import Mylist from "./pages/Mylist";
import Content from "./pages/Content";


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
      path:"/browse/Content",
      element:<Content/>,
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}>
      </RouterProvider>
    </div>
  );
};

export default Body;
