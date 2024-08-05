"use client";

import { PlusCircleIcon, SearchIcon } from "lucide-react";
import { useState } from "react";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Static products array
  const products = [
    { name: "Flaxen enamel 1", price: 99.99, rating: 4 },
    { name: "FlaxoStone Cay", price: 99.99, rating: 4 },
    { name: "Falaxo Granular", price: 99.99, rating: 4 },
    { name: "Falaxo Quartz ", price: 99.99, rating: 4 },
    { name: "Flaxo Granite", price: 99.99, rating: 4 },
    { name: "Flaxo", price: 99.99, rating: 4 },
    { name: "Product ", price: 99.99, rating: 4 },
    { name: "Product ", price: 99.99, rating: 4 },
    { name: "Product ", price: 99.99, rating: 4 },
    { name: "Product Name 10", price: 99.99, rating: 4 },
  ];

  // Filtered products based on search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mx-auto pb-5 w-full">
      {/* SEARCH BAR */}
      <div className="mb-6">
        <div className="flex items-center border-2 border-gray-200 rounded">
          <SearchIcon className="w-5 h-5 text-gray-500 m-2" />
          <input
            className="w-full py-2 px-4 rounded bg-white"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* HEADER BAR */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-2xl font-bold">Products</div>
        <button
          className="flex items-center bg-blue-500 hover:bg-blue-700 text-gray-200 font-bold py-2 px-4 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          <PlusCircleIcon className="w-5 h-5 mr-2 !text-gray-200" /> Create
          Product
        </button>
      </div>

      {/* BODY PRODUCTS LIST */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg-grid-cols-3 gap-10 justify-between">
        {filteredProducts.map((product, index) => (
          <div key={index} className="border shadow rounded-md p-4 max-w-full w-full mx-auto">
            <div className="flex flex-col items-center">
              {/* Image placeholder */}
              <div className="mb-3 rounded-2xl w-36 h-36 bg-gray-200"></div>
              <h3 className="text-lg text-gray-900 font-semibold">{product.name}</h3>
              <p className="text-gray-800">${product.price.toFixed(2)}</p>
              <div className="flex items-center mt-2">
                <div className="flex">
                  {/* Rating placeholder */}
                  {Array.from({ length: product.rating }, (_, i) => (
                    <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  ))}
                  {Array.from({ length: 5 - product.rating }, (_, i) => (
                    <div key={i} className="w-4 h-4 bg-gray-300 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md">
            <div className="text-lg font-bold mb-4">Create Product</div>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
