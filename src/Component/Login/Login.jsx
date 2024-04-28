import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ScrollRestoration } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const { loginUser, googleLogin, githubLogin } = useContext(AuthContext);
    const [show, setShow] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()

    const togglePasswordVisibility = () => {
        setShow(!show);
    };

    const onSubmit = (data) => {
        const { userEmail, userPassword } = data;
        loginUser(userEmail, userPassword)
            .then(result => {
                toast.success("Logged in successfully")
                setTimeout(() => {
                    navigate(location.state ? location.state : '/')
                    reset()
                }, 1000);
            })
            .catch(error => {
                if (error.message) {
                    toast.error("Wrong email/password")
                    reset()
                }
            })
    }
    const handleGoogle = () => {
        googleLogin()
        .then(result => {
            toast.success("Logged in successfully")
            setTimeout(() => {
                navigate(location.state ? location.state : '/')
            }, 1000);

        })
        .catch(error => {
            if (error.message) {
                toast.error("You have already sign in with same email")
            }
        })
    }

    const handleGithub = () => {
        githubLogin()
        .then(result => {
            toast.success("Logged in successfully")
            setTimeout(() => {
                navigate(location.state ? location.state : '/')
            }, 1000);
        })
        .catch(error => {
            if (error.message) {
                toast.error("You have already sign in with same email");
            }
        })
    }


    return (
        <div className="flex   justify-center  items-center min-h-screen font-Mulish w-full bg-cover" style={{ backgroundImage: `url(https://i.ibb.co/yB20QHr/2150799775-1.jpg)` }}>
            <div className="flex justify-center  items-center min-h-screen">
                <div className="flex text-white flex-col animate__animated animate__zoomIn bg-opacity-5 backdrop-blur-3xl bg-transparent-white  md:w-[450px] p-10 pb-4 pt-2 rounded-xl ">
                    <div className="mb-4 text-center border-b-2">
                        <h1 className="my-2 text-3xl font-bold text-white ">Login</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="space-y-2">

                            <div>
                                <label htmlFor="email" className="block text-white  mb-2 text-sm">Email address</label>
                                <input type="email" name="email" id="email" placeholder="Enter your email address" className="w-full outline-none px-3 py-2 border rounded-md border-gray-200 bg-transparent " {...register("userEmail",
                                    {
                                        required: true,
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: "Invalid Email"
                                        }
                                    }
                                )} />
                                {errors.userEmail && <small className="text-red-500 font-bold">{errors.userEmail.message}</small>}

                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password" className="text-sm text-white ">Password</label>

                                </div>
                                <div className="relative">
                                    <input type={show ? "text" : "password"} placeholder="Enter your password" className="w-full px-3 py-2 outline-none border rounded-md border-gray-200 bg-transparent  "
                                        {...register("userPassword",
                                            {
                                                required: true,
                                                minLength: {
                                                    value: 6,
                                                    message: "Password must be at least 6 characters"
                                                },
                                                pattern: {
                                                    value: /^(?=.*[a-z])(?=.*[A-Z])/,
                                                    message: "At least one lowercase letter and one uppercase letter"
                                                }
                                            }
                                        )}
                                    />
                                    <span onClick={togglePasswordVisibility} className="absolute right-[2%] top-[31%]">
                                        {!show ? <IoEyeOff size={20} /> : <IoEye size={20} />}
                                    </span>

                                </div>
                                {errors.userPassword && <small className="text-red-500 font-bold">{errors.userPassword.message}</small>}
                            </div>


                        </div>
                        <div className="pt-1">
                            <div>
                                <button type="submit" className="w-full px-8 py-2 font-semibold rounded-md bg-blue-500  text-xl text-white">Login</button>
                            </div>

                        </div>
                    </form>

                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                        <p className="px-3 text-sm dark:text-gray-300">Login with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button onClick={handleGoogle} className="p-3 rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>
                        </button>

                        <button onClick={handleGithub} className="p-3 rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16" id="github"><path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path></svg>
                        </button>
                    </div>
                    <p className="px-6 text-sm text-center text-gray-300">Don't have any account?
                        <Link to="/register" className="hover:underline text-red-600 pl-1 font-extrabold">Register</Link>.
                    </p>
                </div>
            </div>
            <ScrollRestoration />
            <ToastContainer />
        </div>
    );
};

export default Login;