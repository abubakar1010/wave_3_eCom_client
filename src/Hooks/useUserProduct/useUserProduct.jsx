import { useQuery } from "@tanstack/react-query";
import useAuth from "../UseAuth/useAuth";
import useAxiosSecure from "../useaxiosSecure/useaxiosSecure";


const useUserProduct = () => {

    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const { data: product = [], refetch, isFetching } = useQuery({
        queryKey: ["product"],
        queryFn: async () => {
          const result = await axiosSecure.get(`/product/user/${user?.email}`);
          return result.data;
        },
      });

      return [product, refetch, isFetching]

};

export default useUserProduct;