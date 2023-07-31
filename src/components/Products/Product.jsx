import { useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Section from "../Section/Section";
import { CartContext } from "../CartContext";
import "./Product.css";

const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
  },
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
  },
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
  },
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
  }
];

const Product = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <Section />
      <div className="product-container">
        <div className="product-item">
          <h2>{productsArr[0].title}</h2>
          <div className="image">
            <img src={productsArr[0].imageUrl} alt={productsArr[0].title} />
          </div>
          <h4>Price: ₹{productsArr[0].price}</h4>
          <button onClick={() => addToCart(productsArr[0])}>Buy</button>
          <button>
            <Link
              style={{ "text-decoration": "none", color: "white" }}
              to="/product"
            >
              View Product
            </Link>
          </button>
        </div>

        <div className="product-item">
          <h2>{productsArr[1].title}</h2>
          <div className="image">
            <img src={productsArr[1].imageUrl} alt={productsArr[1].title} />
          </div>
          <h4>Price: ₹{productsArr[1].price}</h4>
          <button onClick={() => addToCart(productsArr[1])}>Buy</button>
          <button>
            <Link
              style={{ "text-decoration": "none", color: "white" }}
              to="/product"
            >
              View Product
            </Link>
          </button>
        </div>

        <div className="product-item">
          <h2>{productsArr[2].title}</h2>
          <div className="image">
            <img src={productsArr[2].imageUrl} alt={productsArr[2].title} />
          </div>
          <h4>Price: ₹{productsArr[2].price}</h4>
          <button onClick={() => addToCart(productsArr[2])}>Buy</button>
          <button>
            <Link
              style={{ "text-decoration": "none", color: "white" }}
              to="/product"
            >
              View Product
            </Link>
          </button>
        </div>

        <div className="product-item">
          <h2>{productsArr[3].title}</h2>
          <div className="image">
            <img src={productsArr[3].imageUrl} alt={productsArr[3].title} />
          </div>
          <h4>Price: ₹{productsArr[3].price}</h4>
          <button onClick={() => addToCart(productsArr[3])}>Buy</button>
          <button>
            <Link
              style={{ "text-decoration": "none", color: "white" }}
              to="/product"
            >
              View Product
            </Link>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
