import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <>
      <Header />
      <main style={{ marginTop: 35 }}>
        <h1>Waldorf Parents Helper!!</h1>

        <Outlet />
      </main>
      <Footer />
    </>
  );
}
