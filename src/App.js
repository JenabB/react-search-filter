import React, { Component } from "react";
import "./App.css";
import Information from "./info-json";

class App extends Component {
  constructor() {
    super();

    this.state = {
      search: null,
    };
  }

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };

  render() {
    const items = Information.filter((data) => {
      if (this.state.search == null) return data;
      else if (
        data.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
        data.category.toLowerCase().includes(this.state.search.toLowerCase()) ||
        data.subcategory.toLowerCase().includes(this.state.search.toLowerCase())
      ) {
        return data;
      }
    }).map((data) => {
      return (
        <div>
          <div className="item-container">
            <img
              className="product-image"
              src={data.image}
              alt="productimage"
            />
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
            onChange={(e) => this.searchSpace(e)}
          />
          <div className="app-body">
            <div className="app-item">{items}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
