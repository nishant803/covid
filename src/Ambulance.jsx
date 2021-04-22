import React from "react";
import "./Ambulance.css";
export default function Ambulance() {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.M9AsZ7Sm6Qq-LXpY92Tt2AHaEK&pid=Api&rs=1&c=1&qlt=95&w=163&h=91"
            class="d-block w-50"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.vzUhlFJFR5akQnwy8tWSvAHaF7&pid=Api&rs=1&c=1&qlt=95&w=114&h=91"
            class="d-block w-50"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.3ljDRSWOyQ5Va_tDg9PNDgHaEK&pid=Api&rs=1&c=1&qlt=95&w=163&h=91"
            class="d-block w-50"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span clasNames="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
