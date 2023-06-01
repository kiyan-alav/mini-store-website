import React, { useState, useContext } from "react";
import { ProductsContext } from "../../Contexts/ProductsContext";
import { useNavigate } from "react-router-dom";
import Toast from "../Toast/Toast";

import "./Payment.css";

export default function Payment() {
  const [cartNum, setCartNum] = useState({
    part1: "",
    part2: "",
    part3: "",
    part4: "",
  });
  const [cvv2, setCvv2] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const { setTotalPrice, setChosenProducts, setIsShowToast } =
    useContext(ProductsContext);

  const paymentHandler = function (event) {
    event.preventDefault();
    setIsShowToast(true);

    setCartNum({ part1: "", part2: "", part3: "", part4: "" });
    setCvv2("");
    setPassword("");
    setDate("");
    setTotalPrice(0);
    setChosenProducts([]);

    setTimeout(() => {
      setIsShowToast(false);
      navigate("/shopping-cart");
    }, 2000);
  };

  return (
    <>
      <div className="section-center payment-section">
        <h2 className="payment-title">درگاه پرداخت کالا مالا</h2>
        <form action="" className="form-payment">
          <div className="form-input">
            <label htmlFor="num">شماره کارت:</label>
            <div className="cart-number-container">
              <input
                type="text"
                className="cart-number"
                maxLength="4"
                onChange={(e) =>
                  setCartNum((prevNum) => ({
                    ...prevNum,
                    part1: +e.target.value,
                  }))
                }
                value={cartNum.part1}
              />
              <input
                type="text"
                className="cart-number"
                maxLength="4"
                onChange={(e) =>
                  setCartNum((prevNum) => ({
                    ...prevNum,
                    part2: +e.target.value,
                  }))
                }
                value={cartNum.part2}
              />
              <input
                type="text"
                className="cart-number"
                maxLength="4"
                onChange={(e) =>
                  setCartNum((prevNum) => ({
                    ...prevNum,
                    part3: +e.target.value,
                  }))
                }
                value={cartNum.part3}
              />
              <input
                type="text"
                className="cart-number"
                maxLength="4"
                onChange={(e) =>
                  setCartNum((prevNum) => ({
                    ...prevNum,
                    part4: +e.target.value,
                  }))
                }
                value={cartNum.part4}
              />
            </div>
          </div>
          <div className="form-input">
            <label htmlFor="cvv2">شماره شناسایی دوم (CVV2):</label>
            <input
              type="password"
              onChange={(e) => setCvv2(+e.target.value)}
              value={cvv2}
            />
          </div>
          <div className="form-input">
            <label htmlFor="dates">تاریخ انقضای کارت:</label>
            <input
              type="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </div>
          <div className="form-input">
            <label htmlFor="password">رمز اینترنتی کارت:</label>
            <input
              type="password"
              onChange={(e) => setPassword(+e.target.value)}
              value={password}
            />
          </div>
          <button
            className="payment-btn"
            onClick={(event) => paymentHandler(event)}
          >
            پرداخت
          </button>
        </form>
      </div>
      <Toast text="پرداخت با موفقیت انجام شد 😃" />
    </>
  );
}
