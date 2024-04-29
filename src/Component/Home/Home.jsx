import Banner from "../Banner/Banner";
import CraftPage from "../CraftItems/CraftPage";
import Subcategory from "../SubCategory/Subcategory";
import Brand from "./Brand";
import { Cursor, useTypewriter } from 'react-simple-typewriter';
const Home = () => {
    const [text] = useTypewriter({
        words: ['Gallery'],
        loop: {},
    });
    return (
        <div>
            <Banner></Banner>
            <CraftPage></CraftPage>
            <section className="my-20">
                <div className="text-center my-10">
                    <h1 className="text-5xl">Arts & Craft <span className="text-[#b70050]">{text}<Cursor /></span></h1>
                </div>

                <div data-aos="fade-up"
                    data-aos-duration="1000" className="max-w-6xl shadow-md rounded-lg grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4 animate__animated animate__fadedup">

                    <a href="https://i.ibb.co/ZNYCmNB/2150666300.jpg" target="_blank" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm  md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square cursor-pointer">
                        <img src="https://i.ibb.co/ZNYCmNB/2150666300.jpg" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm  md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square cursor-pointer" alt="" />
                    </a>



                    <a href="https://i.ibb.co/XZJ45mn/2151302622.jpg" target="_blank" >
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer" src="https://i.ibb.co/XZJ45mn/2151302622.jpg" />
                    </a>

                    <a href="https://i.ibb.co/7N0XQM3/outdoor-swimming-pool.jpg" target="_blank" >
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer" src="https://i.ibb.co/7N0XQM3/outdoor-swimming-pool.jpg" />
                    </a>

                    <a href="https://i.ibb.co/LR0bkRy/3.jpg" target="_blank" >
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer" src="https://i.ibb.co/LR0bkRy/3.jpg" />
                    </a>

                    <a href="https://i.ibb.co/g97DH0v/1.jpg" target="_blank" >
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer" src="https://i.ibb.co/g97DH0v/1.jpg" />
                    </a>

                    <a href="https://i.ibb.co/zFNp7X5/main-home-property.jpg" target="_blank" >
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer" src="https://i.ibb.co/zFNp7X5/main-home-property.jpg" />
                    </a>

                    <a href="https://i.ibb.co/b5MW5rQ/2151264503.jpg" target="_blank" >
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer" src="https://i.ibb.co/b5MW5rQ/2151264503.jpg" />
                    </a>

                    <a href="https://i.ibb.co/hH4MLgT/image-1000x600.png" target="_blank" >
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer" src="https://i.ibb.co/hH4MLgT/image-1000x600.png" />
                    </a>


                    <a href="https://i.ibb.co/YXX5WN1/19.png" target="_blank" >
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer" src="https://i.ibb.co/YXX5WN1/19.png" />
                    </a>

                </div>
            </section>
            <Subcategory></Subcategory>
            <Brand></Brand>
        </div>

    );
};

export default Home;