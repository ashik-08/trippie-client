import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Banner from "../components/Banner/Banner";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Banner />,
      },
    ],
  },
]);
