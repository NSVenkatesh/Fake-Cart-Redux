import React from "react";
import carts from "../assets/cart.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state.cart) || [];
  return (
    <div className="sticky top-0 flex justify-between items-center py-3 px-2 bg-slate-600 text-white">
      <div className=" font-semibold flex gap-5 items-center">
        <h2 className="text-2xl">Fake Cart</h2>
        <h3 className="text-lg cursor-pointer">
          <Link to="/">Products</Link>
        </h3>
      </div>
      <Link to="/cart">
        <div className="flex gap-2 items-center cursor-pointer mr-5">
          <img src={carts} alt="cart" className="w-8 brightness-0 invert" />
          <span className="text-lg font-semibold">{cart.length}</span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
