import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage.jsx";
import { RootLayout } from "./pages/RootLayout.jsx";
import { Offers } from "./pages/Offers.jsx";
import { Requests } from "./pages/Request.jsx";
import { Contact } from "./pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "offers",
        element: <Offers />,
      },
      { path: "requests", element: <Requests /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
