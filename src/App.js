import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import routers from "./routes";
import supabase from "./config/supabaseClient";
import Header from "./Components/Header/Header";
import MainBanner from "./Components/MainBanner/MainBanner";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { MenuContext } from "./Contexts/MenuContext";
import { ProductsContext } from "./Contexts/ProductsContext";

export default function App() {
  const [navbar, setNavbar] = useState(false);
  const [products, setProducts] = useState([]);
  const [chosenProducts, setChosenProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isShowToast, setIsShowToast] = useState(false);
  const routes = useRoutes(routers);

  useEffect(() => {
    const fetchProducts = async function () {
      const { data, error } = await supabase.from("products").select();
      if (data) {
        setProducts(data);
      } else {
        setProducts(null);
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <ProductsContext.Provider
        value={{
          products,
          chosenProducts,
          setChosenProducts,
          totalPrice,
          setTotalPrice,
          isShowToast,
          setIsShowToast,
        }}
      >
        <MenuContext.Provider value={{ navbar, setNavbar }}>
          <Header />
          <Navbar />
        </MenuContext.Provider>
        <MainBanner />
        {routes}
        <Footer />
      </ProductsContext.Provider>
    </>
  );
}
