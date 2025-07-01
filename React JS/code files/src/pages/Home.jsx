import { useState } from "react";

const Home = () => {
  const [counter, setCounter] = useState(1);

  //   const myCounter = 23

  const increaseState = () => {
    setCounter(counter + 1);
  };

  const decreaseState = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <div>This is the Home page</div>
      <h1>this is the counter state: {counter}</h1>
      <br />
      <button onClick={increaseState}>Increase State</button>
      <button onClick={decreaseState}>Decrease State</button>
    </div>
  );
};

export default Home;
