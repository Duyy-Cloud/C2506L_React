import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Rating,
} from "@mui/material";

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
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <nav>
          <Button
            variant="contained"
            onClick={() => alert("Managing Products")}
          >
            Manage Products
          </Button>
          <Button variant="contained" onClick={() => alert("Managing Users")}>
            Manage Users
          </Button>
          <Button variant="contained" color="error" onClick={handleLogout}>
            Logout
          </Button>
        </nav>
      </header>

      <div style={{ marginTop: "20px" }}>
        <Typography variant="h6">Fake Products</Typography>
        <Grid container spacing={2}>
          {fakeProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body2">{product.price}</Typography>
                  <Rating name="read-only" value={Math.random() * 5} readOnly />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h6" style={{ marginTop: "30px" }}>
          Fake Users
        </Typography>
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
