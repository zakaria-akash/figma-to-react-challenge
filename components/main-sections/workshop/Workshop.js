import Image from "next/image";
import React from "react";

import LiveCourseCard from "../live-courses/LiveCourseCard";

const WorkshopsList = (props) => {
  return (
    <div>
      <div className="container bg-light mt-2">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="section-title col-sm-12 py-3">
            <div className="fw-bolder fs-3 col-sm-12">
              <span className="section-title-icon pb-2 pe-2">
                <Image
                  src="/images/body-sec-1/workshop-icon.png"
                  width={40}
                  height={40}
                  alt="book-open-icon"
                />
              </span>
              ওয়ার্কশপ
            </div>
          </div>
          {props.IterationsVar.map((item) => {
            return (
              <div key={item._id} className="col-sm-12 col-md-4 my-0 py-0">
                <LiveCourseCard />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkshopsList;
