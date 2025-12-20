import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response, "Response");
        setProducts(response.data || []);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <div
            style={{ display: "flex", alignItems: "center" }}
            key={product.id}
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  marginRight: "25px",
                  cursor: "pointer",
                }}
              />
            </Link>
            <div>
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
