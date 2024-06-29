import { RouteObject } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import Register from "../page/auth/Register";
import Login from "../page/auth/Login";
import IndexLayout from "../layout/LoginLayout";
import HomePage from "../page/home/HomePage";
import Detail from "../page/journey/Detail";
import Profile from "../page/profile/Index";
import Bookmark from "../page/bookmark";
import JourneyForm from "../page/JourneyForm";
import RootLayout from "../layout/RootLayout";
import LoginLayout from "../layout/LoginLayout";

const router: RouteObject[] = [
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "detailjourney/:id",
        element: <Detail />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "bookmark",
        element: <Bookmark />,
      },
      {
        path: "addjourney",
        element: <JourneyForm />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/home",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "detailjourney/:id",
        element: <Detail />,
      },
    ],
  },
];

export default router;
