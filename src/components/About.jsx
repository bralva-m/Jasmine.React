import React, { Component } from "react";

const aboutTextStyle = {
  background: "rgba(255,255,255,0.8)",
  marginTop: "7vh",
  borderRadius: "5px",
  border: "1px solid black",
  maxWidth: "90%",
  marginLeft: "10%",
  marginRight: "10%",
  textAlign: "left"
};

const imageStyle = {
  float: "left",
  margin: "15px",
  maxWidth: "20vh"
};

class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div style={aboutTextStyle}>
          <h2>
            Opened in January 2016, Jasmine Kitchen serves food that represents
            people from countries around the Mediteranean sea. It is a unique
            restaurant that serves delicious, authentic mediteranean food and
            drink.
          </h2>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
