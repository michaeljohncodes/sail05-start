import { useState } from "react";

const Home = () => {
  const [myCounter, setMyCounter] = useState(4);
  const [toggle, setToggle] = useState(true);

  console.log(toggle);

  const increaseCount = () => {
    setMyCounter(myCounter + 1);
  };

  const toggleBox = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div>This is the Home Page</div>
      <h1>Your state Value is: {myCounter} </h1>
      <button onClick={increaseCount}> Increase</button>
      <button>Decrease</button>
      <button onClick={toggleBox}>
        {" "}
        {toggle ? "Show Sqrt" : "Hide Sqqrt"}{" "}
      </button>
      {/* {toggle ? (
        <button className=" bg-black" onClick={toggleBox}>
          Show Sqrt
        </button>
      ) : (
        <button className=" bg-amber-500" onClick={toggleBox}>
          Hide Sqrt
        </button>
      )} */}
      {toggle ? null : (
        <div className=" p-20 bg-amber-300 w-80 text-center">
          <h2>This is the final Count</h2>
          <h1> {Math.pow(myCounter, 2)} </h1>
        </div>
      )}
    </div>
  );
};

export default Home;
