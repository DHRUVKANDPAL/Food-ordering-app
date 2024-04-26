import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error.jsx";
import Contact from "./components/Contact.jsx";
import Aboutus from "./components/Aboutus.jsx";
import Body from "./components/Body.jsx";
import Resmenu from "./components/Resmenu.jsx";
import Shimmer from "./components/Shimmer.jsx";
const AppLayout = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Suspense fallback={<Shimmer/>}><Body /></Suspense> },
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
  
    <RouterProvider router={AppLayout} />
  
);
