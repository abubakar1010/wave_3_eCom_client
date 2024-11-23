/* eslint-disable no-unused-vars */
import { FaStar } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { BiDollar } from "react-icons/bi";
import { Rating } from "@material-tailwind/react";

const ProductCard = () => {
	const _id = 12;
	const title =
		"Wireless Hdmi Transmitter and Receiver, Wireless HD Extender Plug & Play Portable 2.4G/5G with LED Screen Wireless Hdmi Kit for Streaming Video and Audio to Monitor";
	const reviews = "12";
	const image =
		"https://m.media-amazon.com/images/I/61lRi1IgvUL._AC_UY327_FMwebp_QL65_.jpg";
	const price = 12;
	const rating = 3.5;
	const description = "12";
	const offer = { title: "Black Friday Sell", discount: 20 };
	const brand = "apple";
	const category = "watch";
	const details = [
		{ title: "connectivity", data: "USB" },
		{ title: "connectivity", data: "USB" },
		{ title: "connectivity", data: "USB" },
	];

	return (
		<>
			<div className=" lg:h-[420px] ">
				<div className="flex flex-col lg:flex-row items-center h-full rounded-xl gap-12">
					<div className=" w-full lg:w-[220px] h-[220px] ">
						<img
							src={image}
							alt=""
							className=" w-full  object-cover px-2 lg:pl-4 py-6"
						/>
					</div>

					<div className=" lg:w-[770px] px-2 lg:pr-6">
						<div className="py-3">
							<h1 className=" font-bold  text-xl ">{title}</h1>
						</div>
						<div className=" flex items-center gap-2">
							<Rating value={parseInt(rating)} readonly />
							<p className=" font-medium text-lg ">{rating || "4.8"}</p>
						</div>

						{offer ? (
							<div>
								<p className=" bg-[#f1f2f3] text-[#323637] px-6 py-1  rounded-md w-max mt-4">
									{offer.title}
								</p>
								<div className=" flex items-center gap-3 my-4 text-xl">
                  <p className=" font-medium text-red-600">
                    - {offer.discount}%
                  </p>
									<div className=" flex items-center ">
										<p className=" text-lg">Us</p>
										<BiDollar />
										<p>{price}</p>
									</div>
								</div>
							</div>
						) : (
							<div className=" flex items-center text-[#378367] ">
								<p className=" text-lg font-medium">Us</p>
								<BiDollar />
								<p>{price}</p>
							</div>
						)}

						<div className=" flex justify-between px-3 items-center pt-4 pb-8 lg:pb-3">
							<div>
								<NavLink to={`/details/${_id}`}>
									<button className=" bg-gradient-to-r from-[#6dc234] to-[#6dc234ad]  py-2 px-4 text-white font-bold  rounded-md text-xl hover:scale-105 duration-500 hover:duration-500  ">
										Add to cart
									</button>
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductCard;
