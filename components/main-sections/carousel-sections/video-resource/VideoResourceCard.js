/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const VideoResourceCard = () => {
  return (
    <div className="card bg-transparent my-0 py-0" style={{ width: "25rem" }}>
      <img
        src="/images/body-sec-1/ielts-listening-1.png"
        className="card-img-top rounded-top"
        alt="exprt-career"
      />
      <div className="card-body">
        <div className="card-title fw-bolder container-fluid bg-transparent">
          <div className="row">
            <div
              className="col-sm-12 text-secondary mb-3"
              style={{ fontSize: "1rem", fontWeight: "light" }}
            >
              Language Learning
            </div>
            <div className="col-sm-12 fs-6">
              IELTS Listening: 15 Days Challenge
            </div>
          </div>
        </div>

        <div className="container-fluid bg-transparent">
          <div className="row d-flex justify-content-between align-items-center">
            <div
              className="col-sm-4 text-secondary mb-3"
              style={{ fontSize: "0.8rem", fontWeight: "bold" }}
            >
              <i
                class="bi bi-stopwatch me-1"
                style={{ fontSize: "1.5rem" }}
              ></i>
              <span className="ms-1">60 min</span>
            </div>

            <div
              className="col-sm-8 text-secondary mb-3"
              style={{ fontSize: "0.8rem", fontWeight: "bold" }}
            >
              <i
                class="bi bi-calendar2-event me-1"
                style={{ fontSize: "1.5rem" }}
              ></i>
              <span className="ms-1">30 March, 2022</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoResourceCard;
