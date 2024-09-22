/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
// Removed Autoplay import since it's not needed
import "./ButtomSlider.css";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CategorySlider = ({ HomeTopButton }) => {
  const [focusedIndex, setFocusedIndex] = useState(0);

  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      speed={5000}
      loop={false}
      breakpoints={{
        420: { slidesPerView: 3, spaceBetween: 5 },
        640: { slidesPerView: 4, spaceBetween: 5 },
        1160: { slidesPerView: 6, spaceBetween: 10 },
        1650: { slidesPerView: 8, spaceBetween: 10 },
        2000: { slidesPerView: 9, spaceBetween: 10 },
      }}
      className="mySwiper"
    >
      {HomeTopButton?.map((item, index) => (
        <SwiperSlide key={index}>
          <button
            key={index}
            onClick={() => setFocusedIndex(index)} // Set focused index on click
            className={`flex justify-center items-center w-[100%] h-[100%] rounded-[4px] ${
              focusedIndex === index ? "bg-[#46AEF7] text-[#ffff]" : ""
            } text-[#333]`}
          >
            <h1 className=" p-[8px 20px 7px 20px] text-[12px] text-center rounded-[4px] font-[500]">
              {item.name}
            </h1>
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CategorySlider;
