import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Menu from "../../src/menu.pdf";
const titleStyle = {
  fontFamily: "Kaushan Script",
  fontWeight: "bold",
  color: "#f2cc2e"
};
const navBarStyle = {
  fontSize: "20pt",
  color: "#FFFFFF",
  width: "110px"
};

const navbarTogglerStyle = {
  backgroundColor: "#FFFFFF"
};
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-dark py-0"
        style={{ zIndex: "1" }}
      >
        <NavLink style={titleStyle} className="px-2 navbar-brand" to="/">
          <h1>Jasmine Kitchen</h1>
        </NavLink>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={navbarTogglerStyle}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <center>
            <ul className="navbar-nav">
              <li className="nav-item active text-nowrap">
                <a
                  className="nav-link"
                  href={Menu}
                  style={navBarStyle}
                  target="_"
                >
                  Menu <span className="sr-only">(current)</span>
                </a>
              </li>

              <li className="nav-item active text-nowrap">
                <NavLink className="nav-link" to="/about" style={navBarStyle}>
                  About <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item active text-nowrap">
                <NavLink className="nav-link" to="/contact" style={navBarStyle}>
                  Contact <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item active text-nowrap">
                <a
                  className="nav-link"
                  href="https://www.ezcater.com/catering/pvt/jasmine-kitchen-1"
                  style={navBarStyle}
                  target="_"
                >
                  Catering <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active text-nowrap">
                <a
                  className="nav-link"
                  href="https://ordering.chownow.com/order/8192/locations#"
                  style={navBarStyle}
                  target="_"
                >
                  Order
                </a>
              </li>
            </ul>
          </center>
        </div>
      </nav>
    );
  }
}

export default Navbar;
