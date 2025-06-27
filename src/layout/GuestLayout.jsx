import { Outlet } from "react-router-dom";
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";

const GuestLayout = () => {
    return (
        <>
            <AppHeader />
            <Outlet />
            <AppFooter />
        </>
    );
};

export default GuestLayout;