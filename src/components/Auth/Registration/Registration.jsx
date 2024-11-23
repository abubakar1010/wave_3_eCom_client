import {
	Card,
	Input,
	Checkbox,
	Button,
	Typography,
} from "@material-tailwind/react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../AuthProvide";
import GoogleLogin from "../SocialLoign/GoogleLogin";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";

const Registration = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const axiosPublic = useAxiosPublic();

	const { createUser, updateUser } = useContext(AuthContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		const { email, password, name, imgURL } = data;
		createUser(email, password)
			.then((res) => {
				// console.log("from reg page ------> ", res);

				updateUser(name, imgURL)
					.then(() => {
						// const userInfo = {name, email }
						const userInfo = {
							name,
							email,
							image: imgURL,
							lastLogin: res.user?.metadata.lastSignInTime,
							role: "buyer",
							wishlist: [],
							cart: [],
						};

						axiosPublic.post("/users", userInfo).then(() => {
							Swal.fire({
								title: "Register!",
								text: "You are successfully Registered!",
								icon: "success",
							});

							navigate(location?.state ? location.state : "/");
						});
					})
					.catch(() => {
						Swal.fire({
							icon: "error",
							title: "Oops...",
							text: "Update Profile failed. Something went wrong! ",
							footer: "please try again",
						});
					});
			})
			.catch(() => {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Registration failed. Something went wrong! ",
					footer: "please try again",
				});
			});
	};

	return (
		<>
			<Helmet>
				<title>Register | Bazario </title>
			</Helmet>
			<div className=" my-12 flex justify-center items-center">
				<Card color="transparent" shadow={false}>
					<Typography variant="h4" color="blue-gray">
						Sign Up
					</Typography>
					<Typography color="gray" className="mt-1 font-normal">
						Nice to meet you! Enter your details to register.
					</Typography>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
					>
						<div className="mb-1 flex flex-col gap-6">
							<Typography variant="h6" color="blue-gray" className="-mb-3">
								Your Name
							</Typography>
							<Input
								size="lg"
								name="name"
								{...register("name", { required: true })}
								placeholder="name@mail.com"
								className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
								labelProps={{
									className: "before:content-none after:content-none",
								}}
							/>
							{errors.name && (
								<span className=" text-lg text-red-600">
									Please enter your name.
								</span>
							)}

							<Typography variant="h6" color="blue-gray" className="-mb-3">
								Photo URL
							</Typography>
							<Input
								size="lg"
								name="imgURL"
								{...register("imgURL", { required: true })}
								placeholder="https://example.png"
								className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
								labelProps={{
									className: "before:content-none after:content-none",
								}}
							/>
							{errors.imgURL && (
								<span className=" text-lg text-red-600">
									Photo URL is required
								</span>
							)}
							<Typography variant="h6" color="blue-gray" className="-mb-3">
								Your Email
							</Typography>
							<Input
								size="lg"
								name="email"
								{...register("email", { required: true })}
								placeholder="name@mail.com"
								className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
								labelProps={{
									className: "before:content-none after:content-none",
								}}
							/>
							{errors.email && (
								<span className=" text-lg text-red-600">
									Please enter your email address.
								</span>
							)}
							<Typography variant="h6" color="blue-gray" className="-mb-3">
								Password
							</Typography>
							<Input
								type="password"
								name="password"
								labelProps={{
									className: "before:content-none after:content-none",
								}}
								{...register("password", {
									required: true,
									minLength: 8,
									maxLength: 20,
									pattern:
										/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!#$%^&*])[A-Za-z\d@!#$%^&*]{8,}$/,
								})}
								size="lg"
								placeholder="********"
								className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
							/>
							{errors.password?.type === "required" && (
								<p className=" text-lg text-red-600">
									Please enter a password.
								</p>
							)}
							{errors.password?.type === "minLength" && (
								<p className=" text-lg text-red-600">
									Password must be at least 8 characters long
								</p>
							)}
							{errors.password?.type === "maxLength" && (
								<p className=" text-lg text-red-600">
									Password must be less than 20 character
								</p>
							)}
							{errors.password?.type === "pattern" && (
								<p className=" text-lg text-red-600">
									{" "}
									Password must include at least one uppercase letter, one
									number, and one special character.
								</p>
							)}
						</div>
						<Checkbox
							label={
								<Typography
									variant="small"
									color="gray"
									className="flex items-center font-normal"
								>
									I agree the
									<a
										href="#"
										className="font-medium transition-colors hover:text-gray-900"
									>
										&nbsp;Terms and Conditions
									</a>
								</Typography>
							}
							containerProps={{ className: "-ml-2.5" }}
						/>
						<Button
							type="submit"
							className="bg-gradient-to-r from-[#EB3678] to-[#FB773C] mt-6"
							fullWidth
						>
							sign up
						</Button>
						<Typography color="gray" className="mt-4 text-center font-normal">
							Already have an account?{" "}
							<Link to={"/login"} className="font-medium text-gray-900">
								Sign In
							</Link>
						</Typography>
					</form>
					<GoogleLogin />
				</Card>
			</div>
		</>
	);
};

export default Registration;
