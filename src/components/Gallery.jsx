import React, { Component } from "react";
import tripAdvisorIcon from "../../src/ta.png";
import yelpIcon from "../../src/ye.png";
import _1 from "../photos/1.jpg";
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

const carouselImageStyle = {
  maxHeight: "75vh",
  objectFit: "contain"
};
const carouselStyle = {
  marginTop: "6vh",
  marginBottom: "6vh",
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
              <li data-target="#carouselExampleCaptions" data-slide-to="0" />
              <li data-target="#carouselExampleCaptions" data-slide-to="1" />
              <li data-target="#carouselExampleCaptions" data-slide-to="2" />
              <li data-target="#carouselExampleCaptions" data-slide-to="3" />
              <li data-target="#carouselExampleCaptions" data-slide-to="4" />
              <li data-target="#carouselExampleCaptions" data-slide-to="5" />
              <li data-target="#carouselExampleCaptions" data-slide-to="6" />
              <li data-target="#carouselExampleCaptions" data-slide-to="7" />
              <li data-target="#carouselExampleCaptions" data-slide-to="8" />
              <li data-target="#carouselExampleCaptions" data-slide-to="9" />
              <li data-target="#carouselExampleCaptions" data-slide-to="10" />
              <li data-target="#carouselExampleCaptions" data-slide-to="11" />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={_1}
                  className="d-block w-100"
                  alt="..."
                  style={carouselImageStyle}
                />
                <div
                  className="carousel-caption d-none d-md-block"
                  style={carouselTextStyle}
                >
                  <h5>Lamb Shawarma Plate</h5>
                  <p>
                    Classic Lamb Gyro slices with grilled onions and Tzatziki
                    sauce, served with hummus, rice, pita bread, and salad.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
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
                  <h5>Half Chicken Plate</h5>
                  <p>
                    Half chicken with rice /fries, 2 pitas, fries 1 garlic
                    sauce.
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
                  <h5>Beef & Lamb Gyro Sandwich</h5>
                  <p>
                    Lamb & Beef Gyro, seared on a gas flame, wrapped with
                    lettuce, tomatoes, onions, feta cheese, and traditional
                    tzatziki sauce, in warm Greek flatbread.
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
                  <h5>Beef & Lamb Gyro Plate</h5>
                  <p>
                    Classic beef and Lamb Gyro slices with grilled onions and
                    Tzatziki sauce, served with hummus, rice, pita bread, and
                    salad.
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
                  <h5>Beef & Lamb Gyro Salad</h5>
                  <p>
                    Beef & lamb Gyro slices, lettuce, onions, tomatoes,
                    cucumbers, olive oil, feta cheese, & Mediterranean
                    vinaigrette
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
                  <h5>Chicken Shawarma Salad</h5>
                  <p>
                    Chicken Shawarma slices over lettuce, tomatoes, onions,
                    cucumbers, virgin olive oil and spices, & Mediterranean
                    vinaigrette.
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
                  <h5>Greek Fries</h5>
                  <p>
                    Delicious fries topped with house-made garlic sauce, feta
                    cheese, olive oil, and sumac.
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
                  <h5>Beef & Lamb Gyro aside some Greek Fries</h5>
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
                  <h5>Mediterranean Falafel Plate (Vegetarian)</h5>
                  <p>
                    Falafel pieces and Tahini sauce over rice, with hummus, pita
                    bread, and salad.
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
                  <h5>Classic Baklava</h5>
                  <p>
                    A delicious pastry dessert originating in the Middle East
                    made from a thin, layered dough filled with chopped nuts and
                    infused with honey.
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
                  <h5>Chocolate Roll Baklava</h5>
                  <p>Baklava in roll form with a chocolate twist!</p>
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
                  <h5>Chocolate Roll Baklava</h5>
                  <p>Baklava in roll form with a chocolate twist!</p>
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
          <a
            href="https://www.tripadvisor.com/Restaurant_Review-g58541-d10023726-Reviews-Jasmine_Mediteranean_Kitchen-Kirkland_Washington.html"
            target="_"
          >
            <img
              src={tripAdvisorIcon}
              width="80"
              height="80"
              alt="Our TripAdvisor page!"
            />
          </a>{" "}
          <a
            href="https://www.yelp.com/biz/jasmine-kitchen-kirkland"
            target="_"
          >
            <img src={yelpIcon} width="80" height="80" alt="Our Yelp page!" />
          </a>
          <p className="font-weight-bold">
            More images on Yelp and TripAdvisor!
          </p>
        </center>
      </React.Fragment>
    );
  }
}

export default Gallery;
