import React, { Component, Fragment } from "react";
import HistoricalChart from "./HistoricalChart";

export class ChartCarousel extends Component {
  state = {
    slide: 0
  };

  updateSlide = num => {
    const { coins } = this.props;
    const coinsMaxIndex = coins.length - 1;
    const coinsMinIndex = 0;
    const newSlide = this.state.slide + num;
    if (newSlide >= coinsMinIndex && newSlide <= coinsMaxIndex) {
      this.setState({ slide: newSlide });
    }
    if (newSlide === coinsMaxIndex + 1) {
      this.setState({ slide: coinsMinIndex });
    }
    if (newSlide === coinsMinIndex - 1) {
      this.setState({ slide: coinsMaxIndex });
    }
  };

  render() {
    const { coins } = this.props;
    const { slide } = this.state;

    return (
      <Fragment>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          {coins &&
            coins.map(coin => (
              <div className="carousel-inner" key={coins.indexOf(coin)}>
                <div
                  className={`carousel-item ${
                    coins.indexOf(coin) === slide ? "active" : ""
                  }`}
                >
                  <HistoricalChart symbol={coin} />
                </div>
              </div>
            ))}
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
            onClick={() => this.updateSlide(-1)}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
            onClick={() => this.updateSlide(1)}
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
          </a>
        </div>
        <style jsx>{``}</style>
      </Fragment>
    );
  }
}
