import Cart from "../../Cart/Cart";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../UserAuthContext";

const Header = () => {
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
      console.log("LogOut");
    } catch (err) {
      console.log(err.message);
    }
  };
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1
    }
  ];
  return (
    <div className="main">
      <div className="h2">
        <h2>
          <Link
            style={{ "text-decoration": "none", color: "white" }}
            to="/home"
          >
            HOME
          </Link>
        </h2>
        <h2>
          <Link
            style={{ "text-decoration": "none", color: "white" }}
            to="/store"
          >
            STORE
          </Link>
        </h2>
        <h2>
          <Link
            style={{ "text-decoration": "none", color: "white" }}
            to="/about"
          >
            ABOUT
          </Link>
        </h2>
        <h2>
          <Link
            style={{ "text-decoration": "none", color: "white" }}
            to="/contact"
          >
            CONTACT
          </Link>
        </h2>
        <h2>
          <button onClick={handleLogOut}>Log Out</button>
        </h2>
      </div>
      <div className="cart">
        <Cart cartElements={cartElements} />
      </div>
    </div>
  );
};

export default Header;
