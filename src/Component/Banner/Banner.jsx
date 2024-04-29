import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import '../Banner/Banner.css'
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
const Banner = () => {
    return (
        <div className='z-20  font-Mulish'>
            <Swiper navigation={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation]}
                loop={true}
                className="mySwiper"
            >
                <SwiperSlide>

                    <div className='w-full flex justify-start items-center min-h-[100vh] bg-cover' style={{ backgroundImage: `url(https://i.postimg.cc/gjGbkFm8/1.webp)` }} >
                        <div className='w-[80%] mx-auto flex flex-col-reverse md:flex-row gap-12 items-center'>

                            <div>
                                <div className='w-[90%] md:w-[70%] mx-auto text-center p-8  rounded-xl bg-opacity-5 backdrop-blur-3xl bg-[#b7004f46]'>
                                    <h1 className='text-white font-bold text-3xl'>Let Your Creativity Flourish with Our Extensive Selection of Artistic Treasures. </h1>
                                    <div className='flex justify-center'>
                                        <Link to={'/allcraft'}><button className='border mt-5 rounded-lg bg-transparent animate__animated  animate__fadeInLeft border-white py-2 px-4 font-bold text-white flex gap-1 items-center hover:bg-[#b70050] transition-all duration-1000'>About Items<IoIosArrowForward size={25} /></button></Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className='w-full flex justify-start items-center h-screen bg-cover' style={{ backgroundImage: `url(https://i.postimg.cc/SxmgKF0c/vibrant-watercolor-paintings-messy-desk-showcase-artist-creativity-generated-by-ai.webp)` }} >
                        <div className='w-[80%] mx-auto flex flex-col-reverse md:flex-row gap-12 items-center'>


                            <div>
                                <div className='w-[90%] md:w-[70%] mx-auto text-center p-8  rounded-xl bg-opacity-5 backdrop-blur-3xl bg-[#b7004f46]'>
                                    <h1 className='text-white font-bold text-3xl'>Discover a World of Inspiration and Quality Art Materials at Our Online Store. </h1>
                                    <div className='flex justify-center'>
                                        <Link to={'/allcraft'}><button className='border mt-5 rounded-lg bg-transparent animate__animated  animate__fadeInLeft border-white py-2 px-4 font-bold text-white flex gap-1 items-center hover:bg-[#b70050] transition-all duration-1000'>About Items<IoIosArrowForward size={25} /></button></Link>
                                    </div>
                                </div>

                            </div>

                            
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className='w-full flex justify-start items-center h-screen bg-cover' style={{ backgroundImage: `url(https://i.postimg.cc/8PGqhS86/oil-paint-tubes-painting.webp)` }} >
                        <div className='w-[80%] mx-auto flex flex-col-reverse md:flex-row gap-12 items-center'>

                        <div>
                                <div className='w-[90%] md:w-[70%] mx-auto text-center p-8  rounded-xl bg-opacity-5 backdrop-blur-3xl bg-[#b7004f46]'>
                                    <h1 className='text-white font-bold text-3xl'>Ignite your creativity with our handpicked art supplies to elevate your artistic journey!</h1>
                                    <div className='flex justify-center'>
                                        <Link to={'/allcraft'}><button className='border mt-5 rounded-lg bg-transparent animate__animated  animate__fadeInLeft border-white py-2 px-4 font-bold text-white flex gap-1 items-center hover:bg-[#b70050] transition-all duration-1000'>About Items<IoIosArrowForward size={25} /></button></Link>
                                    </div>
                                </div>

                            </div>
                        
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;