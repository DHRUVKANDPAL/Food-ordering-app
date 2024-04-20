import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error.jsx";
import Contact from "./components/Contact.jsx";
import Aboutus from "./components/Aboutus.jsx";
import Body from "./components/Body.jsx";
import Resmenu from "./components/Resmenu.jsx";
const AppLayout = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/About",
        element: <Aboutus />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <Resmenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={AppLayout} />
  </React.StrictMode>
);
