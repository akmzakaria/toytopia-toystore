import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

import carImg from '../assets/green-black_car.webp';
import carImg2 from '../assets/car.jpg';
import houseImg from '../assets/house.webp';
import gunImg from '../assets/gun.webp';
import gunImg2 from '../assets/gun2.jpg';

const Slider = () => {
  return (
    <div className="max-w-11/12 mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="lg:w-[900px] xl:w-[1000px] rounded-2xl h-75 md:h-[450px]"
      >
        <SwiperSlide>
          <img src={houseImg} className="w-full h-full object-fit" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carImg} className="w-full h-full object-fit" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gunImg} className="w-full h-full object-fit" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carImg2} className="w-full h-full object-fit" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gunImg2} className="w-full h-full object-fit" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
