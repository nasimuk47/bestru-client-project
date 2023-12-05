import { useContext } from "react";
import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import useCart from "../hooks/useCart";
import Placeholder from "../assets/placeholder.jpg";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch((error) => console.log(error));
    };

    const navOptions = (
        <>
            <li className="active:btn text-white text-lg   tpy-2 px-3">
                <Link to="/">Home</Link>
            </li>
            <li className="active:btn text-white text-lg   tpy-2 px-3">
                <Link to="/menu">Our Menu</Link>
            </li>
            <li className="active:btn  text-white text-lg   tpy-2 px-3">
                <Link to="/order/salad">Order Food</Link>
            </li>
            <li className="hidden">
                <Link to="/secret">Secret</Link>
            </li>

            {user ? (
                <>{/* <span>{user?.displayName}</span> */}</>
            ) : (
                <>
                    <li className="active:btn  text-white text-lg   tpy-2 px-3">
                        <Link to="/login">Login</Link>
                    </li>
                </>
            )}
        </>
    );

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-gray-500 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-500 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to="/">
                        <a className="btn btn-ghost text-yellow-300 normal-case text-2xl">
                            Bistro Resturent
                        </a>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navOptions}</ul>
                </div>
                <div className="navbar-end mr-5 gap-5">
                    <li>
                        <Link to="/dashboard/cart">
                            <button className="flex">
                                <FaShoppingCart className="mr-1 text-4xl text-yellow-300"></FaShoppingCart>
                                <div className="badge badge-primary">
                                    +{cart.length}
                                </div>
                            </button>
                        </Link>
                    </li>
                    <div className="">
                        {user ? (
                            <div className="dropdown dropdown-end flex justify-end relative">
                                <label
                                    tabIndex="0"
                                    className=" btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="User Profile"
                                            src={user.photoURL || Placeholder}
                                        />
                                    </div>
                                </label>
                                <ul className="menu menu-sm dropdown-content bg-gray-300 z-40 mt-3 p-2 shadow  rounded-box w-48 absolute right-0">
                                    <li>
                                        {/* Display user's name in the dropdown */}
                                        <span className="flex justify-center text-sm font-bold">
                                            {user?.displayName}
                                        </span>
                                    </li>

                                    {user && (
                                        <>
                                            <li className="w-[80%]  mx-auto">
                                                <Link to="/dashboard/cart">
                                                    <button className="btn  tpy-2 px-4">
                                                        Dashboard
                                                    </button>
                                                </Link>
                                            </li>
                                            <li className="w-[80%]  mx-auto">
                                                <button
                                                    onClick={handleLogOut}
                                                    className="btn  tpy-2 px-4">
                                                    LogOut
                                                </button>
                                            </li>
                                        </>
                                    )}
                                </ul>
                            </div>
                        ) : (
                            <label
                                tabIndex="0"
                                className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="User Profile" src={Placeholder} />
                                </div>
                            </label>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
