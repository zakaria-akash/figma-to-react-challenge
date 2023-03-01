/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const LiveCourseCard = () => {
  return (
    <div className="card bg-white m-1 rounded-4" id="live-course-card">
      <div className="card-body">
        <div
          className="row d-flex justify-content-around align-items-center py-3"
          style={{ backgroundColor: "#1D2939" }}
        >
          <Image
            src="/images/body-sec-1/live-courses-pp.png"
            className="card-img-top col-sm-12"
            alt="exprt-career"
            width={520}
            height={200}
          />
          <span
            class="badge bg-transparent bg-gradient text-light col-sm-3 py-2  mt-2"
            style={{
              fontSize: "0.8rem",
              fontWeight: "lighter",
            }}
          >
            ব্যাচ ২৬
          </span>

          <span
            class="badge bg-secondary bg-gradient text-light col-sm-3 py-3 my-2"
            style={{
              fontSize: "0.6rem",
              height: "2.5rem",
              fontWeight: "lighter",
            }}
          >
            <i
              class="bi bi-people-fill me-1 mb-2"
              style={{ fontSize: "0.8rem" }}
            ></i>
            ২০ টি সিট বাকি
          </span>

          <span
            class="badge bg-secondary bg-gradient text-light col-sm-3 py-3"
            style={{
              fontSize: "0.65rem",
              height: "2.5rem",
              fontWeight: "lighter",
            }}
          >
            <i class="bi bi-stopwatch  mb-2" style={{ fontSize: "0.9rem" }}></i>
            <span className="ms-1">৫ দিন বাকি</span>
          </span>
        </div>
        <h5 className="card-title fs-5 fw-bold mt-3">
          SolidWorks with Keyshot
        </h5>

        <div className="container-fluid bg-light">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-sm-6 px-3">
              <p className="card-text fs-6 py-0 my-0 text-decoration-line-through text-warning fw-bold">
                3000
              </p>
              <p className="card-text fs-6 py-0 my-0 fw-bold">2000</p>
            </div>
            <div className="col-sm-6 px-3 d-grid gap-2">
              <button
                type="button"
                className="buttonLearning btn btn-secondary bg-gradient rounded-top my-3 me-0"
                style={{ fontSize: "0.7rem", fontWeight: "lighter" }}
              >
                বিস্তারিত দেখি
                <i class="bi bi-arrow-right ms-2 fs-6"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveCourseCard;
