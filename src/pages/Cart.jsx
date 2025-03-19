import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/slices/cartSlice";

const Cart = () => {
  const [empty, setEmpty] = useState(false);
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    if (cart.length == 0) {
      setEmpty(true);
    }
  }, [cart]);
  let total = 0;
  for (let item of cart) {
    total += item.price * item.quantity;
  }
  return (
    <div>
      {empty ? (
        <p className="font-bold text-xl text-center m-5 p-5">
          Your cart is Empty
        </p>
      ) : (
        cart.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 m-2 p-3 flex flex-col gap-2 justify-between rounded-lg shadow-lg"
          >
            <div>
              <div className="sm:grid sm:grid-cols-3 lg:grid-cols-5">
                <div className="flex justify-center">
                  <img src={item.image} alt={item.brand} className="h-32" />
                </div>
                <div className="sm:col-span-2 lg:col-span-4">
                  <p className="py-2 sm:py-0">{item.title}</p>
                  <p className="font-semibold pt-2">$ {item.price}</p>
                  <p className="font-semibold pt-2">
                    Total: $ {item.price * item.quantity}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between mx-5">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => dispatch(decrementQuantity(item.id))}
                  className="bg-gray-500 hover:bg-gray-600  text-white font-mono px-4 py-2 rounded-md"
                >
                  -
                </button>
                <span className="font-bold text-black">{item.quantity}</span>
                <button
                  onClick={() => dispatch(incrementQuantity(item.id))}
                  className="bg-blue-600 hover:bg-blue-700  text-white font-mono  px-4 py-2 rounded-md"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => dispatch(removeCart(item.id))}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
      {total > 0 ? (
        <p className="p-2 bg-slate-500 text-white font-semibold sticky bottom-0">
          Total: $ {total}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Cart;
