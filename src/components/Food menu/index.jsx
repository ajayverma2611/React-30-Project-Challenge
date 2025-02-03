import React, { useState } from "react";
import "./style.css";

const menuData = {
  Starters: [
    { name: "Bruschetta", price: "$8" },
    { name: "Garlic Bread", price: "$5" }
  ],
  "Main Course": [
    { name: "Grilled Salmon", price: "$20" },
    { name: "Steak", price: "$25" }
  ],
  Desserts: [
    { name: "Chocolate Lava Cake", price: "$10" },
    { name: "Cheesecake", price: "$9" }
  ],
  Drinks: [
    { name: "Red Wine", price: "$12" },
    { name: "Cocktail", price: "$10" }
  ]
};

function AppMenu() {
  const [activeSection, setActiveSection] = useState("Starters");

  return (
    <div className="menu-container">
      <h1 className="menu-title">🍽️ Fancy Restaurant Menu</h1>
      <div className="menu-sections">
        {Object.keys(menuData).map((section) => (
          <button
            key={section}
            className={`menu-button ${activeSection === section ? "active" : ""}`}
            onClick={() => setActiveSection(section)}
          >
            {section}
          </button>
        ))}
      </div>

      <div className="menu-items">
        {menuData[activeSection].map((item, index) => (
          <div key={index} className="menu-item">
            <span>{item.name}</span>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppMenu;
