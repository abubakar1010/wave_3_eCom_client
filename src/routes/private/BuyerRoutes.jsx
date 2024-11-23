import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/UseAuth/useAuth";
import useBuyer from "../Hooks/useBuyer/useBuyer";
import { Spinner } from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
const BuyerRoute = ({children}) => {
    const {user, isLoading} = useAuth()
    const [isBuyer, isBuyerLoading] = useBuyer()
    // console.log(isLoading);
    
    const location = useLocation()

    if(isLoading || isBuyerLoading) return <div className=" flex justify-center items-center h-screen"><Spinner className=" w-16 h-16" color="purple" /></div>

    console.log(user, isBuyer);
    

    if(user && isBuyer) return children

    return (
        <Navigate state={location.pathname} to={"/login"} replace ></Navigate>
    );
};

export default BuyerRoute;