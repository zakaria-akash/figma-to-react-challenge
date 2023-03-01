/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const MainHeader = () => {
  return (
    <Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-light fw-bold fs-7"
        style={{ height: 80, zIndex: 1000 }}
      >
        <div className="container-fluid d-flex justify-content-between">
          <div className="ps-2 pt-3 pb-3 fs-4">
            <Link
              className="navbar-brand fs-3 d-flex justify-content-start"
              href="/"
            >
              <img
                src="/images/header/ostad-app-logo.png"
                alt="logo"
                width="50"
                height="50"
              />{" "}
              <p className="pt-2 ps-2"> OSTAD</p>
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="ps-2 pb-3">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown ps-4 pe-4">
                  <a
                    className="nav-link active dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    সেট ইয়োর গোল
                  </a>
                  <ul
                    className="dropdown-menu fw-bold pb-0"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item border-bottom border-dark"
                        href="/"
                      >
                        গোল-১
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item border-bottom border-dark"
                        href="/"
                      >
                        গোল-২
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item border-bottom border-dark"
                        href="/"
                      >
                        গোল-৩
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item border-bottom border-dark"
                        href="/"
                      >
                        গোল-৪
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item ps-4 pe-4">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="/"
                  >
                    আপকামিং লাইভ ব্যাচ
                  </Link>
                </li>
                <li className="nav-item ps-4 pe-4">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="/"
                  >
                    <Image
                      src="/images/header/uk-logo.png"
                      alt="uk-flag"
                      width="20"
                      height="20"
                    />
                    <span className="ps-1">ENGLISH</span>
                  </Link>
                </li>
                <li className="nav-item ps-4 pe-4d-grid gap-2">
                  <button
                    className="btn btn-outline-warning text-dark fw-bold border border-warning ps-4 pe-4"
                    type="submit"
                  >
                    Login
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default MainHeader;
