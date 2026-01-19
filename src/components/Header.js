import { LOGO_URL } from "../utils/constants";
import { CART_ICON } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          className="img-logo"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>
            Cart{" "}
            <img src={CART_ICON} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;