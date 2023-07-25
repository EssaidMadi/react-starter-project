import React from "react";
import { Link } from "react-router-dom";
import star from "../../assets/star.png";
import heart from "../../assets/heart.png";

import "./gigCard.scss";

const GigCard = ({ item }) => {
  console.log(item);
  return (
    <Link to="/gig/123" className="link">
      <div className="gigcard">
        <img src={item.img} alt="" />
        <div className="top">
          <div className="user">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <div className="star">
            <img src={star} alt="" />
          </div>
        </div>
        <hr />
        <div className="bottom">
          <img src={heart} alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>${item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
