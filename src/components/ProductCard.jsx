import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/slices/cartSlice";

const ProductCard = ({ data }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    if (data?.products) {
      setLoading(false);
    }
  }, [data]);
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 p-3 sm:p-2">
      {loading ? (
        <p className="text-center text-lg font-semibold">Loading products...</p>
      ) : (
        data?.products?.map((item) => {
          const cartItem = cart.find((cartItem) => cartItem.id === item.id); // ✅ Check if item is in cart

          return (
            <div
              key={item.id}
              className="border border-gray-300 m-2 p-3 flex flex-col gap-2 justify-between rounded-lg shadow-lg"
            >
              <div>
                <div className="w-52 h-52 m-auto flex justify-center items-center">
                  <img
                    src={item.image}
                    alt={item.brand}
                    className="h-40 hover:scale-110 transition-transform"
                  />
                </div>
                <div>
                  <p className="text-gray-500 font-medium">
                    {item.brand.toUpperCase()}
                  </p>
                  <p>{item.title}</p>
                </div>
              </div>
              <div>
                <p className="font-semibold py-2">$ {item.price}</p>
                {cartItem ? (
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => dispatch(decrementQuantity(item.id))}
                      className="bg-gray-500 hover:bg-gray-600  text-white font-mono px-4 py-2 rounded-md"
                    >
                      -
                    </button>
                    <span className="font-bold">{cartItem.quantity}</span>
                    <button
                      onClick={() => dispatch(incrementQuantity(item.id))}
                      className="bg-blue-600 hover:bg-blue-700  text-white font-mono  px-4 py-2 rounded-md"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => dispatch(addCart(item))}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md"
                  >
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default ProductCard;
