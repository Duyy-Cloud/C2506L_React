import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "./components/ProductCard";
import axios from "axios";
import Display from "./components/display";

const App = () => {
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
};

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

export default App;
