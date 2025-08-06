import React from "react";

function Header({ goToAbout, goToHome, goToContact }) {
  const HeaderLinks = [
    { label: "Home", action: goToHome },
    { label: "About", action: goToAbout },
    { label: "Contact", action: goToContact },
  ];

  return (
    <header className="w-full bg-lime-100 shadow-md">
      <nav className="max-w-6xl mx-auto flex justify-center sm:justify-start gap-8 py-4 px-4">
        {HeaderLinks.map((link, index) => (
          <button
            key={index}
            onClick={link.action}
            className="text-lg font-medium text-gray-800 hover:text-lime-700 transition-colors duration-200  rounded"
          >
            {link.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;
