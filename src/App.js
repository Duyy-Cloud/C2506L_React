import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import AddProduct from "./components/AddProduct";
import LoginPage from "./components/LoginPage";
import DashboardPage from "./components/DashboardPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
}

export default App;

/* function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </div>
  );
}
export default App; */

/* const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          console.log("Response:", response.data);
          setUsers(response.data ?? []);
          setLoading(false);
        })
        .catch((error) => {
          setError("fetching data went wrong try again ");
          setLoading(false);
        });
    }, 2000);

    return () => clearTimeout(delayTimer);
  }, []);

  return (
    <div className="container">
      {loading && <div className="loading">Loading... Please wait</div>}{" "}
      {error && <div className="error">{error}</div>}
      {!loading && !error && (
        <div className="user-list">
          {users.map((user) => (
            <div className="user-card" key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList; */

/* const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response, "Response");
      setProducts(response.data ?? []);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <button onClick={fetchProducts}>Fetch Products</button>
      <div>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}; */

/* const App = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <div>
      <h1>Counter App</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <Display count={count} />
    </div>
  );
}; */

/* export default App; */
