import React, { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import Section from "../Section/Section";
import "./ProductPage.css";
import { CartContext } from "../CartContext";
import Footer from "../Footer/Footer";

const ProductPage = ({ productsArr }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <>
      <Section />
      <div className="productPageItem">
        <div className="ProductPage-image">
          <img
            src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
            alt="COlor"
          />
          <img
            src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
            alt="COlor"
          />
          <img
            src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
            alt="COlor"
          />
          <img
            src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
            alt="COlor"
          />
        </div>
        <div className="ProductPage-item">
          <h2>Colors</h2>
          <p>Price: ₹100</p>
          <button onClick={() => addToCart(productsArr)}>Add</button>
          <div>
            <h4>Rating</h4>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <h4>Reviews </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              blanditiis illum officiis vero voluptatem, dignissimos quam quo
              sunt nulla, possimus eaque aperiam officia, voluptates est.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
