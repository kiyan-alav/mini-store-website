import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../Contexts/ProductsContext";
import Toast from "../Toast/Toast";
import "react-toastify/dist/ReactToastify.css";
import "./AllProducts.css";

export default function AllProducts() {
  const [category, setCategory] = useState("all");
  const { products, chosenProducts, setChosenProducts, setIsShowToast } =
    useContext(ProductsContext);

  const addToCartHandler = function (product) {
    setIsShowToast(true);
    setTimeout(() => {
      setIsShowToast(false);
    }, 1500);

    const isInCart = chosenProducts.some(
      (bagProduct) => bagProduct.title === product.title
    );

    console.log(isInCart);

    if (!isInCart) {
      const newProductItem = {
        id: chosenProducts.length + 1,
        title: product.title,
        image: product.image,
        price: product.price,
        count: 1,
      };

      setChosenProducts((prevProducts) => [...prevProducts, newProductItem]);
    } else {
      const userCart = [...chosenProducts];

      userCart.some((bagProduct) => {
        if (bagProduct.title === product.title) {
          bagProduct.count += 1;
          return true;
        }
        return null;
      });

      setChosenProducts(userCart);
    }
  };

  return (
    <>
      {/* Start Products  */}
      <div className="section-center product-section">
        <section className="title-center">
          <h2>محصولات</h2>
          <h3>
            <Link to="/" className="back">
              بازگشت
            </Link>
          </h3>
        </section>
        <section className="product-categories">
          <h2>دسته بندی محصولات</h2>
          <ul>
            <li onClick={() => setCategory("all")}>همه</li>
            <li onClick={() => setCategory("men's clothing")}>
              لباس های مردانه
            </li>
            <li onClick={() => setCategory("women's clothing")}>
              لباس های زنانه
            </li>
            <li onClick={() => setCategory("jewelery")}>زیور آلات</li>
            <li onClick={() => setCategory("electronics")}>لوازم برقی</li>
          </ul>
        </section>
        <section className="product-center">
          {/* product renders from db with this template  */}
          {category === "all" &&
            products.map((product) => (
              <article className="product-item" key={product.id}>
                <div className="product-banner">
                  <img src={product.image} alt="" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">{product.title}</h3>
                  <h3 className="product-price">
                    {product.price.toLocaleString("fa-IR")} تومان
                  </h3>
                </div>
                <div className="product-description">
                  <p>{product.description}</p>
                </div>
                <div className="product-rate">
                  <h3 className="product-score">
                    {product.rating__rate.toLocaleString("fa-IR")}/
                    {Number(5).toLocaleString("fa-IR")}
                  </h3>
                  <h3 className="product-buy">
                    {product.rating__count.toLocaleString("fa-IR")} بار
                  </h3>
                </div>
                <div className="product-btn">
                  <button
                    type="button"
                    onClick={() => addToCartHandler(product)}
                  >
                    اضافه کردن
                  </button>
                </div>
              </article>
            ))}
          {category &&
            products
              .filter((product) => product.category === category)
              .map((product) => (
                <article className="product-item" key={product.id}>
                  <div className="product-banner">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="product-info">
                    <h3 className="product-title">{product.title}</h3>
                    <h3 className="product-price">
                      {product.price.toLocaleString("fa-IR")} تومان
                    </h3>
                  </div>
                  <div className="product-description">
                    <p>{product.description}</p>
                  </div>
                  <div className="product-rate">
                    <h3 className="product-score">
                      {product.rating__rate.toLocaleString("fa-IR")}/
                      {Number(5).toLocaleString("fa-IR")}
                    </h3>
                    <h3 className="product-buy">
                      {product.rating__count.toLocaleString("fa-IR")} بار
                    </h3>
                  </div>
                  <div className="product-btn">
                    <button
                      type="button"
                      onClick={() => addToCartHandler(product)}
                    >
                      اضافه کردن
                    </button>
                  </div>
                </article>
              ))}
        </section>
      </div>
      {/* End Products  */}
      {}
      <Toast text="محصول با موفقیت اضافه شد 😎" />
    </>
  );
}
