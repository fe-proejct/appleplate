import { Outlet } from "react-router-dom";
import Footer from "./features/ui/Footer";
import Header from "./features/ui/Header";

export default function Layout() {
    return <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
}