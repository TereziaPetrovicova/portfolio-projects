import React from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="contact-section flex flex-col justify-center items-center bg-[#161616] h-screen text-white py-16 px-8"
    >
      <h1 className="contact-title text-5xl font-bold mb-4">LET'S CONNECT</h1>
      <div className="neumorphic-form w-full max-w-4xl">
        <form onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="from_name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="reply_to"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="send-button font-bold">
            SEND
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
