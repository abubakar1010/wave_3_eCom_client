import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../hooks/UseAuth/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";

const GoogleLogin = () => {
	const axiosPublic = useAxiosPublic();
	const navigate = useNavigate();

	const { googleLogin, user } = useAuth();

	const handleGoogleLogin = () => {
		googleLogin()
			.then(() => {
				if (user) {
					const userInfo = {
						name: user?.displayName,
						email: user?.email,
						image: user?.photoURL,
						lastLogin: user?.metadata.lastSignInTime,
						role: "buyer",
					};
					console.log(userInfo);

					axiosPublic.post("/users", userInfo).then((res) => {
						console.log(res);
					});
				}
        navigate("/");
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<>
			<div className="inline-flex items-center justify-center w-full mt-2">
				<hr className="w-full h-px my-8 bg-[#AAAAAA] border-0 " />
				<span className="absolute px-3 font-medium text-xl -translate-x-1/2 bg-white left-1/2 ">
					or
				</span>
			</div>

			<div
				onClick={handleGoogleLogin}
				className=" flex gap-4 border-2 border-[#4c4a4aae] items-center py-3 rounded-full justify-center cursor-pointer"
			>
				<FcGoogle className=" text-3xl" />
				<p className=" text-lg font-medium text-[#151515ca]">
					Continue with Google
				</p>
			</div>
		</>
	);
};

export default GoogleLogin;
