import Cart from "../../Cart/Cart";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../UserAuthContext";
import { useEffect, useState } from "react";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(true);
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

  const checkForInactivity = () => {
    const expireTime = localStorage.getItem("expireTime");
    if (expireTime && expireTime < Date.now()) {
      logOut();
      navigate("/");
      console.log("Log Out");
      setLoggedIn(false);
    }
  };

  const updateExpireTime = () => {
    const expireTime = Date.now() + 6000;
    localStorage.setItem("expireTime", expireTime);
  };

  useEffect(() => {
    updateExpireTime();
    const interval = setInterval(() => {
      checkForInactivity();
    }, 5000); // Check for inactivity every 5 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.addEventListener("click", updateExpireTime);
    window.addEventListener("keypress", updateExpireTime);
    window.addEventListener("scroll", updateExpireTime);
    window.addEventListener("mousemove", updateExpireTime);

    return () => {
      window.removeEventListener("click", updateExpireTime);
      window.removeEventListener("keypress", updateExpireTime);
      window.removeEventListener("scroll", updateExpireTime);
      window.removeEventListener("mousemove", updateExpireTime);
    };
  }, []);

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
