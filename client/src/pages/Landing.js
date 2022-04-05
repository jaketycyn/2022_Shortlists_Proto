import React from "react";
import {
  CardButton,
  CardFieldset,
  CardLink,
  Wrapper,
} from "../display/styled/LandingPage.js";

import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <h1>Logo.JPG</h1>
      {/* info -1st column*/}
      <div className="info">
        <h1>Info Header</h1>

        <p>
          Bitters hashtag pinterest cold-pressed brooklyn, forage vice truffaut.
          Everyday carry semiotics subway tile succulents kinfolk,
          intelligentsia roof party DIY neutra tousled whatever. Before they
          sold out green juice drinking vinegar offal craft beer.
        </p>
        <CardFieldset>
          <CardButton>
            <CardLink to="/register">Login/Register</CardLink>
          </CardButton>
        </CardFieldset>
      </div>
      {/* image - 2nd column could opt for no image and center*/}
    </Wrapper>
  );
};
export default Landing;
