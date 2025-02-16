import { FaSadTear } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Error = () => {
    return (
        <div className="font-Meri">
              <Helmet>
                <title>FaLi's Craft | Error</title>
            </Helmet>
             <section className="flex items-center min-h-screen p-16 dark:bg-gray-50 dark:text-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 flex justify-center font-extrabold text-9xl dark:text-gray-400">
                            <span className="sr-only">Error</span><FaSadTear color="#b70050"/>
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                        <p className="mt-4 mb-8 dark:text-gray-600">But don't worry, you can find plenty of other things on our homepage.</p>
                        <Link to="/" rel="noopener noreferrer" className="px-8 py-3 bg-transparent   border border-[#b70050] text-[#b70050] rounded-md p-2 flex gap-1 items-center hover:text-white hover:bg-[#b70050] transition-all duration-1000 font-semibold btn">Back to homepage</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Error;