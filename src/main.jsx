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


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    ],
    basename: "/typescale/"
  }
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
