import "./App.css";
import Layout from "./layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ProductList from "./component/productList";
import productsData from "./data/products.json";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/recommended"
              element={<ProductList products={productsData.recommended} />}
            />
            <Route
              path="/featured"
              element={<ProductList products={productsData.featured} />}
            />
            <Route
              path="/shop"
              element={
                <ProductList
                  products={productsData.featured.concat(
                    productsData.recommended,
                    productsData.store
                  )}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
