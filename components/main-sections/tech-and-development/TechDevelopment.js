import Image from "next/image";
import React from "react";

import styleClasses from "./TechDevelopment.module.css";

const TechDevelopment = () => {
  return (
    <div className="section-holder-div">
      <div
        className={`container-fluid bg-transparent ${styleClasses.sectionBackground}`}
      >
        <div className="row d-flex justify-content-start align-items-center">
          <div className="col-sm-12 col-md-2">
            <div className="container-fluid bg-transparent">
              <div className="row d-flex justify-content-start align-items-center">
                <div className="col-md-12 col-lg-6"></div>
                <div className="col-md-12 col-lg-6">
                  <Image
                    src="/images/body-sec-1/pc.svg"
                    alt="pc-icon"
                    width={150}
                    height={150}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-10">
            <div className="container-fluid bg-transparent">
              <div className="row d-flex justify-content-start align-items-center">
                <h2 className="fw-bolder col-12 pt-2 pb-2">
                  Tech and development
                </h2>
                <p className="fs-6 fw-lighter col-sm-12 col-md-8 pt-2 pb-2">
                  স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন
                  নিচের বাটনে। স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের
                  সাথে, ক্লিক করুন নিচের বাটনে। ৭টি লাইভ কোর্স
                </p>
                <div className="col-sm-12  pt-2 pb-2 fw-bolder">
                  <span className="badge bg-light bg-gradient text-dark m-3">
                    <i className="bi bi-archive pe-2 fs-5"></i>৭টি লাইভ কোর্স
                  </span>
                  <span className="badge bg-light bg-gradient text-dark m-3">
                    <i className="bi bi-people-fill ps-2 pe-2 fs-5"></i>১৪২৪৫ জন
                    Ostad গ্র্যাজুয়েট
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-1"></div>
          <div className="col-sm-12 col-md-4 p-0 m-0">
            <div className="container-fluid bg-transparent">
              <div className="row d-flex justify-content-start">
                <div className="col-md-12 col-lg-4"></div>
                <div className="col-md-12 col-lg-8 d-grid gap-2">
                  <button
                    type="button"
                    className="buttonLearning btn btn-warning rounded-top rounded-bottom rounded-start rounded-start my-3 me-0 fs-5"
                  >
                    START LEARNING<i className="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="container-fluid bg-transparent p-0 m-0">
              <div className="row d-flex justify-content-start p-0 m-0">
                <div className="col-md-12 col-lg-8 d-grid gap-2">
                  <button
                    type="button"
                    className="buttonAssessment btn btn-light border border-dark rounded-top rounded-bottom rounded-start rounded-start my-3 ms-0 fs-5"
                  >
                    ASSESMENT
                  </button>
                </div>
                <div className="col-md-12 col-lg-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechDevelopment;
