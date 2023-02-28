/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import React, { Fragment } from "react";

const Homepage = () => {
  let headTagForThisPage = (
    <Head>
      <title>OSTAD</title>
      <meta name="description" content="OSTAD APP || Home Page" />
    </Head>
  );
  return (
    <Fragment>
      {headTagForThisPage}
      <div className="container mt-3 rounded bg-transparent">
        <div className="row d-flex align-items-center border-bottom border-3 border-info">
          <div className="col-sm-12 col-md-8 mt-4 p-5 text-white">
            <h1>OSTAD APP</h1>
            <p className="text-dark fs-5 fw-normal">
              We are a team of passionate designers and developers who love
              building great digital products and experiences.
            </p>
          </div>
          <div className="col-sm-12 col-md-4 mt-4 p-5 text-white">Image</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Homepage;
