import React from "react";
import "./Contact.css";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(e.target)).toString(),
    })
      .then(() => alert("Message sent successfully!"))
      .catch(() => alert("Failed to send the message, please try again."));

  };

  return (
    <section
      id="contact"
      className="contact-section flex flex-col justify-center items-center bg-[#161616] h-screen text-white py-16 px-8"
    >
      <h1 className="contact-title text-5xl font-bold mb-4">LET'S CONNECT</h1>
      <div className="neumorphic-form w-full max-w-4xl">
        {/* <form name="contact" action="/" method="POST" onSubmit={sendEmail}> */}
        <form
          netlify-honeypot="bot-field"
          id="contact-form"
          data-netlify="true"
          name="contact"
          method="POST"
          onSubmit={sendEmail}
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="from_name" />
          <input type="hidden" name="reply_to" />
          <input type="hidden" name="message" />
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
