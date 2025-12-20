import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  const [fakeProducts] = useState([
    { id: 1, name: "PC", price: "$10000" },
    { id: 2, name: "Car", price: "$20k" },
  ]);
  const [fakeUsers] = useState([
    { id: 1, name: "User 1", email: "d.staffeld@yahoo.de" },
    { id: 2, name: "User 2", email: "123@gmail.de" },
  ]);

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div>
      <header>
        <h2>Dashboard</h2>
        <nav>
          <button onClick={() => alert("Managing Products")}>
            Manage Products
          </button>
          <button onClick={() => alert("Managing Users")}>Manage Users</button>
          <button onClick={handleLogout}>Logout</button>
        </nav>
      </header>

      <div>
        <h3>Fake Products</h3>
        <ul>
          {fakeProducts.map((product) => (
            <li key={product.id}>
              {product.name} - {product.price}
            </li>
          ))}
        </ul>

        <h3>Fake Users</h3>
        <ul>
          {fakeUsers.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardPage;
