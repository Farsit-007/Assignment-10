import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import '../Header/Header.css';
import { Tooltip } from 'react-tooltip'
import f1 from '../../assets/1.png'
import { AuthContext } from "../AuthProvider/AuthProvider";
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : "light");
    const [active, setActive] = useState(false);
    window.addEventListener("scroll", function () {
        if (this.window.scrollY > 100) {
            setActive(true)
        }
        else {
            setActive(false)
        }
    })
    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])


    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark');
        }
        else {
            setTheme('light');
        }
    }


    const Links = < >
        <li className="text-lg font-bold"><NavLink to='/' className={({ isActive }) => isActive ? 'text-white  focus:text-white border-b-4 border-[#b70050]  font-bold ' : 'font-bold bg-transparent text-white'} >Home</NavLink></li>
        <li className="text-lg font-bold"><NavLink to='/allcraft' className={({ isActive }) => isActive ? 'text-white focus:text-white border-b-4 border-[#b70050]  font-bold ' : 'font-bold bg-transparent text-white'} >All Art & craft Items</NavLink></li>
        {
            user &&
            <>
                <li className="text-lg font-bold">
                    <NavLink to='/addcraft' className={({ isActive }) => isActive ? 'text-white focus:text-white border-b-4 border-[#b70050]  font-bold ' : 'font-bold bg-transparent text-white'} >Add Craft Item</NavLink>
                </li>
                <li className="text-lg font-bold">
                    <NavLink to='/myallcraft' className={({ isActive }) => isActive ? 'text-white focus:text-white border-b-4 border-[#b70050]  font-bold ' : 'font-bold bg-transparent text-white'} >My Art&Craft List</NavLink>
                </li>
            </>
        }
    </>
    const handleLogout = () => {
        logOut()
    }
    return (
        <div className="font-Meri">
            <div className={`navbar lg:px-20 transition-all duration-1000 text-white z-10 fixed top-0 left-0 right-0 bg-transparent ${active ? "activecls" : ""}`}>
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#05030a] rounded-box w-52 ">
                            {Links}
                        </ul>
                    </div>
                    <div className="flex gap-3 items-center">
                    <div className="w-[30px] h-[30px] md:w-[50px] hidden md:block md:h-[50px]">
                    <img src={f1} alt="" />
                    </div>
                        <Link to='/' className="text-xl md:text-3xl text-[#b70050] font-extrabold ">Fa<span className="text-white" >L</span>i's  Cra<span className="text-white" >f</span>t</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                </div>
                {
                user ? <div className="pl-[90px] md:pl-60 lg:pl-4"><a id="clickable"><div className="w-[45px] cursor-pointer rounded-full ring ring-[#b70050] ring-offset-base-100 ring-offset-2">
                    <img className="w-full rounded-full" src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                </div></a>
                    <Tooltip className="bg-[#b70050] rounded-xl p-2 space-y-3" anchorSelect="#clickable" clickable>
                        <p className="text-white font-semibold" >{user?.displayName || "User Name"}</p>
                        <button className="bg-transparent text-lg font-bold  border border-[#b70050] text-[#b70050] rounded-md p-2 flex gap-1 items-center hover:text-white hover:bg-[#b70050] transition-all duration-1000 w-full btn" ><Link to='/login' onClick={handleLogout} className="w-full text-white text-[16px] font-bold">Logout</Link></button>

                    </Tooltip> </div> :
                    <div className="md:navbar-end flex justify-end items-center gap-2  md:pl-8"><Link to='/login' className=" text-[12px] p-2 md:p-4 md:text-[16px] font-bold btn bg-transparent text-white">Login</Link>
                        <Link to='/register' className="text-[12px] p-2 md:p-4 md:text-[16px] font-bold btn bg-transparent text-white">Register</Link></div>

                }
                <div className="px-2 md:px-4">
                    <label className="swap swap-rotate">
                        <input
                            type="checkbox"
                            checked={theme === 'light' ? false : true}
                            className="theme-controller"
                            onChange={handleToggle}
                        />

                        <svg className="swap-off fill-current w-6 h-6 md:w-10 md:h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                        <svg className="swap-on fill-current w-6 h-6  md:w-10 md:h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                </div>

            </div>

        </div>
    );
};

export default Header;


