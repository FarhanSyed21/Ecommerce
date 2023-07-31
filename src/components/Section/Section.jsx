import Header from "../Navbar/Header/Header";
import "./Section.css";

const Section = () => {
  return (
    <div className="section-container">
      <Header />
      <section className="main-section">
        <h1 className="section-heading">The Generics</h1>
      </section>
    </div>
  );
};

export default Section;
