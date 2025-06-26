import { LuChevronDown } from "react-icons/lu";
import Button from "../components/reuseable/Button";

import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" h-24 ">
      <div className=" max-w-[1280px] px-16  mx-auto flex h-full items-center justify-between">
        <section className=" flex">
          <Link to="/">
            <main>
              <img src="./logo.svg" alt="" />
            </main>
          </Link>
          <main className=" flex  mx-12 gap-9 items-center font-medium max-tablet:hidden">
            <nav className=" flex items-center gap-0.5">
              <span>Save</span>
              <span>
                <LuChevronDown size={20} />
              </span>
            </nav>
            <Link to="/invest">
              <nav>Invest</nav>
            </Link>
            <Link to="/stories">
              <nav>Stories</nav>
            </Link>
            <nav>FAQs</nav>
            <nav className=" flex items-center gap-0.5">
              {" "}
              <span>Resources</span>
              <span>
                {" "}
                <LuChevronDown />{" "}
              </span>
            </nav>
          </main>
        </section>
        <section className=" flex gap-2 max-tablet:hidden">
          <Button title="Sign In" borderColor="#122231" />
          <Button
            title="Create free Account"
            bgColor="#122231"
            textColor="#fff"
          />
        </section>
        <section className=" hidden max-tablet:block">
          <RxHamburgerMenu size={35} />
        </section>
      </div>
    </header>
  );
};

export default Header;
