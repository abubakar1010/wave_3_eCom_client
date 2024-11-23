import { useContext } from "react";
import { AuthContext } from "../../components/Auth/AuthProvide";


const useAuth = () => {
    
    const auth = useContext(AuthContext)
    console.log(auth)
    return auth
};

export default useAuth;


