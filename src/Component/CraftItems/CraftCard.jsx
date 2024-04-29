/* eslint-disable react/prop-types */
import { BiSolidCategory } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { IoSettings, IoTime } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight, MdOutlineSell } from "react-icons/md";
import { Link } from "react-router-dom";

const CraftCard = ({ craft }) => {
    const { _id, item_name, image, category, processing_time, price, rating, customization, stock_status, description, email, userName } = craft;
    return (
        <div className="font-Meri">
            <div className="card flex flex-col gap-2 card-compact  p-2 bg-base-100 shadow-xl">
                <div className="relative">
                    <figure className="rounded-xl" style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
                        <img src={image} alt="Shoes" className="object-cover h-full w-full" />
                    </figure>
                    <div className="absolute top-3 left-3">
                        <div className="badge badge-ghost bg-[#b70050] border-none font-semibold text-white text-md "><MdOutlineSell /> {stock_status}</div>
                    </div>
                </div>

                <div className="space-y-1 ">
                    <div>
                        <span className="text-[#b70050] font-semibold text-xl">${price}</span>
                    </div>
                    <h2 className="card-title h-10 font-semibold text-xl">{item_name}</h2>
                    <div>
                        <h3 className="flex gap-3 items-center  font-semibold text-lg"><BiSolidCategory  className="font-bold text-[#b70050]" /> {category}</h3>
                    </div>
                    <div className="h-14">
                        <p>{description.slice(0, 80)}...</p>
                    </div>
                    <div className="flex gap-8 mt-2">
                        <div className="flex gap-2 font-semibold items-center">
                            <FaStar className="text-[#b70050]" size={20} />
                            {rating}
                        </div>
                        <div className="flex gap-2 font-semibold items-center">
                            <IoTime className="text-[#b70050]" size={20} />
                            {processing_time}
                        </div>
                        <div className="flex gap-2 font-semibold items-center">
                            <IoSettings className="text-[#b70050]" size={20} />
                            {customization}
                        </div>
                    </div>

                </div>
                <div className="card-actions justify-end items-end pt-2 mr-3">
                    <Link to={`/craft/${_id}`}><button className=" bg-transparent text-lg font-bold  border border-[#b70050] text-[#b70050] rounded-md p-2 flex gap-1 items-center hover:text-white hover:bg-[#b70050] transition-all duration-1000 "><MdKeyboardDoubleArrowRight size={30}/> View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CraftCard;