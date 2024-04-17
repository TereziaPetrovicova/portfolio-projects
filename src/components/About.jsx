import React from "react";
import "./About.css";

const About = ({ scrollToContact }) => {
  return (
    <section className="about-section">
      <div className="about-info">
        <h1 className="text-5xl font-bold mb-4">HELLO, I'M TEREZA.</h1>
        <h2 className="text-4xl mb-4">Junior Web/Software Developer</h2>
        <p className="text-2xl font-medium mb-4">
          After 7 years in the education sector, I decided for a career shift.
          Transitioning to IT, I began my journey by enrolling in a one-year
          full -stack junior software developer course (certified
          requalification) that I successfully completed by the end of 2023. The
          course laid a solid foundation for my next steps, leading me to the
          point where I could pick my own basic stack, and start a couple of
          small projects, including this website.
        </p>
        <p className="text-2xl font-medium mb-4">
          In the learning process, I quickly discovered that my heart beats for
          the front-end and UI/UX design. However, as I like my work to be not
          only visually appealing, but also safe, functional, and intuitive, I
          deeply appreciate the back-end knowledge and skill that I develop
          simultaneously with the front end, bringing me the joy of a unified
          big picture.
        </p>
        <p className="text-2xl font-medium mb-4">
          I would like to hone my skills both independently and within a good
          developer team, where I can bring my own piece of work and ideas, and
          learn from others, what is crucial for me in general.
        </p>
        <div className="social-buttons-container">
          <div className="social-buttons">
            <a
              href="https://linkedin.com/in/terézia-petrovičová-a767561b0"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              <img src="linkedin.svg" alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/TereziaPetrovicova"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              <img src="github.svg" alt="GitHub" />
            </a>
          </div>
          <button
            className="contact-me-button font-bold"
            onClick={scrollToContact}
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
