import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer";
import NavBar from "../components/Shared/Navbar";


const Root = () => {    

    return (
        <div>
            <NavBar />
            <div className=" min-h-screen mt-4 mb-24">
            <Outlet/>
            </div>
            <Footer />
        </div>
    );
};

export default Root;