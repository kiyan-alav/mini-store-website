import React from "react";
import { Link } from "react-router-dom";

import "./Description.css";

export default function Description() {
  return (
    <>
      {/* Start Website Description  */}
      <div className="section-center about-center">
        <section className="title-center">
          <h3>درباره ی وبسیات کالا مالا</h3>
        </section>
        <section className="about-infos">
          <article className="infos">
            <h3>کالا مالا چجور سایتی است؟</h3>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
            <ul>
              <li>تنوع محصولات</li>
              <li>ارسال سریع</li>
              <li>پشتیبانی 24 ساعته</li>
              <li>رهگیری سفارشات</li>
              <li>یکدونه تو اضافه کن :)</li>
            </ul>
            <Link to="/contact-us">
              <button type="button">تماس با ما</button>
            </Link>
          </article>
          <article className="about-img">
            <img src="./images/feature-image.jpg" alt="" />
          </article>
        </section>
      </div>
      {/* End Website Description */}
    </>
  );
}
