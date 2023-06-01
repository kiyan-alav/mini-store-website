import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../Contexts/ProductsContext";
import Toast from "../Toast/Toast";
import "./Products.css";

export default function Products() {
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
          <h2>برخی از محصولات</h2>
          <h3>
            <Link to="/products" className="open-products">
              مشاهده همه محصولات
            </Link>
          </h3>
        </section>
        <section className="product-center">
          {products
            .sort(() => Math.random() - 0.5)
            .map((prod, idx) => {
              if (idx < 5) {
                return (
                  <article className="product-item" key={prod.id}>
                    <div className="product-banner">
                      <img src={prod.image} alt="" />
                    </div>
                    <div className="product-info">
                      <h3 className="product-title">{prod.title}</h3>
                      <h3 className="product-price">
                        {prod.price.toLocaleString("fa-IR")} تومان
                      </h3>
                    </div>
                    <div className="product-description">
                      <p>{prod.description}</p>
                    </div>
                    <div className="product-rate">
                      <h3 className="product-score">
                        {prod.rating__rate.toLocaleString("fa-IR")}/
                        {Number(5).toLocaleString("fa-IR")}
                      </h3>
                      <h3 className="product-buy">
                        {prod.rating__count.toLocaleString("fa-IR")} بار
                      </h3>
                    </div>
                    <div className="product-btn">
                      <button
                        type="button"
                        onClick={() => {
                          addToCartHandler(prod);
                        }}
                      >
                        اضافه کردن
                      </button>
                    </div>
                  </article>
                );
              }
              return null;
            })}
        </section>
      </div>
      {/* End Products  */}
      <Toast text="محصول با موفقیت اضافه شد 😎" />
    </>
  );
}
