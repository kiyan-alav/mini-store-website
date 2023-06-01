import React from "react";

import "./Registration.css";

export default function SignUp() {
  return (
    <>
      {/* Start Registration  */}
      <div className="section-center registration">
        <h2 className="title">ثبت نام در سایت</h2>
        <form action="" className="form">
          <div className="form-input">
            <input type="text" placeholder="نام" />
          </div>
          <div className="form-input">
            <input type="text" placeholder="نام خانوادگی" />
          </div>
          <div className="form-input">
            <input type="email" placeholder="ایمیل" />
          </div>
          <div className="form-input">
            <input type="password" placeholder="کلمه عبور" />
          </div>
          <div className="form-input">
            <input type="number" placeholder="شماره تماس" />
          </div>
          <button type="submit" className="submit-btn">
            ثبت نام
          </button>
        </form>
      </div>
      {/*  End Registration  */}
    </>
  );
}
