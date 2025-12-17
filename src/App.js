import { useEffect, useState } from "react";
import axios from "axios";
import "./components/List.css";

const UserList = () => {
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
          setError("Failed to fetch data");
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

export default UserList;

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
