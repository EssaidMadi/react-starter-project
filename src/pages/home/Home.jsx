import React from "react";
import { Link } from "react-router-dom";
import Features from "../../components/features/Features";
import Slide from "../../components/slide/Slide";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import { cards } from "../../data";
import check from "../../assets/check.png";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Features />
      <TrustedBy />
      <Link to="gigs?cat=design">
        <Slide data={cards} slidesPerView={5} />
      </Link>

      <div className="featuress">
        <div className="container">
          <div className="left">
            <h1>Tout un monde de talents freelance à votre portée</h1>
            <div className="items">
              <div className="item">
                <img src={check} alt="" />
                <h6>Des services de qualité pour tous les budgets</h6>
              </div>
              <p>
                Trouvez des services de haute qualité à tous les prix. Pas de
                tarifs horaires, mais une tarification en fonction des projets.
              </p>
            </div>
            <div className="items">
              <div className="item">
                <img src={check} alt="" />
                <h6>Des services de qualité pour tous les budgets</h6>
              </div>
              <p>
                Trouvez des services de haute qualité à tous les prix. Pas de
                tarifs horaires, mais une tarification en fonction des projets.
              </p>
            </div>
            <div className="items">
              <div className="item">
                <img src={check} alt="" />
                <h6>Des services de qualité pour tous les budgets</h6>
              </div>
              <p>
                Trouvez des services de haute qualité à tous les prix. Pas de
                tarifs horaires, mais une tarification en fonction des projets.
              </p>
            </div>
          </div>
          <div className="right">
            <img
              className="video"
              alt="Video teaser image"
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
              loading="auto"
            ></img>
          </div>
        </div>
      </div>

      <div className="market">
        <div className="container">
          <h1>Explore the marketplace</h1>
          <div className="items__market">
            <div className="item_market">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt="Graphics &amp; Design"
                loading="lazy"
              ></img>
              <hr />
              <span>Graphics & Design</span>
            </div>

            <div className="item_market">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt="Graphics &amp; Design"
                loading="lazy"
              ></img>
              <hr />
              <span>Graphics & Design</span>
            </div>

            <div className="item_market">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt="Graphics &amp; Design"
                loading="lazy"
              ></img>
              <hr />
              <span>Graphics & Design</span>
            </div>

            <div className="item_market">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt="Graphics &amp; Design"
                loading="lazy"
              ></img>
              <hr />
              <span>Graphics & Design</span>
            </div>

            <div className="item_market">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt="Graphics &amp; Design"
                loading="lazy"
              ></img>
              <hr />
              <span>Graphics & Design</span>
            </div>

            <div className="item_market">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt="Graphics &amp; Design"
                loading="lazy"
              ></img>
              <hr />
              <span>Graphics & Design</span>
            </div>

            <div className="item_market">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt="Graphics &amp; Design"
                loading="lazy"
              ></img>
              <hr />
              <span>Graphics & Design</span>
            </div>

            <div className="item_market">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt="Graphics &amp; Design"
                loading="lazy"
              ></img>
              <hr />
              <span>Graphics & Design</span>
            </div>

            <div className="item_market">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt="Graphics &amp; Design"
                loading="lazy"
              ></img>
              <hr />
              <span>Graphics & Design</span>
            </div>

            <div className="item_market">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt="Graphics &amp; Design"
                loading="lazy"
              ></img>
              <hr />
              <span>Graphics & Design</span>
            </div>
          </div>
        </div>
      </div>

      <div className="featuress dark">
        <div className="container">
          <div className="left">
            <h2>fiverr business.</h2>
            <h1>
              A business solution designed for
              <i> teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="items">
              <div className="item">
                <img src={check} alt="" />
                <h6>Connect to freelancers with proven business experience</h6>
              </div>
            </div>
            <div className="items">
              <div className="item">
                <img src={check} alt="" />
                <h6>
                  Get matched with the perfect talent by a customer success
                  manager
                </h6>
              </div>
            </div>
            <div className="items">
              <div className="item">
                <img src={check} alt="" />
                <h6>
                  Manage teamwork and boost productivity with one powerful
                  workspace
                </h6>
              </div>
            </div>
          </div>
          <div className="right ">
            <img
              alt="Fiverr Business freelancers"
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
