import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import CustomSoftware from '@/public/images/carousel 1.webp'
import WebMobileApps from '@/public/images/carousel 3.webp'
import UIUXDesign from '@/public/images/home-care.webp'
import CloudSolutions from '@/public/images/long-term.webp'
import AI_ML from '@/public/images/physical-therapy.webp'
import ITConsulting from '@/public/images/speech-and-swallow.webp'
import Blockchain from '@/public/images/speech-and-swallow.webp'
import 'swiper/css'
import Button from '../Button'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

const slides = [
  {
    img: CustomSoftware,
    title: 'Custom Software',
    desc: 'We develop tailored software solutions to meet your unique business needs, ensuring efficiency and scalability.',
  },
  {
    img: WebMobileApps,
    title: 'Web & Mobile Apps',
    desc: 'Our team crafts high-performance web and mobile applications that deliver seamless user experiences across all devices.',
  },
  {
    img: UIUXDesign,
    title: 'UI/UX Design',
    desc: 'We create intuitive and visually stunning designs that enhance user engagement and improve overall usability.',
  },
  {
    img: CloudSolutions,
    title: 'Cloud Solutions',
    desc: 'Our cloud computing services help businesses scale efficiently, ensuring secure and reliable cloud-based infrastructures.',
  },
  {
    img: AI_ML,
    title: 'AI & ML',
    desc: 'Leverage artificial intelligence and machine learning to automate processes, gain insights, and enhance decision-making.',
  },
  {
    img: ITConsulting,
    title: 'IT Consulting',
    desc: 'Our expert consultants provide strategic IT guidance to optimize your technology landscape and drive business growth.',
  },
  {
    img: Blockchain,
    title: 'Blockchain',
    desc: 'We build secure and decentralized blockchain solutions, enabling transparency and efficiency in your operations.',
  },
]

const Carousel = () => {
  return (
    <div className='w-full my-8 md:my-12 relative md:px-7'>
      <Swiper
        className='w-full max-w-7xl !p-4 mx-auto overflow-visible services'
        slidesPerView={3}
        spaceBetween={52}
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-service-next',
          prevEl: '.swiper-service-prev',
          clickable: true,
        }}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1, // 1 slide per view for screens smaller than 640px
            spaceBetween: 20, // Adjust space between slides if needed
          },
          768: {
            slidesPerView: 2, // Optional: 2 slides for tablets
            spaceBetween: 30, // Adjust space
          },
          1024: {
            slidesPerView: 3, // Restore to 3 slides for desktops
            spaceBetween: 52,
          },
        }}
      >
        {slides.map((el, ind) => (
          <SwiperSlide
            className='rounded-2xl shadow-[0px_1px_16px_0px_rgba(0,0,0,0.1)] md:shadow-[0px_1px_16px_0px_rgba(0,0,0,0.2)] !h-[472px]'
            key={ind}
          >
            <div className='w-full h-64 overflow-hidden rounded-2xl'>
              <Image
                src={el.img}
                alt={el.title}
                className='min-w-full w-fit h-fit -translate-y-[calc((100%-256px)/2)] min-h-full'
                loading='lazy'
              />
            </div>
            <div className='p-7'>
              <h3 className='text-center font-medium text-xl text-[#151515] pb-4'>
                {el.title}
              </h3>
              <p className='text-sm text-[#575757]'>{el.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='hero-navigation flex flex-row justify-center mt-8 gap-3 md:mb-7 md:absolute md:top-1/2 md:-translate-y-1/2 md:justify-between md:w-full z-20 left-0'>
        <Button size='iconSM' className='swiper-service-prev' variant='primary'>
          <FaChevronLeft />
        </Button>
        <Button size='iconSM' className='swiper-service-next' variant='primary'>
          <FaChevronRight />
        </Button>
      </div>
    </div>
  )
}

export default Carousel
