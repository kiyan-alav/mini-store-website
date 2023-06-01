import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { ProductsContext } from "../../Contexts/ProductsContext";
import { FaTimes } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";

import "./Toast.css";

export default function Toast(props) {
  const { setIsShowToast, isShowToast } = useContext(ProductsContext);

  return ReactDOM.createPortal(
    <div className={`toast ${isShowToast ? "show" : ""}`}>
      <FaTimes className="icon" onClick={() => setIsShowToast(false)} />
      <p>
        <AiFillCheckCircle className="check" />
        <span>{props.text}</span>
      </p>
    </div>,
    document.getElementById("toast-parent")
  );
}
