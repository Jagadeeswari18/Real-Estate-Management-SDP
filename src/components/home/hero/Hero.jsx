import React from "react";
import { useHistory } from "react-router-dom";
import Heading from "../../common/Heading";
import "./hero.css";

const Hero = () => {
  const history = useHistory();

  const handleSearch = () => {
    history.push("/blog"); // replace '/blog' with the path to your Blog.jsx component
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading
            title="SEARCH YOUR BEST HOMES"
            subtitle="Find new & featured property located in your local city."
          />

          <form className="flex">
            <div className="box">
              <span>City/Street</span>
              <input type="text" placeholder="Location" />
            </div>
            <div className="box">
              <span>Property Type</span>
              <input type="text" placeholder="Property Type" />
            </div>
            <div className="box">
              <span>Price Range</span>
              <input type="text" placeholder="Price Range" />
            </div>
            <div className="box">
              <h4>Advance Filter</h4>
            </div>
            <button className="btn1" onClick={handleSearch}>
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;
