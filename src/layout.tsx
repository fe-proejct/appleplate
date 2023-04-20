import { Outlet } from "react-router-dom";
import GlobalStyle from "./styles/global-styles";
import { theme } from './styles/theme';

import Footer from "./features/ui/Footer";
import Header from "./features/ui/Header";
import { ThemeProvider } from "styled-components";

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  )
}