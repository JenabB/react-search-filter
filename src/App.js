import React, { useState } from "react";
import Information from "./info-json";
import "./App.css";
const App = () => {
  const [search, setSearch] = useState(null);

  const searchSpace = (e) => {
    setSearch(e.target.value);
  };

  const items = Information.filter((data) => {
    if (search == null) return data;
    else if (
      data.name.toLowerCase().includes(search.toLowerCase()) ||
      data.category.toLowerCase().includes(search.toLowerCase()) ||
      data.subcategory.toLowerCase().includes(search.toLowerCase())
    ) {
      return data;
    }
  }).map((data) => {
    return (
      <div>
        <div className="item-container">
          <img className="product-image" src={data.image} alt="productimage" />
          <div className="item-description">
            <h3>{data.name}</h3>
            <h5>{data.price}</h5>
            <p style={{ fontSize: "10pt" }}>stock: {data.stock}</p>
            <h6>{data.category}</h6>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="app-container">
        <input
          type="text"
          placeholder="Enter item to be searched"
          onChange={(e) => searchSpace(e)}
        />
        <div className="app-body">
          <div className="app-item">{items}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
