import React from "react";
import { Link } from "react-router-dom";

import "./Enter.css";

export default function Enter() {
  return (
    <>
      {/* Start Enter Section  */}
      <div className="section-center enter-section">
        <section className="enter-right">
          <h2>همین الان اولین خریدتو انجام بده :)</h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>
        </section>
        <section className="enter-left">
          <Link to="/products">
            <button type="button">محصولات</button>
          </Link>
        </section>
      </div>
      {/* End  Enter Section */}
    </>
  );
}
