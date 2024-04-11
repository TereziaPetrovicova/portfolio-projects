import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-4 bg-black text-center text-white text-sm">
      <p>© {currentYear} Your Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
