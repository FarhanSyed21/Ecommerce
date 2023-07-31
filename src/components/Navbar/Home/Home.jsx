import { useState } from "react";
import Footer from "../../Footer/Footer";
import Section from "../../Section/Section";
import "./Home.css";

const Dummy_Data = [
  {
    Date: "JUL 16",
    Location: "DETROIT, MI",
    Venus: "DTE ENERGY MUSIC THEATRE"
  },
  {
    Date: "JUL 19",
    Location: "TORONTO,ON",
    Venus: "BUDWEISER STAGE"
  },
  {
    Date: "JUL 22",
    Location: "BRISTOW, VA",
    Venus: "JIGGY LUBE LIVE"
  },
  {
    Date: "JUL 29",
    Location: "PHOENIX, AZ",
    Venus: "AK-CHIN PAVILION"
  },
  {
    Date: "AUG 2",
    Location: "LAS VEGAS, NV",
    Venus: "T-MOBILE ARENA"
  },
  {
    Date: "AUG 7",
    Location: "CONCORD, CA",
    Venus: "CONCORD PAVILION"
  }
];
const Home = () => {
  const [data, setData] = useState(Dummy_Data);
  return (
    <div>
      <Section />
      <div className="container">
        <table>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.Date}</td>
                <td>{item.Location}</td>
                <td>{item.Venus}</td>
                <td>
                  <button>BUY TICKETS</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
