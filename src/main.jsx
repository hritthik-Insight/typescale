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
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <DogImage />,
      },
      {
        path: "/fontdisplay",
        element: <FontDisplay />,
      },
      {
        path: "/typescale",
        element: <Typescale />,
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
