import React, { useState, useEffect } from "react";
import search from "../../assets/search.png";
import user from "../../assets/noavatar.jpg";
import "./navBar.scss";
import { Link, NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const CurrentUser = {
    id: 1,
    username: "Essaid Madi",
    isSeller: true,
  };
  return (
    <div className={active || pathname !== "/" ? "navBar active" : "navBar"}>
      <div className="nav">
        <NavLink to="/">
          <div className="left">
            <span>Fiverr</span>
            <span className="dot">.</span>
          </div>
        </NavLink>
        {active && (
          <div className="middel">
            <input
              type="text"
              placeholder="What Services do you look for today?"
            />
            <button>
              <img src={search} alt="" />
            </button>
          </div>
        )}
        <div className="right">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          {!CurrentUser && <span>Sign in</span>}
          {!CurrentUser.isSeller && <span>Become a Seller</span>}
          {!CurrentUser && <button>Join</button>}
          {CurrentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={user} alt="" />
              <span>{CurrentUser.username}</span>
              {open && (
                <div className="option">
                  <Link className="link" to="/mygigs">
                    Gigs
                  </Link>
                  <Link className="link" to="/add">
                    Add New Gig
                  </Link>
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" to="/">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {active && (
        <>
          <hr />
          <div className="menu">
            <Link className="link" to="/">
              Graphics & Design
            </Link>
            <Link className="link" to="/">
              Digital Marketing
            </Link>
            <Link className="link" to="/">
              Writing & Translation
            </Link>
            <Link className="link" to="/">
              Video & Animation
            </Link>
            <Link className="link" to="/">
              Music & Audio
            </Link>
            <Link className="link" to="/">
              Programming & Tech
            </Link>
            <Link className="link" to="/">
              Business
            </Link>
            <Link className="link" to="/">
              Lifestyle
            </Link>
            <Link className="link" to="/">
              AI Services
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;
