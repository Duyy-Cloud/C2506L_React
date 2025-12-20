import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/products">Product List</Link>
          </li>
          <li>
            <Link to="/add-product">Add Product</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
