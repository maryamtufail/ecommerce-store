import React from "react";
import ProductList from "../component/productList";
import productsData from "../data/products.json";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Shop = () => {
  useDocumentTitle("Salinaka | Shop");

  return (
    <>
      <ProductList
        products={productsData.featured.concat(
          productsData.recommended,
          productsData.store
        )}
      />
    </>
  );
};

export default Shop;
