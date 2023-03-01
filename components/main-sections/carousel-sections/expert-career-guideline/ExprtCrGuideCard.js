/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const ExprtCrGuideCard = () => {
  return (
    <div className="card bg-transparent my-0 py-0" style={{ width: "20rem" }}>
      <img
        src="/images/body-sec-1/exprt-career-card.jpg"
        className="card-img-top"
        alt="exprt-career"
        style={{ borderRadius: "2%" }}
      />
      <div className="card-body text-light">
        <h5 className="card-title fs-6 border-bottom border-1 border-secondary pb-2">
          <i class="bi bi-play-circle mx-2 mb-2 fs-4"></i>ক্যারিয়ার করুন ওয়েব
          ডিজাইনে
        </h5>

        <div className="container-fluid bg-transparent">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-sm-2">
              <Image
                src="/images/body-sec-1/exprt-career-card_pp.jpg"
                alt="course-instructor"
                width={40}
                height={40}
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="col-sm-10 px-3">
              <h5 className="card-text fs-6 py-0 my-0">Instructor name</h5>
              <p className="card-text fs-6 py-0 my-0">Expertise field name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExprtCrGuideCard;
