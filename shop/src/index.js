import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Package from "./pages/Package";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Package />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

reportWebVitals();
