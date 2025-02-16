import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { MdOutlineSell } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import Swal from "sweetalert2";
import { FaStar } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { ScrollRestoration } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
const MyCraft = () => {
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]);
    const [displayedItems, setDisplayedItems] = useState([]);
    const [control, setControl] = useState(false);
    const [loading, setLoading] = useState(true);
    const handleSort = (option) => {
        let sortedItems = [];
        if (option === 'All') {
            sortedItems = [...items];
        } else if (option === 'Yes') {
            sortedItems = items.filter(item => item.customization === 'Yes');
        } else if (option === 'No') {
            sortedItems = items.filter(item => item.customization === 'No');
        }
        setDisplayedItems(sortedItems);
    };

    useEffect(() => {
        setLoading(true);
        fetch(`https://assignment-10-server-site-psi.vercel.app/mycraft/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
                setDisplayedItems(data);
                setLoading(false);
            });
    }, [user, control]);

    const handleDelete = (_id) => {
        fetch(`https://assignment-10-server-site-psi.vercel.app/delete/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });
                        }
                    });
                    setControl(!control);
                }
            })
            .catch(error => {
                console.error('Error deleting item:', error);
            });
    };

    return (
        <div className="font-Meri">
            <Helmet>
                <title>FaLi's Craft | My Art & Craft</title>
            </Helmet>
            <>
                {items.length === 0 && (
                    <style>
                        {`
                                .section-no-cards {
                                    margin-bottom: 49px;
                                }
                            `}
                    </style>
                )}
                <section className="">
                    <div className=" bg-cover max-h-[300px] bg-slate-50 " style={{ backgroundImage: `url(https://i.postimg.cc/63W5QQWC/three-dimensional-tree-with-foliage.webp)` }}>
                        <Fade direction={'down'}>
                            <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                                <h1 className="text-4xl  mt-8 md:mt-0 font-bold leading-none sm:text-7xl xl:max-w-3xl text-white playfair ">My Art & Craft</h1>
                            </div>
                        </Fade>
                    </div>
                </section>
                <div className="flex  justify-end pr-8 items-center section-no-cards mt-6 max-w-6xl mx-auto">
                    <details className="dropdown">
                        <summary className="m-1 btn text-lg font-semibold bg-transparent   border border-[#b70050] text-[#b70050] rounded-md flex gap-1 items-center hover:text-white hover:bg-[#b70050] transition-all duration-1000 ">Filter <IoIosArrowDown /></summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-32">
                            <li><button onClick={() => handleSort("All")}>All</button></li>
                            <li><button onClick={() => handleSort("Yes")}>Yes</button></li>
                            <li><button onClick={() => handleSort("No")}>No</button></li>
                        </ul>
                    </details>
                </div>
                {loading ? (
                    <div className="flex flex-col justify-start items-center ">
                        <span className="loading loading-spinner loading-lg"></span>
                        <div className="spinner-border text-[#b70050]"></div>
                    </div>
                ) : (
                    <div className="py-10 px-5 lg:px-0 grid lg:grid-cols-2 gap-5 max-w-6xl mx-auto">
                        {
                            displayedItems.map(item => <div key={item._id} className=" flex flex-col md:flex-row md:items-center rounded-lg gap-4 p-2 bg-base-100 shadow-xl">
                                <div className="relative md:w-[45%] ">
                                    <figure className="rounded-xl" style={{ height: '180px', width: '100%', overflow: 'hidden' }}>
                                        <img src={item.image} alt="Shoes" className="object-cover h-full w-full" />
                                    </figure>
                                    <div className="absolute top-3 left-3">

                                        <div className="badge badge-ghost bg-[#b70050] border-none font-semibold text-white text-md "><MdOutlineSell /> {item.stock_status}</div>
                                    </div>
                                </div>

                                <div className="space-y-3 md:w-[55%]">
                                    <h2 className="card-title">{item.item_name}</h2>
                                    <div>
                                        <span className="text-[#b70050] font-semibold text-lg">${item.price}</span>
                                    </div>

                                    <div className="flex gap-8">
                                        <div className="flex gap-2 font-semibold items-center">
                                            <FaStar className="text-[#b70050]" size={20} />
                                            {item.rating}
                                        </div>

                                        <div className="flex gap-2 font-semibold items-center">
                                            <h1>Customization : </h1>
                                            <div className="badge badge-ghost bg-[#b7004fc7] border-none font-semibold text-white text-md ">{item.customization}</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center gap-2 mr-3">
                                        <Link to={`/craft/${item._id}`}><button className=" bg-transparent   border border-[#b70050] text-[#b70050] rounded-md p-2 flex gap-1 items-center hover:text-white hover:bg-[#b70050] transition-all duration-1000 font-semibold">View Details</button></Link>
                                        <Link to={`/updatecraft/${item._id}`}><button className=" bg-transparent   border border-[#b70050] text-[#b70050] rounded-md p-2 flex gap-1 items-center hover:text-white hover:bg-[#b70050] transition-all duration-1000 font-semibold">Update</button></Link>
                                        <button onClick={() => { handleDelete(item._id) }} className=" bg-transparent   border border-[#b70050] text-[#b70050] rounded-md p-2 flex gap-1 items-center hover:text-white hover:bg-[#b70050] transition-all duration-1000 font-semibold">Delete</button>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                )}
            </>
            <ScrollRestoration />
        </div>
    );
};

export default MyCraft;