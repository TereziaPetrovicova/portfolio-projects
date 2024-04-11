import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import WeatherApp from "./components/WeatherApp.jsx";
import Calculator from "./components/Calculator.jsx";
import RPS from "./components/RPS.jsx";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToHome = () =>
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToAbout = () =>
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToPortfolio = () =>
    portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () =>
    contactRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar
                scrollToHome={scrollToHome}
                scrollToAbout={scrollToAbout}
                scrollToPortfolio={scrollToPortfolio}
                scrollToContact={scrollToContact}
              />
              <div ref={homeRef} id="hero">
                <Hero scrollToAbout={scrollToAbout} />{" "}
              </div>
              <div ref={aboutRef} id="about">
                <About scrollToContact={scrollToContact} />{" "}
              </div>
              <div ref={portfolioRef} id="portfolio">
                <Portfolio />
              </div>
              <div ref={contactRef} id="contact">
                <Contact />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/weather"
          element={
            <>
              <Link className="return-button" to="/#portfolio">
                ← Back to Portfolio
              </Link>
              <WeatherApp />
              <Footer />
            </>
          }
        />
        <Route
          path="/calculator"
          element={
            <>
              <Link className="return-button" to="/#portfolio">
                ← Back to Portfolio
              </Link>
              <Calculator />
              <Footer />
            </>
          }
        />
        <Route
          path="/rps"
          element={
            <>
              <Link className="return-button" to="/#portfolio">
                ← Back to Portfolio
              </Link>
              <RPS />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
