import React, { Component, Fragment } from "react";

export class Carousel extends Component {
  render() {
    return (
      <Fragment>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <p>Slide 1</p>
            </div>
            <div className="carousel-item">
              <p>Slide 1</p>
            </div>
            <div className="carousel-item">
              <p>Slide 1</p>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </Fragment>
    );
  }
}
