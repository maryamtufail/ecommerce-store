import React from "react";
import ProductList from "../component/productList";
import productsData from "../data/products.json";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Recommended = () => {

  useDocumentTitle("Salinaka | Recommended");

  return (
    <div>
      <div className="py-[3rem] justify-center flex ">
        <div className="flex h-[22rem] w-[87rem] bg-[#f3f3f3]">
          <div className="flex flex-col items-start justify-center p-[5rem]">
            <h1 className="font-semibold text-[#1a1a1a] my-[0.67em] md:text-5xl text-3xl">
              Recommended Products
            </h1>
          </div>
          <div className="w-2/4 overflow-hidden md:flex hidden">
            <img
              className="w-full h-full object-cover"
              src="/images/recommended.png"
              alt="recommended"
            />
          </div>
        </div>
      </div>
      <ProductList products={productsData.recommended} />
    </div>
  );
};

export default Recommended;
