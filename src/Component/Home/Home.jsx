import Banner from "../Banner/Banner";
import CraftPage from "../CraftItems/CraftPage";
import Subcategory from "../SubCategory/Subcategory";
import Brand from "./Brand";
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { Helmet } from "react-helmet-async";
import { ScrollRestoration } from "react-router-dom";
const Home = () => {
    const [text] = useTypewriter({
        words: ['Gallery'],
        loop: {},
    });
    return (
        <div className="font-Meri">
              <Helmet>
                <title>FaLi's Craft | Home</title>
            </Helmet>
            
            <Banner></Banner>
            <CraftPage></CraftPage>
            <section className="my-20">
                <div className="text-center my-10">
                    <h1 className="text-3xl md:text-5xl">Arts & Craft <span className="text-[#b70050]">{text}<Cursor /></span></h1>
                </div>

                <div data-aos="fade-up"
                    data-aos-duration="1000" className="max-w-6xl shadow-md rounded-lg grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4 animate__animated animate__fadedup">

                    <a href="https://i.postimg.cc/FztSqpbY/hand-drawn-ecological-futuristic-building-concepts-generative-ai.webp" target="_blank" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm  md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square cursor-pointer">
                        <img src="https://i.postimg.cc/FztSqpbY/hand-drawn-ecological-futuristic-building-concepts-generative-ai.webp" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm  md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square cursor-pointer" alt="" />
                    </a>



                    <a href="https://i.postimg.cc/7YkPWdz3/7875751.jpg" target="_blank" >
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer" src="https://i.postimg.cc/7YkPWdz3/7875751.jpg" />
                    </a>

                    <a href="https://i.postimg.cc/Qtp33ZGv/abstract-eye-portrait-young-women-elegance-generated-by-ai.jpg" target="_blank" >
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer" src="https://i.postimg.cc/Qtp33ZGv/abstract-eye-portrait-young-women-elegance-generated-by-ai.jpg" />
                    </a>

                    <a href="https://i.postimg.cc/Hx0fN0bg/artist-props-table.jpg" target="_blank" >
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer" src="https://i.postimg.cc/Hx0fN0bg/artist-props-table.jpg" />
                    </a>

                    <a href="https://i.postimg.cc/Y0pJB4xm/artist-props-collection-table.jpg" target="_blank" >
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer" src="https://i.postimg.cc/Y0pJB4xm/artist-props-collection-table.jpg" />
                    </a>

                    <a href="https://i.postimg.cc/wTGfv8kJ/view-vintage-paint-brushes-easel.jpg" target="_blank" >
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer" src="https://i.postimg.cc/wTGfv8kJ/view-vintage-paint-brushes-easel.jpg" />
                    </a>

                    <a href="https://i.postimg.cc/W1q9qW9y/red-yellow-oil-paints-palette-wood-wall.jpg" target="_blank" >
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer" src="https://i.postimg.cc/W1q9qW9y/red-yellow-oil-paints-palette-wood-wall.jpg" />
                    </a>

                    <a href="https://i.postimg.cc/qBjHsT0M/stained-brush-painting.jpg" target="_blank" >
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer" src="https://i.postimg.cc/qBjHsT0M/stained-brush-painting.jpg" />
                    </a>


                    <a href="https://i.postimg.cc/nh79NMSk/flat-tree-silhouette-isolated-white-generative-ai.webp" target="_blank" >
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer" src="https://i.postimg.cc/nh79NMSk/flat-tree-silhouette-isolated-white-generative-ai.webp" />
                    </a>

                </div>
            </section>
            <Subcategory></Subcategory>
            <Brand></Brand>
            <ScrollRestoration />
        </div>

    );
};

export default Home;