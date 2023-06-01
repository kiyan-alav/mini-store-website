import React, { useEffect, useState } from "react";
import supabase from "./../../config/supabaseClient";

import "./Contact.css";

export default function Contact() {
  const [comments, setComments] = useState([]);
  const [controlComments, setControlComments] = useState(false);
  const [name, setName] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [isFetching, setIsFetching] = useState(true);

  const commentHandler = async function (event) {
    event.preventDefault();

    const newComment = {
      name: name,
      body: userMessage,
      created_at: new Date(),
    };

    console.log(newComment);

    const { data, error } = await supabase.from("comments").insert(newComment);

    setTimeout(() => {
      setIsFetching((prev) => !prev);
    }, 3000);

    console.log(data);

    setName("");
    setUserMessage("");
  };

  useEffect(() => {
    const fetchComments = async function () {
      const { data, error } = await supabase.from("comments").select();
      if (data) {
        setComments(data);
      } else {
        setComments(null);
        console.log(error);
      }
    };
    fetchComments();
  }, [isFetching]);
  return (
    <>
      {/* Start Contact */}
      <div className="section-center contact-center">
        <section className="contact">
          <article className="message-info">
            <h2>تماس با ما</h2>
            <p>
              برای ارسال پیام و نظرات خود نام و نام خانوادگی خود را به همراه
              پیام خود نوشته و دکمه ارسال پیام را بزنید
            </p>
          </article>
          <article className="message-box">
            <form action="" className="form" onSubmit={commentHandler}>
              <div className="form-input">
                <input
                  type="text"
                  placeholder="نام و نام خانوادگی"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="form-input">
                <textarea
                  placeholder="پیام شما"
                  value={userMessage}
                  onChange={(event) => setUserMessage(event.target.value)}
                >
                  {" "}
                </textarea>
              </div>
              <button type="submit" className="submit-btn">
                ارسال پیام
              </button>
            </form>
          </article>
        </section>
        <button
          type="button"
          className="message-box-btn"
          onClick={() => setControlComments((prev) => !prev)}
        >
          {!controlComments ? "مشاهده نظرات" : "بستن نظرات"}
        </button>
        <section
          className={controlComments ? "messages-con show" : "messages-con"}
        >
          {comments.map((comment) => (
            <article className="message" key={comment.id}>
              <p className="message-title">{comment.name}</p>
              <p className="message-body">{comment.body}</p>
              <p className="message-date">
                {new Date(comment.created_at).toLocaleString("fa-IR")}
              </p>
            </article>
          ))}
        </section>
      </div>
      {/* End Contact  */}
    </>
  );
}
