import { useState } from "react";
import Studentlist from "./components/Studentlist";
import Display from "./components/display";

function App() {
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
}

/* const App = () => {
  const students = [
    { id: 1, name: "Nguyen Van A", age: 20 },
    { id: 2, name: "Tran Thi B", age: 21 },
    { id: 3, name: "Le Van C", age: 22 },
  ];

  return (
    <div>
      <Studentlist students={students} />
    </div>
  );
}; */

export default App;
