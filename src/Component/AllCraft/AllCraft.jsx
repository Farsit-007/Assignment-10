
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
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

            <div className="max-w-6xl mx-auto my-10">

                <div className="overflow-x-auto">
                    <table className="table">
                        <thead className="text-center">
                            <tr className="font-extrabold text-lg">
                                <th>Serial No.</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Customization</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {Allitem.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td className="sm:w-24 md:w-40 lg:w-48">
                                        <figure className="rounded-xl" style={{ height: '110px', width: '100%', overflow: 'hidden' }}>
                                            <img width="160px" src={item.image} alt="Item" className="object-cover h-full w-full" />
                                        </figure>
                                    </td>
                                    <td>{item.item_name}</td>
                                    <td>$ {item.price}</td>
                                    <td>{item.customization}</td>
                                    <td className="flex justify-center h-36 items-center">
                                        <Link to={`/craft/${item._id}`}>
                                            <button className="bg-transparent text-lg font-bold border border-[#b70050] text-[#b70050] rounded-md p-2 flex gap-1 items-center hover:text-white hover:bg-[#b70050] transition-all duration-1000">
                                                <MdKeyboardDoubleArrowRight size={30} /> View Details
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AllCraft;