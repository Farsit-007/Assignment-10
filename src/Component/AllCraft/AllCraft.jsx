import { BiSolidCategory } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { GiBlockHouse} from "react-icons/gi";
import { IoSettings, IoTime } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight, MdOutlineSell } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";


const AllCraft = () => {
    const Allitem = useLoaderData()
    return (
        <div>
            <section className="">
                <div className=" bg-cover max-h-[300px] bg-slate-50 " style={{ backgroundImage: `url(https://i.postimg.cc/tCf3tM3h/autumn-leaves-fall-gracefully-painting-nature-canvas-generative-ai.webp)` }}>
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                        <h1 className="text-4xl  mt-8 md:mt-0 font-bold leading-none sm:text-7xl xl:max-w-3xl text-white playfair animate__animated animate__bounce">All Art & craft Items</h1>
                        
                    </div>
                </div>
            </section>

            <div className="grid md:grid-cols-2 pt-20 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

                {
                    Allitem.map(item => <div key={item._id} className="card flex flex-col gap-2 card-compact  p-2 bg-base-100 shadow-xl">
                        <div className="relative">
                            <figure className=" rounded-xl" style={{ height: '240px', width: '100%', overflow: 'hidden' }}>
                                <img src={item.image} className="object-cover h-full w-full" alt="Shoes" />
                            </figure>
                            <div className="absolute top-3 left-3">

                                <div className="badge badge-ghost bg-[#b70050] border-none font-semibold text-white text-md "><MdOutlineSell /> {item.stock_status}</div>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <div>
                                <span className="text-[#b70050] font-semibold text-xl">${item.price}</span>
                            </div>
                            <div>
                                <h2 className="card-title font-bold h-10 text-xl">{item.item_name}</h2>
                            </div>
                            <div>
                                <h3 className="flex gap-3 items-center  font-semibold text-lg"><BiSolidCategory  className="font-bold text-[#b70050]" /> {item.category}</h3>
                            </div>
                            <div className="h-14">
                            <p>{item.description.slice(0, 80)}...</p>
                            </div>
                            <div className="flex gap-8 mt-2 ">
                                <div className="flex gap-2 font-semibold items-center">
                                    <FaStar className="text-[#b70050]" size={20} />
                                    {item.rating}
                                </div>
                                <div className="flex gap-2 font-semibold items-center">
                                    <IoTime className="text-[#b70050]" size={20} />
                                    {item.processing_time}
                                </div>
                                <div className="flex gap-2 font-semibold items-center">
                                    <IoSettings className="text-[#b70050]" size={20} />
                                    {item.customization}
                                </div>
                            </div>
                            <div className="card-actions justify-end items-end pt-3 mr-3">
                                <Link to={`/craft/${item._id}`}><button className=" bg-transparent text-lg font-bold  border border-[#b70050] text-[#b70050] rounded-md p-2 flex gap-1 items-center hover:text-white hover:bg-[#b70050] transition-all duration-1000 "><MdKeyboardDoubleArrowRight size={30} /> View Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default AllCraft;