import React from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { paths } from "./paths";

const Home = React.lazy(() => import("@/pages/home"));
const Investments = React.lazy(() => import("@/pages/investments"));
const Research = React.lazy(() => import("@/pages/research"));
const Teams = React.lazy(() => import("@/pages/teams"));

export default function Router() {
  return useRoutes([...root]);
}

const root = [
  {
    path: paths.root,
    element: <Home />,
  },
  {
    path: paths.research,
    element: <Research />,
  },
  {
    path: paths.investments,
    element: <Investments />,
  },
  // {
  //   path: paths.team,
  //   element: <Teams />,
  // },
  { path: "*", element: <Navigate to="/404" replace /> },
];

export * from "./paths";
