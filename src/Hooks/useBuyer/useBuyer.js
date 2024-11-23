import { useQuery } from "@tanstack/react-query";

import { Spinner } from "@material-tailwind/react";
import useAuth from "../UseAuth/useAuth";
import useAxiosSecure from "../useaxiosSecure/useaxiosSecure";

const useBuyer = () => {

    const {user, isLoading} = useAuth()
    const axiosSecure =  useAxiosSecure()
    

    const {data:isBuyer, isLoading: isBuyerLoading} = useQuery({
        queryKey: [user?.email, 'isBuyer'],
        queryFn: async() => {
            if(isLoading) return <div className=" flex justify-center items-center h-screen"><Spinner className=" w-16 h-16" color="purple" /></div>
            const result = await axiosSecure.get(`/users/buyer/${user?.email}`)            
            return result.data?.buyer
        }
    })

    return [isBuyer, isBuyerLoading]
};

export default useBuyer;