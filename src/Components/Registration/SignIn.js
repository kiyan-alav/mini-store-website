import React from "react";

import "./Registration.css";

export default function SignIn() {
  return (
    <>
      {/* Start Registration  */}
      <div className="section-center registration">
        <h2 className="title">ورود</h2>
        <form action="" className="form">
          <div className="form-input">
            <input type="email" placeholder="ایمیل" />
          </div>
          <div className="form-input">
            <input type="password" placeholder="کلمه عبور" />
          </div>
          <button type="submit" className="submit-btn">
            ورود
          </button>
        </form>
      </div>
      {/* End Registration  */}
    </>
  );
}
