import React from "react";
import { Link } from "react-router-dom";

// image import
import Tiles from "../assets/image/islamic-tiles-thumb.jpg";
import P4 from "../assets/image/p4.jpg";
import Alibaba from "../assets/image/ali-baba-thumb.jpg";
import LeeAnn from "../assets/image/lee-ann-thumb.jpg";
import WaterPrint from "../assets/image/water-print.jpg";
import YorkRegion from "../assets/image/york-region.jpg";
import Venture from "../assets/image/venture-thumb.jpg";
import VentureLogo from "../assets/image/venture-logo-thumb.jpg";

const Portfolio = () => {
  return (
    <>
      <div className="row">
        <div className="leftcolumn">
          <div className="row">
            <Link to={"/"}>
              <img
                className="portfolio__image"
                src={Tiles}
                alt="project__Image1"
              />
            </Link>
            <Link to={"/"}>
              <img
                className="portfolio__image"
                src={P4}
                alt="project__Image2"
              />
            </Link>

            <Link to={"/"}>
              <img
                className="portfolio__image"
                src={Alibaba}
                alt="project__Image3"
              />
            </Link>
            <Link to={"/"}>
              <img
                className="portfolio__image"
                src={LeeAnn}
                alt="project__Image4"
              />
            </Link>

            <Link to={"/"}>
              <img
                className="portfolio__image"
                src={WaterPrint}
                alt="project__Image5"
              />
            </Link>
            <Link to={"/"}>
              <img
                className="portfolio__image"
                src={YorkRegion}
                alt="project__Image6"
              />
            </Link>

            <Link to={"/"}>
              <img
                className="portfolio__image"
                src={Venture}
                alt="project__Image7"
              />
            </Link>
            <Link to={"/"}>
              <img
                className="portfolio__image"
                src={VentureLogo}
                alt="project__Image8"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
