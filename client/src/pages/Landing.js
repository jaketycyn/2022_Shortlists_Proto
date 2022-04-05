import React from "react";
import Wrapper from "../assets/wrappers/LandingPage.js";

import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <div className="container page">
        <h1>Logo.JPG</h1>
        {/* info -1st column*/}
        <div className="info">
          <h1>Info Header</h1>

          <p>
            Bitters hashtag pinterest cold-pressed brooklyn, forage vice
            truffaut. Everyday carry semiotics subway tile succulents kinfolk,
            intelligentsia roof party DIY neutra tousled whatever. Before they
            sold out green juice drinking vinegar offal craft beer.
          </p>
          <Link to="/register" className="link-register">
            Login/Register
          </Link>
        </div>
        {/* image - 2nd column could opt for no image and center*/}
      </div>
    </Wrapper>
  );
};
export default Landing;
