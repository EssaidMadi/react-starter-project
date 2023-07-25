import React from "react";
import profile from "../../assets/mman.png";
import search from "../../assets/search.png";
import "./features.scss";

const Features = () => {
  return (
    <div className="features">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <i>freelance</i>
            <br />
            <span>services for your business</span>
          </h1>
          <div className="middel">
            <input
              type="text"
              placeholder="What Services do you look for today?"
            />
            <button className="search">Search</button>
          </div>
          <div className="suggestion">
            <span>Popular:</span>
            <button>Website Design </button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src={profile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Features;
