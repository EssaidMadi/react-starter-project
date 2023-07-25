import React, { useState } from "react";
import GigCard from "../../components/gigCard/GigCard";
import down from "../../assets/down.png";
import "./gigs.scss";
import { gigs } from "../../data";

const Gigs = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">FIVERR > GRAPHICS & DESIGN ></span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technologie with Fiverr's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right" onClick={() => setOpen(!open)}>
            <span>SortBy</span>
            <img className={open ? "dark" : ""} src={down} alt="" />
            {open && (
              <div className="rigthMenu">
                <span>Newest</span>
                <span>BestSelling</span>
              </div>
            )}
          </div>
        </div>
        <div className="card">
          {gigs.map((gig) => (
            <GigCard className="gig" item={gig} key={gig.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
