import { Swiper, SwiperSlide } from 'swiper/react';

import { Cursor, useTypewriter } from 'react-simple-typewriter';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import '../Home/Brand.css'
const Brand = () => {
    const [text] = useTypewriter({
        words: ['Products'],
        loop: {},
    });
    const breakpoints = {
        // For extra small screens (mobile phones):
        320: {
          slidesPerView: 1, // Show 1 slide on small screens
        },
        // For medium screens (tablets):
        768: {
          slidesPerView: 3, // Show 2 slides on medium screens
        },
        // For large screens (desktops):
        1024: {
          slidesPerView: 4, // Show 3 slides on large screens (default)
        },
      };
    return (
        <div className='max-w-6xl my-20 mx-auto'>
            <div className="text-center my-16 App">
                <h1 className="text-5xl"> Brands of Our <span className="text-[#b70050]">{text}<Cursor /></span></h1>
            </div>
            <Swiper
                breakpoints={breakpoints}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <figure className="rounded-xl w-40" >
                        <a href="https://www.picassoart.com.au/wp-content/uploads/2020/10/brand-chromacryl.png" target="_blank" >
                            <img src="https://www.picassoart.com.au/wp-content/uploads/2020/10/brand-chromacryl.png" alt="Item" className="object-cover h-full w-full" />
                        </a>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className="rounded-xl w-40" >
                        <a href="https://www.picassoart.com.au/wp-content/uploads/2023/12/download-2.png" target="_blank" >
                            <img src="https://www.picassoart.com.au/wp-content/uploads/2023/12/download-2.png" alt="Item" className="object-cover h-full w-full" />
                        </a>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className="rounded-xl w-40" >
                        <a href="https://www.picassoart.com.au/wp-content/uploads/2020/10/brand-atelier.png" target="_blank" >
                            <img src="https://www.picassoart.com.au/wp-content/uploads/2020/10/brand-atelier.png" alt="Item" className="object-cover h-full w-full" />
                        </a>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className="rounded-xl w-40" >
                        <a href="https://www.picassoart.com.au/wp-content/uploads/2020/10/brand-chromacryl.png" target="_blank" >
                            <img src="https://www.picassoart.com.au/wp-content/uploads/2020/10/brand-chromacryl.png" alt="Item" className="object-cover h-full w-full" />
                        </a>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className="rounded-xl w-40" >
                        <a href="https://www.picassoart.com.au/wp-content/uploads/2020/10/brand-mati.png" target="_blank" >
                            <img src="https://www.picassoart.com.au/wp-content/uploads/2020/10/brand-mati.png" alt="Item" className="object-cover h-full w-full" />
                        </a>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className="rounded-xl w-40" >
                        <a href="https://www.picassoart.com.au/wp-content/uploads/2020/10/brand-posca.png" target="_blank" >
                            <img src="https://www.picassoart.com.au/wp-content/uploads/2020/10/brand-posca.png" alt="Item" className="object-cover h-full w-full" />
                        </a>
                    </figure>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Brand;