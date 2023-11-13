import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <h1>Welcome </h1>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
