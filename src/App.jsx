import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Singup from "./pages/Singup";
import Login from "./pages/Login";
import AboutYou from "./pages/AboutYou";
import Preview from "./pages/Preview";
import Edit from "./pages/Edit";
import MyProfile from "./components/MyProfile";
import SignOut from "./components/SignOut";
import MyAccount from "./components/MyAccount";
import Create from "./components/Create";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "preview",
          element: <Preview />,
        },
        {
          path: "create",
          element: <Create />,
        },
        {
          path: "edit",
          element: <Edit />,
        },
        {
          path: "myaccount",
          element: <MyAccount />,
        },
        {
          path: "signout",
          element: <SignOut />,
        },
        {
          path: "myprofile",
          element: <MyProfile />,
        },
        {
          path: "singup",
          element: <Singup />,
        },
        {
          path: "login",
          element: <Login />,
        },

        {
          path: "aboutyou",
          element: <AboutYou />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
