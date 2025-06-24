import React from "react";
import Username from "../components/reuseable/Username";
import Age from "../components/reuseable/Age";

const Header = () => {
  //   const a = 4;
  //   const b = 5;
  //   const c = a + b;

  //   const myName = "Samuel";

  return (
    <div>
      <h1>This is the Header</h1>
      <Username name="Peter" />
      <Age myAge={31} />
    </div>
  );
};

export default Header;
