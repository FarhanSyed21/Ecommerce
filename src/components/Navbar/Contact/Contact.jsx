import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import Section from "../../Section/Section";
import Footer from "../../Footer/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const firebaseUrl =
      "https://api-calls-70500-default-rtdb.firebaseio.com/userDetails.json";

    axios
      .post(firebaseUrl, formData)
      .then((response) => {
        console.log("Data successfully stored in Firebase:", response.data);

        setFormData({
          name: "",
          email: "",
          phone: ""
        });
      })
      .catch((error) => {
        console.error("Error storing data in Firebase:", error);
      });
  };

  return (
    <>
      <Section />
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="contact-input"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="email">Email Id</label>
          <input
            type="text"
            id="email"
            className="contact-input"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="phone">Phone No.</label>
          <input
            type="number"
            id="phone"
            className="contact-input"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <button type="submit" className="contact-btn">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
