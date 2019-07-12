import React, { Component } from "react";
import tripAdvisorIcon from "../../src/ta.png";
import yelpIcon from "../../src/ye.png";
//import _1 from "../photos/1.jpg";
import _2 from "../photos/2.jpg";
import _3 from "../photos/3.jpg";
import _4 from "../photos/4.jpg";
import _5 from "../photos/5.jpg";
import _6 from "../photos/6.jpg";
import _7 from "../photos/7.jpg";
import _8 from "../photos/8.jpg";
import _9 from "../photos/9.jpg";
import _10 from "../photos/10.jpg";
import _11 from "../photos/11.jpg";
import _12 from "../photos/12.jpg";
import _13 from "../photos/13.jpg";

const carouselImageStyle = { maxWidth: "80%" };
const carouselStyle = {
  marginTop: "2%",
  marginBottom: "2%",
  top: "30%"
};
const carouselTextStyle = {
  background: "rgba(0,0,0,0.7)",
  textAlight: "center"
};

class Gallery extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <center>
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-ride="carousel"
            style={carouselStyle}
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleCaptions"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#carouselExampleCaptions" data-slide-to="1" />
              <li data-target="#carouselExampleCaptions" data-slide-to="2" />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={_2}
                  className="d-block w-100"
                  alt="..."
                  style={carouselImageStyle}
                />
                <div
                  className="carousel-caption d-none d-md-block"
                  style={carouselTextStyle}
                >
                  <h5>Second slide label</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={_3}
                  className="d-block w-100"
                  alt="..."
                  style={carouselImageStyle}
                />
                <div
                  className="carousel-caption d-none d-md-block"
                  style={carouselTextStyle}
                >
                  <h5>Third slide label</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={_4}
                  className="d-block w-100"
                  alt="..."
                  style={carouselImageStyle}
                />
                <div
                  className="carousel-caption d-none d-md-block"
                  style={carouselTextStyle}
                >
                  <h5>Third slide label</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={_5}
                  className="d-block w-100"
                  alt="..."
                  style={carouselImageStyle}
                />
                <div
                  className="carousel-caption d-none d-md-block"
                  style={carouselTextStyle}
                >
                  <h5>Third slide label</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={_6}
                  className="d-block w-100"
                  alt="..."
                  style={carouselImageStyle}
                />
                <div
                  className="carousel-caption d-none d-md-block"
                  style={carouselTextStyle}
                >
                  <h5>Third slide label</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={_7}
                  className="d-block w-100"
                  alt="..."
                  style={carouselImageStyle}
                />
                <div
                  className="carousel-caption d-none d-md-block"
                  style={carouselTextStyle}
                >
                  <h5>Third slide label</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={_8}
                  className="d-block w-100"
                  alt="..."
                  style={carouselImageStyle}
                />
                <div
                  className="carousel-caption d-none d-md-block"
                  style={carouselTextStyle}
                >
                  <h5>Third slide label</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={_9}
                  className="d-block w-100"
                  alt="..."
                  style={carouselImageStyle}
                />
                <div
                  className="carousel-caption d-none d-md-block"
                  style={carouselTextStyle}
                >
                  <h5>Third slide label</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={_10}
                  className="d-block w-100"
                  alt="..."
                  style={carouselImageStyle}
                />
                <div
                  className="carousel-caption d-none d-md-block"
                  style={carouselTextStyle}
                >
                  <h5>Third slide label</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={_11}
                  className="d-block w-100"
                  alt="..."
                  style={carouselImageStyle}
                />
                <div
                  className="carousel-caption d-none d-md-block"
                  style={carouselTextStyle}
                >
                  <h5>Third slide label</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={_12}
                  className="d-block w-100"
                  alt="..."
                  style={carouselImageStyle}
                />
                <div
                  className="carousel-caption d-none d-md-block"
                  style={carouselTextStyle}
                >
                  <h5>Third slide label</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={_13}
                  className="d-block w-100"
                  alt="..."
                  style={carouselImageStyle}
                />
                <div
                  className="carousel-caption d-none d-md-block"
                  style={carouselTextStyle}
                >
                  <h5>Third slide label</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </center>
      </React.Fragment>
    );
  }
}

export default Gallery;
