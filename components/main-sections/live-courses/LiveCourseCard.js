/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const LiveCourseCard = () => {
  return (
    <div className="card bg-white m-1 rounded-4" id="live-course-card">
      <div className="card-body">
        <div
          className="row d-flex justify-content-start align-items-center py-3"
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
            class="badge bg-secondary bg-gradient text-light col-sm-3 py-2  mt-2 ms-2"
            style={{ fontSize: "0.6rem" }}
          >
            ব্যাচ ২৬
          </span>

          <span
            class="badge bg-secondary bg-gradient  text-light col-sm-4 py-2 mx-2 mt-2"
            style={{ fontSize: "0.6rem" }}
          >
            <i class="bi bi-people-fill pe-2 mb-2 "></i>২০ টি সিট বাকি
          </span>

          <span
            class="badge bg-secondary bg-gradient  text-light col-sm-3 py-2 pe-2 mt-2"
            style={{ fontSize: "0.6rem" }}
          >
            <i class="bi bi-clock pe-2 mb-2 "></i>৫ দিন বাকি
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
                className="buttonLearning btn btn-secondary rounded-top my-3 me-0"
                style={{ fontSize: ".7rem" }}
              >
                বিস্তারিত দেখি<i class="bi bi-arrow-right ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveCourseCard;
