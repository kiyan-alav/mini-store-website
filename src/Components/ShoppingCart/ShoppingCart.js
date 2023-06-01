import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../Contexts/ProductsContext";

import "./ShoppingCart.css";

export default function ShoppingCart() {
  const { chosenProducts, totalPrice, setTotalPrice } =
    useContext(ProductsContext);

  if (totalPrice > 0) {
  }

  useEffect(() => {
    const calculateTotalPrice = function () {
      const userCartTotalPrice = chosenProducts.reduce(
        (prevVal, curVal) => prevVal + curVal.price * curVal.count,
        0
      );
      setTotalPrice(userCartTotalPrice);
    };

    calculateTotalPrice();
  }, [chosenProducts, setTotalPrice]);

  return (
    <>
      {/* Start Shopping Cart  */}
      <div className="section-center shopping-cart-center">
        <h1 className="shopping-cart-title">سبد خرید</h1>
        <section className="shopping-cart">
          {chosenProducts.map((product) => (
            <article className="shop-product" key={product.id}>
              <div className="product-img">
                <img src={product.image} alt="" />
              </div>
              <h2 className="product-title">{product.title}</h2>
              <h2 className="product-price">
                {product.price.toLocaleString("fa-IR")}
              </h2>
              <h2 className="product-count">
                {product.count.toLocaleString("fa-IR")}
              </h2>
            </article>
          ))}
        </section>
        <h1 className="shopping-cart-total-price">
          قیمت کل:{" "}
          {chosenProducts.length !== 0 ? totalPrice.toLocaleString("fa-IR") : 0}
        </h1>
        <Link to="/payment" className="payment">
          پرداخت
        </Link>
      </div>
      {/* End Shopping Cart */}
    </>
  );
}
