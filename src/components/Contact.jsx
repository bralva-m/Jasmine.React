import React, { Component } from "react";
const paragraphStyle = { margin: "0" };
const numberStyle = {
  textDecoration: "None",
  color: "red",
  margin: "0",
  padding: "0"
};

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

const iframeStyle = {
  width: "100%",
  height: "200px",
  border: "1px solid black"
};
class Contact extends Component {
  state = {};
  render() {
    return (
      <div style={verticalAlignStyle}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2257.7641813356954!2d-122.17931897270483!3d47.7048232289209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54900d7fa8dbc37d%3A0x65f25ade184f77b6!2sJasmine+Kitchen!5e0!3m2!1sen!2sus!4v1562981527417!5m2!1sen!2sus"
          frameborder="0"
          style={iframeStyle}
          title="Google lol"
        />
        <p className="font-weight-bold" style={paragraphStyle}>
          11613 124th Ave NE
          <br /> Kirkland, WA 98034
        </p>{" "}
        <h3 className="my-2">
          <a style={numberStyle} href="tel:4258208002">
            425-820-8002
          </a>
        </h3>
        <p className="font-weight-bold" style={paragraphStyle}>
          Sunday - Thursday: 10am-9pm
          <br />
          Friday - Saturday: 10am-10pm
        </p>
      </div>
    );
  }
}

export default Contact;
