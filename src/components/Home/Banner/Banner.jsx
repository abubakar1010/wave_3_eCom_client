import "swiper/css";
import "swiper/css/pagination";
import "./Banner.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { FaAngleDown } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 14000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        new
        modules={[Autoplay, Pagination]}
        className="banner"
      >
        <SwiperSlide style={{ width: "100%" }}>
          <div className=" bg-[url('https://i.postimg.cc/WpWtB7MW/tour-destination-roma.jpg')] w-ful h-[520px] bg-cover bg-center bg-no-repeat mb-8 rounded-xl relative ">
            <div className="absolute inset-0 grid h-full w-full bg-[#1d1d1d70] rounded-xl">
            <div className="text-white pt-28">
                <h1 className=" text-6xl font-extrabold text-center ">Discover the world of wonders </h1>
                <p className=" text-2xl uppercase font-bold mt-7 mb-3 text-center">
                <Typewriter
            words={['With ExploreHub', ' through Spain', 'through The Fabulous Wonders of Greece']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
                </p>
              </div>
            </div>
            <div className="md:absolute md:bottom-8 hidden px-24 md:block w-full mx-auto ">
              <div className=" bg-[#ffffff33] py-6 px-6 rounded-2xl">
                <div className=" bg-white rounded-md ">
                  <div className=" flex items-center justify-between px-12 py-6">
                    <div className="">
                      <p className=" text-[#0f2454]">Where to go</p>
                    </div>
                    <div className=" flex gap-28 items-center border-l-2 border-black/40 pl-8 ">
                      <p className=" text-[#0f2454]">Destination</p>
                      <FaAngleDown className=" text-lg text-[#6dc234]" />
                    </div>
                    <div className=" flex gap-28 items-center border-x-2 border-black/40 px-8 ">
                      <p className=" text-[#0f2454]">Duration</p>
                      <FaAngleDown className=" text-lg text-[#6dc234]" />
                    </div>
                    <div className=" flex gap-2 items-center border-black/40 px-12 py-3 bg-[#6dc234] text-white rounded-sm hover:bg-[#0f2454] duration-700 hover:duration-700 ">
                      <IoMdSearch className=" text-2xl" />
                      <p className=" font-medium">Find Now</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "100%" }}>
          <div className=" bg-[url('https://i.postimg.cc/5tCtLcGD/dubai-slider-screen-1.jpg')] w-full h-[520px] bg-cover bg-center bg-no-repeat my-8 rounded-xl relative ">
            <div className="absolute inset-0 grid h-full w-full bg-[#1d1d1d70] rounded-xl">
            <div className="text-white  pt-28">
                <h1 className=" text-6xl font-extrabold text-center ">Destination of Distinction </h1>
                <p className=" text-2xl uppercase font-bold mt-7 mb-3 text-center">
                FABULOUS DUBAI IN UNITED ARAB EMIRATES
                </p>
              </div>
            </div>
            <div className="md:absolute md:bottom-8 hidden px-24 md:block w-full mx-auto ">
              <div className=" bg-[#ffffff33] py-6 px-6 rounded-2xl">
                <div className=" bg-white rounded-md ">
                  <div className=" flex items-center justify-between px-12 py-6">
                    <div className="">
                      <p className=" text-[#0f2454]">Where to go</p>
                    </div>
                    <div className=" flex gap-28 items-center border-l-2 border-black/40 pl-8 ">
                      <p className=" text-[#0f2454]">Destination</p>
                      <FaAngleDown className=" text-lg text-[#6dc234]" />
                    </div>
                    <div className=" flex gap-28 items-center border-x-2 border-black/40 px-8 ">
                      <p className=" text-[#0f2454]">Duration</p>
                      <FaAngleDown className=" text-lg text-[#6dc234]" />
                    </div>
                    <div className=" flex gap-2 items-center border-black/40 px-12 py-3 bg-[#6dc234] text-white rounded-sm hover:bg-[#0f2454] duration-700 hover:duration-700 ">
                      <IoMdSearch className=" text-2xl" />
                      <p className=" font-medium">Find Now</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "100%" }}>
        <div className=" bg-[url('https://i.postimg.cc/DfMLrhYw/tour-destination-italy.jpg')] w-full h-[520px] bg-cover bg-center bg-no-repeat my-8 rounded-xl relative ">
            <div className="absolute inset-0 grid h-full w-full bg-[#1d1d1d70] rounded-xl">
            <div className="text-white  pt-28">
                <h1 className=" text-6xl font-extrabold text-center ">The world is worth seeing </h1>
                <p className=" text-2xl uppercase font-bold mt-7 mb-3 text-center">
                Where Every Step is a New Discovery
                </p>
              </div>
            </div>
            <div className="md:absolute md:bottom-8 hidden px-24 md:block w-full mx-auto ">
              <div className=" bg-[#ffffff33] py-6 px-6 rounded-2xl">
                <div className=" bg-white rounded-md ">
                  <div className=" flex items-center justify-between px-12 py-6">
                    <div className="">
                      <p className=" text-[#0f2454]">Where to go</p>
                    </div>
                    <div className=" flex gap-28 items-center border-l-2 border-black/40 pl-8 ">
                      <p className=" text-[#0f2454]">Destination</p>
                      <FaAngleDown className=" text-lg text-[#6dc234]" />
                    </div>
                    <div className=" flex gap-28 items-center border-x-2 border-black/40 px-8 ">
                      <p className=" text-[#0f2454]">Duration</p>
                      <FaAngleDown className=" text-lg text-[#6dc234]" />
                    </div>
                    <div className=" flex gap-2 items-center border-black/40 px-12 py-3 bg-[#6dc234] text-white rounded-sm hover:bg-[#0f2454] duration-700 hover:duration-700 ">
                      <IoMdSearch className=" text-2xl" />
                      <p className=" font-medium">Find Now</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
