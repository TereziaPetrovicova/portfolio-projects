import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const cardsData = [
    {
      title: "Weather App",
      description: "A React app for checking the weather in your city.",
      icon: "/weather.svg",
    },
    {
      title: "Calculator",
      description: "A basic calculator built with JavaScript.",
      icon: "/calculator.svg",
    },
    {
      title: "RPS Game",
      description: "A simple Rock, Paper, Scissors Game. (JS)",
      icon: "/rps.svg",
    },
  ];

  return (
    <section className="portfolio flex flex-col justify-center items-center bg-[#181818] text-white py-16 px-8">
      <h1 className="portfolio-title text-5xl font-medium mb-16">PORTFOLIO</h1>
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="card bg-gray-800 rounded-lg p-6 text-center"
          >
            <img
              src={card.icon}
              alt={card.title}
              className="card-icon mb-4 mx-auto"
            />
            <h2 className="text-2xl mb-2 font-bold">{card.title}</h2>
            <p className="text-gray-400 text-lg font-medium">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
