import React, { Component } from "react";
/*const verticalAlignStyle = {
  margin: "0",
  position: "absolute",
  top: "75%",
  left: "75%",
  transform: "translate(-50%, -50%)",
  border: "1px solid black",
  padding: "20px",
  borderRadius: "5px",
  background: "lightgrey"
};*/

const verticalAlignStyle = {
  background: "rgba(255,255,255,0.8)",
  marginLeft: "-5%",
  marginRight: "-5%",
  top: "20%",
  left: "20%",
  right: "20%",
  position: "absolute",
  padding: "20px",
  borderRadius: "5px",
  border: "1px solid black",
  textAlign: "center"
};
const homepageMainTextStyle = {
  fontWeight: "bold",
  color: "#d94949",
  textShadow:
    "-1px -1px 0 #000, 2px -1px 0 #000, -1px 2px 0 #000, 2px 2px 0 #000",
  fontSize: "42pt"
};

class Home extends Component {
  state = {};
  render() {
    return (
      <center>
        <div style={verticalAlignStyle}>
          <h1 style={homepageMainTextStyle}>
            Healthy, Halal, Simply Delicious.
          </h1>
          Opened in January 2016, Jasmine Kitchen serves food that represents
          people from countries around the Mediteranean sea. It is a unique
          restaurant that serves delicious, authentic mediteranean food and
          drink.
        </div>
      </center>
    );
  }
}

export default Home;
