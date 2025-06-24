import React from "react";

const Header = () => {
  return (
    <div className=" h-20 green flex px-28 justify-between items-center">
      <section className=" flex">
        <img src="" alt="Logo" />
        <div>Save</div>
        <div>Invest</div>
        <div>Stories</div>
        <div>FAQs</div>
        <div>Resource</div>
      </section>
      <section>
        <button>Sign In</button>
        <button>Create Free Account</button>
      </section>
    </div>
  );
};

export default Header;
