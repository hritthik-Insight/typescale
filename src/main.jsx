import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import Root from "./App.jsx";
import ErrorPage from "./ErrorPage";
import { FontDisplay } from "./Pages/FontDisplay.jsx";
import { Typescale } from "./Pages/TypeScale.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/fontdisplay",
        element: <FontDisplay />,
      },
      {
        path: "/typescale",
        element: <Typescale />,
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
