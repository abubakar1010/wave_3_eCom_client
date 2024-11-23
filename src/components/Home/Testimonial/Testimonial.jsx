import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Testimonial = () => {
  const reviews = [
    {
      name: "John Doe",
      review: "Great product! The quality is excellent and it arrived on time. Highly recommend.",
      ratings: 4.5,
    },
    {
      name: "Jane Smith",
      review: "Decent experience overall, but the delivery was slightly delayed.",
      ratings: 3.8,
    },
    {
      name: "Michael Brown",
      review: "Absolutely love this item! Exceeded my expectations.",
      ratings: 5.0,
    },
    {
      name: "Emily Davis",
      review: "The product is good, but the packaging could be better.",
      ratings: 4.2,
    },
    {
      name: "Chris Wilson",
      review: "Not satisfied with the purchase. The product was not as described.",
      ratings: 2.5,
    },
    {
      name: "React Enthusiast",
      review: "React is an amazing library for building user interfaces! The component-based structure makes development a breeze.",
      ratings: 5.0,
    },
  ];
  
  console.log(reviews);
  
  //   console.log(reviews);

  return (
    <>

      <div className=" mt-12 mb-28">
        <div className=" text-center mt-4">
        <h1 className=" text-2xl font-semibold">What Our Customer Say</h1>
        <p className=" text-lg mt-2 px-24">Discover what our valued customers have to say about their experiences with our products and services. Their honest feedback inspires us to deliver exceptional quality and service every time.</p>
        </div>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {reviews.map((item) => (
            <SwiperSlide key={item._id}>
              <div className=" flex flex-col justify-center gap-5 items-center my-12 ">
                <Rating style={{ maxWidth: 180 }} value={item.ratings} readOnly />
                <div className=" flex">
                    <BiSolidQuoteSingleLeft className=" text-6xl" />
                    <BiSolidQuoteSingleLeft className=" text-6xl -ml-6 " />
                    </div>
                <p className=" max-w-2xl text-center mt-6">{item.review}</p>
                <p className=" text-[#CD9003] uppercase font-medium text-lg ">{item.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonial;
