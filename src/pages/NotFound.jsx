import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="flex flex-col items-center justify-center text-center"
      style={{ minHeight: "calc(100vh - 56px)" }}
    >
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-2">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
