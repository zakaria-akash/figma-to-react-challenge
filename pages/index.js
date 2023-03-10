/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import React, { Fragment } from "react";

import TechDevelopment from "@/components/main-sections/tech-and-development/TechDevelopment";
import ExprtCrGuide from "@/components/main-sections/carousel-sections/expert-career-guideline/ExprtCrGuide";
import LiveCoursesList from "@/components/main-sections/live-courses/LiveCoursesList";
import WorkshopsList from "@/components/main-sections/workshop/Workshop";
import VideoResource from "@/components/main-sections/carousel-sections/video-resource/VideoResource";
import MainHeader from "@/components/layout/MainHeader";

const Homepage = () => {
  const IterationsVar = [
    { _id: 1, text: "abc" },
    { _id: 2, text: "def" },
    { _id: 3, text: "ghi" },
    { _id: 4, text: "jkl" },
    { _id: 5, text: "mno" },
    { _id: 6, text: "pqr" },
    { _id: 7, text: "stu" },
    { _id: 8, text: "vwx" },
    { _id: 9, text: "yza" },
  ];
  let headTagForThisPage = (
    <Head>
      <title>OSTAD</title>
      <meta name="description" content="OSTAD APP || Home Page" />
    </Head>
  );
  return (
    <Fragment>
      {headTagForThisPage}
      <div className="all-sections-holder">
        <TechDevelopment />
        <ExprtCrGuide IterationsVar={IterationsVar} />
        <div className="section-holder-div">
          <div className="container-fluid bg-transparent ">
            <div className="row d-flex justify-content-start align-items-center">
              <div className="section-title fw-bolder fs-3 col-sm-12 py-3">
                <span
                  className="book-open-icon"
                  style={{ marginLeft: "7rem", marginRight: "1rem" }}
                >
                  <Image
                    src="/images/body-sec-1/flag-icon.png"
                    width={50}
                    height={50}
                    alt="book-open-icon"
                  />
                </span>
                Ostad helps you in your career with
              </div>
              <div className="col-sm-12 col-md-1"></div>
              <div className="fw-lighter fs-6 col-sm-12 col-md-8 text-dark">
                ??????????????? ?????????????????? ???????????? ??????????????? ???????????? ????????????????????????????????????????????? ????????????, ??????????????? ????????????
                ??????????????? ??????????????????
              </div>
            </div>
          </div>
        </div>
        <LiveCoursesList IterationsVar={IterationsVar} />
        <WorkshopsList IterationsVar={IterationsVar} />
        <VideoResource IterationsVar={IterationsVar} />
      </div>
    </Fragment>
  );
};

export default Homepage;
