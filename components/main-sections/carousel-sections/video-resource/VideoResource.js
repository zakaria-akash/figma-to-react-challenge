import Image from "next/image";
import React from "react";
import { Carousel, Stack } from "react-bootstrap";

import VideoResourceCard from "./VideoResourceCard";

const VideoResource = (props) => {
  return (
    <div className="carousel2 py-5 mx-auto my-5 section-holder-div">
      <div className="container-fluid bg-transparent ">
        <div className="row">
          <div className="section-title col-sm-12 d-flex justify-content-start align-items-center py-3">
            <div className="container-fluid bg-transparent ">
              <div className="row">
                <h2 className="fw-bolder fs-3 col-sm-12 text-dark">
                  <span
                    className="section-title-icon"
                    style={{ marginLeft: "2rem", marginRight: "1rem" }}
                  >
                    <Image
                      src="/images/body-sec-1/paly-icon.png"
                      width={40}
                      height={40}
                      alt="book-open-icon"
                    />
                  </span>
                  ফ্রি ভিডিও রিসোর্স
                </h2>
                <h5
                  className="fw-light fs-6 col-sm-12 text-dark"
                  style={{ marginLeft: "2rem", marginRight: "1rem" }}
                >
                  স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন
                  নিচের বাটনে।
                </h5>
              </div>
            </div>
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
                    <VideoResourceCard />
                    <VideoResourceCard />
                    <VideoResourceCard />
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

export default VideoResource;
