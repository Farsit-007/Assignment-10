import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const CraftDetails = () => {
    const data = useLoaderData()
    const { item_name, image, category, processing_time, price, rating, customization, stock_status, description, userName, email } = data;
    return (
        <div className="font-Meri">
              <Helmet>
                <title>FaLi's Craft | Crafts Details</title>
            </Helmet>
              <section >
                <div className=" bg-cover max-h-[300px] bg-slate-50 " style={{ backgroundImage: `url(https://i.postimg.cc/7LS31pr5/flat-lay-assortment-artistic-tools.webpp)` }}>
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                        <h1 className="text-4xl  mt-8 md:mt-0 font-bold leading-none sm:text-7xl xl:max-w-3xl text-white playfair animate__animated animate__bounce">Details</h1>
                    </div>
                </div>
            </section>
            <div className="card max-w-6xl  my-10 sm:card-side  mt-10 mx-auto bg-base-100">
                <div className="flex md:w-[45%] justify-center min-h-[500px] items-center rounded-xl  bg-[#b7004f13]">
                <figure className="" style={{ height: '80%', width: '80%', overflow: 'hidden' }}>
                        <img src={image} alt="Shoes" className="object-cover rounded-lg h-full w-full" />
                    </figure>
                </div>
                <div className="card-body md:w-[55%] p-1 pt-2 pr-4 md:pr-5 pl-4 md:pl-10">
                    <div className='flex flex-col justify-between space-y-3'>
                        <div className=' pt-1'>
                            <h2 className="card-title pb-3 text-2xl md:text-[40px] font-bold playfair">{item_name}</h2>
                            <div className=''>
                                <h3 className=' text-lg font-medium py-2'>{category}</h3>
                            </div>
                            <div className='py-2  border-b text-[16px] '>
                                <p><span className='font-bold'>Description : </span>{description}</p>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-lg font-medium py-2">Details :</h1>
                            <div className="overflow-x-auto">
                                <table className="table ">
                                    <tbody >

                                        <tr className=''>

                                            <th>Price </th>
                                            <td>:</td>
                                            <td> $ {price}</td>

                                        </tr >

                                        <tr className=''>

                                            <th>Rating </th>
                                            <td>:</td>
                                            <td className="flex items-center gap-1">{rating} <FaStar className="text-[#b70050]" /></td>

                                        </tr>

                                        <tr className=''>

                                            <th>Processing Time </th>
                                            <td>:</td>
                                            <td>{processing_time} Days</td>

                                        </tr>
                                        <tr className=''>

                                            <th>Stock </th>
                                            <td>:</td>
                                            <td>{stock_status}</td>

                                        </tr>
                                        <tr className=''>

                                            <th>Customization </th>
                                            <td>:</td>
                                            <td>{customization}</td>

                                        </tr>
                                        <tr className=''>

                                            <th>Author Name </th>
                                            <td>:</td>
                                            <td>{userName}</td>

                                        </tr>
                                        <tr className=''>

                                            <th>Author Email</th>
                                            <td>:</td>
                                            <td>{email}</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default CraftDetails;