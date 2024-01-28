import React from "react";
import Hero from "../containers/hero";
import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import ProductList from "../component/productList";
import productsData from "../data/products.json";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  useDocumentTitle("Salinaka | Home");

  return (
    <section>
      <div className="py-[3rem] px-[4rem] relative flex ">
        <Hero />
      </div>
      <div className="py-12 ">
        <div className="flex justify-between items-center w-full px-16">
          <h2 className="text-3xl font-semibold mb-4 ">Featured Products</h2>
          <Link to="/featured" className="hover:text-gray-600">
            View All Product <FaArrowRightLong className="inline-block" />
          </Link>
        </div>
        <ProductList products={productsData.featured}/>
      </div>
      <div className="py-12 ">
      <div className="flex justify-between items-center w-full px-16">
          <h2 className="text-3xl font-semibold mb-4">Recomended Products</h2>
          <Link to="/recommended" className="hover:text-gray-600">
            View All Product <FaArrowRightLong className="inline-block" />
          </Link>
        </div>
        <ProductList products={productsData.recommended} />
      </div>
    </section>
  );
};

export default Home;
