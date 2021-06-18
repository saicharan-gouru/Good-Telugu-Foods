import React, { isValidElement, useState } from "react";
import "./styles.css";
var teluguFoods = {
  tiffin: [
    { name: "Puri", rating: "5/5" },
    { name: "Dosa", rating: "5/5" },
    { name: "Idle", rating: "4/5" }
  ],
  lunch: [
    { name: "Butta bojanam", rating: "5/5" },
    { name: "Veg pulao", rating: "4/5" },
    { name: "Chicken Biryani", rating: "5/5" }
  ],
  snack: [
    { name: "Punugulu", rating: "5/5" },
    { name: "Mixture", rating: "5/5" },
    { name: "Maramaralu", rating: "4/5" }
  ],
  Dinner: [
    { name: "Jonna rottelu", rating: "5/5" },
    { name: "Upma", rating: "5/5" },
    { name: "Atlu", rating: "4/5" }
  ]
};

export default function App() {
  const [selectedCategory, setCategory] = useState("tiffin");
  function categoryClickHandler(category) {
    setCategory(category);
  }

  return (
    <div className="App">
      <h1> 🍝 Good Telugu Foods 🍝 </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite telugu foods. Select a category to get started{" "}
      </p>

      <div>
        {Object.keys(teluguFoods).map((category) => (
          <button onClick={() => categoryClickHandler(category)} class="btn">
            {category}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {teluguFoods[selectedCategory].map((food) => (
            <li key={food.name} class="li">
              {" "}
              <div style={{ fontSize: "larger" }}> {food.name} </div>
              <div style={{ fontSize: "smaller" }}> {food.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
