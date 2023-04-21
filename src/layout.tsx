import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Footer from './features/ui/Footer';
import Header from './features/ui/Header';
import GlobalStyle from './styles/global-styles';
import { theme } from './styles/theme';

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}