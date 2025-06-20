import "./Header.css";
import HeaderNav1 from "../../block/headerblock/HeaderNav1";
import HeaderNav2 from "../../block/headerblock/HeaderNav2";

const Header = () => {
  return (
    <div className="headerContainer">
      <HeaderNav1 />
      <HeaderNav2 />
    </div>
  );
};

export default Header;
