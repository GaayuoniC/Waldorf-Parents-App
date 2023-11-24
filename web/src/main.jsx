import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage.jsx";
import { RootLayout } from "./pages/RootLayout.jsx";
import { Offers } from "./pages/Offers.jsx";
import { Requests } from "./pages/Request.jsx";
import { Contact } from "./pages/Contact.jsx";
// import { RegistrationPage } from "./pages/RegistrationPage.jsx";
import { UserProfile } from "./pages/UserProfile.jsx";
// import { LoginPage } from "./pages/LoginPage.jsx";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
} from "@clerk/clerk-react";
if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

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
      {
        path: "/registration/*",
        element: (
          <SignUp
            routing="path"
            path="/registration"
            signInUrl="http://localhost:5173/login"
          />
        ),
      },
      {
        path: "/login/*",
        element: (
          <SignIn
            routing="path"
            path="/login"
            signUpUrl="http://localhost:5173/registration"
          />
        ),
      },
      {
        path: "/userprofile",
        element: (
          <>
            <SignedIn>
              <UserProfile />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider
      publishableKey={clerkPubKey}
      signInUrl="http://localhost:5173/login"
    >
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>
);
