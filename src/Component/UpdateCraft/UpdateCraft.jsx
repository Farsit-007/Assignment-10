import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import lottie from '../../assets/Animation - 1714293694773.json'
import { Player } from '@lottiefiles/react-lottie-player';
const UpdateCraft = () => {
    const { user } = useContext(AuthContext)
    const { id } = useParams();
    const [singleCraft, setsingleCraft] = useState([]);
    useEffect(() => {
        fetch(`https://assignment-10-server-site-psi.vercel.app/singlecraft/${id}`)
            .then(res => res.json())
            .then(data => {
                setsingleCraft(data)
            })
    }, [id])

    const handleupdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const item_name = form.item_name.value;
        const image = form.image.value || singleCraft.image;
        const category = form.category.value;
        const processing_time = form.processing_time.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const stock_status = form.stock_status.value;
        const description = form.description.value;
        const email = user.email;
        const userName = user.displayName
        const item = { item_name, image, email, userName, category, processing_time, price, rating, customization, stock_status, description }
        console.log(item);
        fetch(`https://assignment-10-server-site-psi.vercel.app/singlecraft/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated Successfully",
                        icon: "success"
                    });
                }
            })
    }

    return (
        <div>
            <section className="">
                <div className=" bg-cover max-h-[300px] bg-slate-50 " style={{ backgroundImage: `url(https://i.postimg.cc/VvmGMxHr/1-1.webp)` }}>
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                        <h1 className="text-4xl  mt-8 md:mt-0 font-bold leading-none sm:text-7xl xl:max-w-3xl text-white playfair animate__animated animate__bounce">Update Your Craft</h1>
                    </div>
                </div>
            </section>
            <div className="flex max-w-6xl mx-auto flex-col lg:flex-row justify-center min-h-screen items-center">
                <div>
                    <div className="flex-shrink-0 w-full mb-6  md:w-[50%] sm:mb-0">
                        <Player
                            autoplay
                            loop
                            src={lottie}
                            style={{ height: '300px', width: '300px' }}
                        >
                        </Player>
                    </div>
                </div>
                <form onSubmit={handleupdate} className="w-[90%] md:w-[60%] mx-auto">
                    <div className="flex flex-col md:flex-row gap-5">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Item Name</span>
                            </div>
                            <input type="text" name="item_name" defaultValue={singleCraft.item_name} placeholder="Name of item" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Image URL</span>
                            </div>
                            <input type="url" name="image" defaultValue={singleCraft.image} placeholder="Image URL" className="input input-bordered w-full" />
                        </label>

                    </div>
                    <div className="flex flex-col md:flex-row gap-5">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Category</span>
                            </div>
                            <select name="category" className="input input-bordered w-full">
                                <option >{singleCraft.category}</option>
                                <option value="Landscape Painting">Landscape Painting</option>
                                <option value="Portrait Drawing">Portrait Drawing</option>
                                <option value="Cartoon Drawing">Cartoon Drawing</option>
                                <option value="Watercolour Painting">Watercolour Painting</option>
                                <option value="Oil Painting">Oil Painting</option>
                                <option value="Charcoal Sketching">Charcoal Sketching</option>
                            </select>
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Processing Time</span>
                            </div>
                            <select name="processing_time" className="input input-bordered w-full">
                                <option >{singleCraft.processing_time}</option>
                                <option value="1-2">1-2 Days</option>
                                <option value="3-5">3-5 Days</option>
                                <option value="5-10">5-10 Days</option>

                            </select>
                        </label>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Price</span>
                            </div>
                            <input type="number" defaultValue={singleCraft.price} name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Rating</span>
                            </div>
                            <input
                                type="number"
                                name="rating"
                                defaultValue={singleCraft.rating}
                                placeholder="Rating"
                                className="input input-bordered w-full"
                                min="0"
                                max="5"

                            />
                        </label>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5">

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold" >Stock Status</span>
                            </div>
                            <select name="stock_status" className="input input-bordered w-full">
                                <option >{singleCraft.stock_status}</option>
                                <option value="In stock">In stock</option>
                                <option value="Made to Order">Made to Order</option>
                            </select>
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Customization</span>
                            </div>
                            <div className="flex items-center">
                                <select name="customization" className="input input-bordered w-full">
                                    <option >{singleCraft.customization}</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </label>

                    </div>
                    <div className="flex flex-col md:flex-row gap-5">

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Short Description</span>
                            </div>
                            <input type="text" defaultValue={singleCraft.description} name="description" placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">User Email</span>
                            </div>
                            <input type="text" name="" defaultValue={singleCraft.email} placeholder="Name of item" className="input input-bordered w-full" disabled />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">User Name</span>
                            </div>
                            <input type="url" name="image" defaultValue={singleCraft.userName} placeholder="Image URL" className="input input-bordered w-full" disabled />
                        </label>
                    </div>
                    <div className="pt-4">
                        <input type="submit" className=" bg-transparent text-lg font-bold  border border-[#b70050] text-[#b70050] rounded-md p-2 flex gap-1 items-center hover:text-white hover:bg-[#b70050] transition-all duration-1000 w-full btn" value="Update Craft" />
                    </div>
                </form>



            </div>
        </div>
    );
};

export default UpdateCraft;