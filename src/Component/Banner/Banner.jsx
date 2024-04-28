import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay,Navigation } from 'swiper/modules';
import '../Banner/Banner.css'
const Banner = () => {
    return (
        <div className='z-20  font-Mulish'>
            <Swiper navigation={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay,Navigation]}
                loop={true}
                className="mySwiper"
                >
                <SwiperSlide>

                    <div className='w-full flex justify-start items-center min-h-[100vh] bg-cover' style={{ backgroundImage: `url(https://i.postimg.cc/VvmGMxHr/1-1.webp)` }} >
                        <div className='w-[80%] mx-auto flex flex-col-reverse md:flex-row gap-12 items-center'>

                           
                            <div>
                                <div className='w-[70%] mx-auto text-center'>
                                    <h1 className='text-[#b70050] font-bold text-3xl'>Let Your Creativity Flourish with Our Extensive Selection of Artistic Treasures. </h1>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className='w-full flex justify-start items-center h-screen bg-cover' style={{ backgroundImage: `url(https://i.postimg.cc/qRrpH14S/1.jpg)` }} >
                        <div className='w-[80%] mx-auto flex flex-col-reverse md:flex-row gap-12 items-center'>

                            
                                

                            <div>
                            <div className='w-[70%] mx-auto text-center'>
                                    <h1 className='text-[#b70050] font-bold text-3xl'>Discover a World of Inspiration and Quality Art Materials at Our Online Store. From Paints and Brushes to Crafting Essentials.</h1>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className='w-full flex justify-start items-center h-screen bg-cover' style={{ backgroundImage: `url(https://i.postimg.cc/sggNXCtv/still-life-drawing-tools.webp)` }} >
                        <div className='w-[80%] mx-auto flex flex-col-reverse md:flex-row gap-12 items-center'>

                           

                            <div>
                            <div className='w-[70%] mx-auto text-center'>
                                    <h1 className='text-[#b70050] font-bold text-3xl'>Unleash Your Creativity and Craft Your Imagination with Our Collection of Unique Art Supplies and DIY Kits. </h1>
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