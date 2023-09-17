import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <main id='layout'>
            <Outlet />
        </main>
    )
};

export default Layout;