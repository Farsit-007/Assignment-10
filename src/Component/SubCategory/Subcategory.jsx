import { useEffect, useState } from 'react';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';


import { Cursor, useTypewriter } from 'react-simple-typewriter';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import '../SubCategory/Sub.css'

const Subcategory = () => {
    const breakpoints = {
        // For extra small screens (mobile phones):
        320: {
          slidesPerView: 1, // Show 1 slide on small screens
        },
        // For medium screens (tablets):
        768: {
          slidesPerView: 2, // Show 2 slides on medium screens
        },
        // For large screens (desktops):
        1024: {
          slidesPerView: 3, // Show 3 slides on large screens (default)
        },
      };
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };
    const [text] = useTypewriter({
        words: ['Categories'],
        loop: {},
    });

    const [subCrafts, setSubCrafts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://assignment-10-server-site-psi.vercel.app/category')
            .then(res => res.json())
            .then(data => {
                setSubCrafts(data);
                setLoading(false);
            })
    }, []);

    return (
        <div className='max-w-6xl font-Meri mx-auto'>
            <div className="text-center my-10">
                <h1 className="text-3xl md:text-5xl">All Items <span className="text-[#b70050]">{text}<Cursor /></span></h1>
            </div>
            <Swiper
                
                breakpoints={breakpoints}
                spaceBetween={30}
                loop={true}
                pagination={pagination}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
               
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <span className="loading loading-spinner loading-lg"></span>
                    <div className="spinner-border text-[#b70050]"></div>
                </div>
            ) : (
                <div className='grid md:grid-cols-2  lg:grid-cols-3 '>
                    {subCrafts.map(sub => (  <SwiperSlide className='py-10 px-5 md:px-0' key={sub._id}>
                        <div  className="card text-center flex flex-col gap-2 card-compact p-2 bg-base-100 shadow-xl">
                            <div className="relative">
                                <figure className="rounded-xl" style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
                                    <img src={sub.image} alt="Craft" className="object-cover h-full w-full" />
                                </figure>
                            </div>

                            <div className=" text-center">
                                <h2 className="h-10 font-semibold text-xl">{sub.category}</h2>
                                <div className="h-14 p-2">
                                    <p>{sub.description}</p>
                                </div>
                            </div>

                            <div className="card-actions justify-center my-2 items-end pt-8 mr-3">
                                <Link  to={`/suball/${sub.category}`}>
                                    <button className="bg-transparent text-lg font-bold border border-[#b70050] text-[#b70050] rounded-md p-2 flex gap-1 items-center hover:text-white hover:bg-[#b70050] transition-all duration-1000">
                                        <MdKeyboardDoubleArrowRight size={30} /> View More
                                    </button>
                                </Link>
                            </div>
                        </div>
                        </SwiperSlide>))}
                </div>
            )}
            </Swiper>
        </div>
    );
};

export default Subcategory;
