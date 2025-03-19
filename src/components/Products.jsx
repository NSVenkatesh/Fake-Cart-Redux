import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.in/api/products?page=2")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-medium m-2">Products</h1>
      <ProductCard data={data} />
    </div>
  );
};

export default Products;
