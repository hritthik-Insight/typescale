import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import ErrorPage from "./ErrorPage";
import { FontDisplay } from "./Pages/FontDisplay.jsx";
import { Typescale } from "./Pages/TypeScale.jsx";
import App from "./App.jsx";
import DogImage from "./Pages/DogImage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    exact: true,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <DogImage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/fontdisplay",
        element: <FontDisplay />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/typescale",
        element: <Typescale />,
        errorElement: <ErrorPage />,
      }
    ],
    basename: "/"
  }
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
