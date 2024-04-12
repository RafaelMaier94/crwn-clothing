import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Jackets",
    },
    {
      id: 3,
      title: "Sneakers",
    },
    {
      id: 4,
      title: "Womens",
    },
    {
      id: 5,
      title: "Men",
    },
  ];

  return (
    <div className="categories-container">
      <div className="category-container">
        {categories.map(({ title, id }) => (
          <div className="category-body-container" key={id}>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
