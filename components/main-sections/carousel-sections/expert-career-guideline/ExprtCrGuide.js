import Image from "next/image";
import React from "react";
import { Carousel, Card, Stack, Button } from "react-bootstrap";

import ExprtCrGuideCard from "./ExprtCrGuideCard";

const ExprtCrGuide = (props) => {
  return (
    <div
      className="carousel1 py-5 mx-auto"
      style={{ width: "100%", height: "100%" }}
    >
      <div className="container-fluid bg-transparent ">
        <div className="row">
          <div className="section-title col-sm-12 d-flex justify-content-start align-items-center py-3 ms-5">
            <h2 className="fw-bolder fs-3 col-12 text-light">
              <span
                className="section-title-icon"
                style={{ marginLeft: "7rem", marginRight: "1rem" }}
              >
                <Image
                  src="/images/body-sec-1/book-open-icon.png"
                  width={40}
                  height={40}
                  alt="book-open-icon"
                />
              </span>
              এক্সপার্টদের ক্যারিয়ার গাইডলাইন
            </h2>
          </div>
          <div className="col-sm-12 my-0 py-0">
            <Carousel style={{ height: "100%" }}>
              {props.IterationsVar.map((item, index) => (
                <Carousel.Item style={{ height: "100%" }} key={item._id}>
                  <Stack
                    direction="horizontal"
                    id="carousel_stack1"
                    className="h-60 d-flex justify-content-center align-items-center"
                    gap={3}
                  >
                    <ExprtCrGuideCard />
                    <ExprtCrGuideCard />
                    <ExprtCrGuideCard />
                  </Stack>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExprtCrGuide;
