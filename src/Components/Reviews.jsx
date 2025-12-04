import React, { use, useEffect } from 'react'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import ReviewCard from './ReviewCard'
import Aos from 'aos'

const Reviews = ({ reviewPromise }) => {
  const reveiws = use(reviewPromise)
  //   console.log(reveiws)

  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: false,
    })
  }, [])

  return (
    <div className="my-15">
      <div data-aos="zoom-in" className="text-center">
        <h3 className="text-2xl font-bold ">What our customers are sayings</h3>
        <p className="mb-5">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper
          alignment, reduce pain, and strengthen your body with ease!
        </p>
      </div>
      <Swiper
        data-aos="zoom-in"
        loop:true
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: 10,
          scale: 1,
          depth: 500,
          modifier: 0.75,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {reveiws.map((review) => (
          <SwiperSlide className="" key={review.id}>
            <ReviewCard review={review}></ReviewCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Reviews
