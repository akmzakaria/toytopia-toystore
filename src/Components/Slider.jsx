import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import { Navigation } from 'swiper/modules'
import { Pagination } from 'swiper/modules'
import { Autoplay } from 'swiper/modules'

import carImg from '../assets/green-black_car.webp'
import carImg2 from '../assets/car.jpg'
import houseImg from '../assets/house.webp'
import gunImg from '../assets/gun.webp'
import gunImg2 from '../assets/gun2.jpg'
import Aos from 'aos'
import car2 from '../assets/car2.jpg'
import bus from '../assets/bus.jpg'
import airplane from '../assets/airplane.jpg'
import buggu from '../assets/digitalbuggu.jpg'
import ship from '../assets/ship.jpg'

const Slider = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: false,
    })
  }, [])

  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      className="max-w-full mt-10 mx-auto px-2 md:px-0"
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="lg:w-[900px] xl:w-full rounded-2xl h-75 md:h-[450px]"
      >
        <SwiperSlide>
          <img src={car2} className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bus} className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={airplane} className="w-full object-cover object-[0%_7%] h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={buggu} className="w-full object-[0%_50%] h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gunImg2} className="w-full object-[0%_60%] h-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider
