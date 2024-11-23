import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/UseAuth/useAuth";
import useSeller from "../Hooks/useSeller/useSeller";
import { Spinner } from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
const SellerRoute = ({children}) => {
    const {user, isLoading} = useAuth()
    const [isSeller, isSellerLoading] = useSeller()
    // console.log(isLoading);
    
    const location = useLocation()

    if(isLoading || isSellerLoading) return <div className=" flex justify-center items-center h-screen"><Spinner className=" w-16 h-16" color="purple" /></div>

    console.log(user, isSeller);
    

    if(user && isSeller) return children

    return (
        <Navigate state={location.pathname} to={"/login"} replace ></Navigate>
    );
};

export default SellerRoute;