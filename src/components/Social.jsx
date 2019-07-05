import React, { Component } from "react";
import facebookIcon from "../../src/fb.png";
import instagramIcon from "../../src/ig.png";
import tripAdvisorIcon from "../../src/ta.png";
import yelpIcon from "../../src/ye.png";
import twitterIcon from "../../src/tw.png";
import googleMapsIcon from "../../src/googlemaps.png";
import phoneIcon from "../../src/phone.png";
const socialStyle = {
  backgroundColor: "#000000",
  color: "#FFFFFF",
  textAlign: "right",
  zIndex: "1"
};
const linkStyle = { textDecoration: "None", color: "white" };
class Social extends Component {
  state = {};
  render() {
    return (
      <div style={socialStyle}>
        <a href="https://www.facebook.com" target="_">
          <img
            src={facebookIcon}
            width="35"
            height="35"
            alt="Our Facebook page!"
          />
        </a>
        <a href="https://www.instagram.com" target="_">
          <img
            src={instagramIcon}
            width="35"
            height="35"
            alt="Our Instagram page!"
          />
        </a>
        <a
          href="https://www.tripadvisor.com/Restaurant_Review-g58541-d10023726-Reviews-Jasmine_Mediteranean_Kitchen-Kirkland_Washington.html"
          target="_"
        >
          <img
            src={tripAdvisorIcon}
            width="35"
            height="35"
            alt="Our TripAdvisor page!"
          />
        </a>
        <a href="https://www.yelp.com/biz/jasmine-kitchen-kirkland" target="_">
          <img src={yelpIcon} width="35" height="35" alt="Our Yelp page!" />
        </a>
        <a href="https://www.twitter.com">
          <img
            src={twitterIcon}
            width="35"
            height="35"
            alt="Our Twitter page!"
          />
        </a>
        <a style={linkStyle} href="tel:4258208002">
          <img src={phoneIcon} width="35" height="35" alt="425-820-8002" />
        </a>
        <a
          style={linkStyle}
          href="https://goo.gl/maps/3x71qezDyRsR5uYC9"
          target="_"
        >
          <img
            src={googleMapsIcon}
            width="35"
            height="35"
            alt="11613 124th Ave NE, Kirkland, WA"
          />
        </a>
      </div>
    );
  }
}

export default Social;
