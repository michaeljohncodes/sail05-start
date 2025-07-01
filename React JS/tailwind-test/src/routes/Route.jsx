import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import BuyNow from "../pages/BuyNow";
import Contact from "../pages/Contact";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/board/Dashboard";
import Settings from "../pages/board/Settings";
import Userprofile from "../pages/board/Userprofile";

export const mainRoute = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/buynow",
        element: <BuyNow />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/userprofile",
        element: <Userprofile />,
      },
    ],
  },
]);
