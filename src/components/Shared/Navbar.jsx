import React from "react";
import {
	Navbar,
	Typography,
	IconButton,
	Collapse,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
// import useAdmin from "../../hooks/useAdmin/useAdmin";
import Profile from "../Profile/Profile";
import useAuth from "../../Hooks/UseAuth/useAuth";

const NavBar = () => {
	const [openNav, setOpenNav] = React.useState(false);
	const { user } = useAuth();

  console.log(user);
  
	// const [isAdmin] = useAdmin();

	const isAdmin = false;

	React.useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setOpenNav(false)
		);
	}, []);

	const navList = (
		<ul className="mt-2 mb-4 flex flex-col gap-2  lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
			<NavLink
				to={"/"}
				className={({ isActive }) =>
					isActive
						? "flex items-center border-b py-1 px-4 border-[#EB3678] shadow-none  hover:duration-300 duration-300 font-medium"
						: "flex items-center text-[#222121] hover:text-[#EB3678] hover:border-b hover:border-[#EB3678] hover:duration-300 duration-300 font-bold"
				}
			>
				Home
			</NavLink>
			<NavLink
				to={"/product"}
				className={({ isActive }) =>
					isActive
						? "flex items-center border-b py-1 px-4 border-[#EB3678] shadow-none  hover:duration-300 duration-300 font-medium"
						: "flex items-center text-[#222121] hover:text-[#EB3678] hover:border-b hover:border-[#EB3678] hover:duration-300 duration-300 font-bold"
				}
			>
				Product
			</NavLink>

			{user?.email && (
				<NavLink
					to={"/addArticles"}
					className={({ isActive }) =>
						isActive
							? "flex items-center border-b py-1 px-4 border-[#EB3678] shadow-none  hover:duration-300 duration-300 font-medium"
							: "flex items-center text-[#222121] hover:text-[#EB3678] hover:border-b hover:border-[#EB3678] hover:duration-300 duration-300 font-bold"
					}
				>
					Add Articles
				</NavLink>
			)}

			<NavLink
				to={"/allArticle"}
				className={({ isActive }) =>
					isActive
						? "flex items-center border-b py-1 px-4 border-[#EB3678] shadow-none  hover:duration-300 duration-300 font-medium"
						: "flex items-center text-[#222121] hover:text-[#EB3678] hover:border-b hover:border-[#EB3678] hover:duration-300 duration-300 font-bold"
				}
			>
				All Articles
			</NavLink>

			{user?.email && (
				<NavLink
					to={"/subscription"}
					className={({ isActive }) =>
						isActive
							? "flex items-center border-b py-1 px-4 border-[#EB3678] shadow-none  hover:duration-300 duration-300 font-medium"
							: "flex items-center text-[#222121] hover:text-[#EB3678] hover:border-b hover:border-[#EB3678] hover:duration-300 duration-300 font-bold"
					}
				>
					Subscription
				</NavLink>
			)}

			{user?.email && (
				<NavLink
					className={({ isActive }) =>
						isActive
							? "flex items-center border-b py-1 px-4 border-[#EB3678] shadow-none  hover:duration-300 duration-300 font-medium"
							: "flex items-center text-[#222121] hover:text-[#EB3678] hover:border-b hover:border-[#EB3678] hover:duration-300 duration-300 font-bold"
					}
					to={`/myArticles`}
				>
					My Articles
				</NavLink>
			)}

			{isAdmin && (
				<NavLink
					className={({ isActive }) =>
						isActive
							? "flex items-center border-b py-1 px-4 border-[#EB3678] shadow-none  hover:duration-300 duration-300 font-medium"
							: "flex items-center text-[#222121] hover:text-[#EB3678] hover:border-b hover:border-[#EB3678] hover:duration-300 duration-300 font-bold"
					}
					to={"/dashboard"}
				>
					DashBoard
				</NavLink>
			)}


			{user?.email ? (
				<Profile />
			) : (
				<NavLink
					className={({ isActive }) =>
						isActive
							? "flex items-center border-b py-1 px-4 border-[#EB3678] shadow-none  hover:duration-300 duration-300 font-medium"
							: "flex items-center text-[#222121] hover:text-[#EB3678] hover:border-b hover:border-[#EB3678] hover:duration-300 duration-300 font-bold"
					}
					to={"/login"}
				>
					Login
				</NavLink>
			)}
		</ul>
	);
	return (
		<>
			<div className="  ">
				<Navbar className="h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
					<div className="flex items-center justify-between ">
						<Typography
							as="p"
							className="mr-4 text-[#222121] cursor-pointer py-1.5 font-medium"
						>
							<Link to={"/"}>Bazario</Link>
						</Typography>
						<div className="flex items-center gap-4 z-20">
							<div className=" text-[#222121] mr-4 hidden lg:block">
								{navList}
							</div>
							<IconButton
								variant="text"
								className="  ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
								ripple={false}
								onClick={() => setOpenNav(!openNav)}
							>
								{openNav ? (
									<MdOutlineCancel className="text-black text-2xl" />
								) : (
									<GiHamburgerMenu className="text-black text-2xl" />
								)}
							</IconButton>
						</div>
					</div>
					<Collapse open={openNav}>{navList}</Collapse>
				</Navbar>
			</div>
		</>
	);
};

export default NavBar;
