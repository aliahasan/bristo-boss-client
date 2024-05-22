import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const admin = useAdmin();
  const [cart] = useCart();
  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  const navLinks = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/menu"}>Menu</Link>
      </li>
      <li>
        <Link to={"/order/salad"}>Order Food</Link>
      </li>
      {user && admin && (
        <li>
          <Link to={"/dashboard/adminHome"}>DashBoard</Link>
        </li>
      )}
      {user && !admin &&
        <li>
        <Link to={"/dashboard/userHome"}>DashBoard</Link>
      </li>
      }
      <li>
        <Link to={"/dashboard/cart"}>
          <button className="btn btn-sm">
            <FaShoppingCart className="mr-2"></FaShoppingCart>
            <div className="badge badge-secondary">{cart.length}</div>
          </button>
        </Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar z-10 fixed  bg-black bg-opacity-30 max-w-screen-2xl text-green-600">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bristo Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <img
                className="w-12 h-12 rounded-full
            "
                src={user?.photoURL}
                alt=""
              />
              <li>
                <button className="btn" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link className="btn" to={"/login"}>
                Login
              </Link>
            </li>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
