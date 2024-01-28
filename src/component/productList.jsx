import React from "react";

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-16 py-3">
      {products.map((product) => (
        <div key={product.id} className="border p-4">
          <img src={product.img} alt={product.name} className="w-full mb-2" />
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600">{product.type}</p>
          <p className="text-gray-600">${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
