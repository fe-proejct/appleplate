import { Outlet } from "react-router-dom";
import GlobalStyle from "./styles/global-styles";
import Footer from "./features/ui/Footer";
import Header from "./features/ui/Header";

export default function Layout() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}