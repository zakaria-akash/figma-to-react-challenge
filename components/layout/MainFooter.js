import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";

const MainFooter = () => {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row justify-content-start align-self-center">
          <div className="col-sm-12 col-md-3 align-self-center">
            <div className="row d-flex justify-content-start">
              <div className="col-sm-12 mb-0">
                <Image
                  src="/images/body-sec-1/google-play-badge-logo.svg"
                  className="btn rounded-pill m-0 p-0"
                  alt="google-play-icon"
                  width={100}
                  height={70}
                  layout="responsive"
                />
              </div>
              <div className="text-center col-sm-12 mt-0">
                কমিউনিটি -এর সাথে কানেক্টেড থাকতে
              </div>
              <div className="text-center col-sm-12">
                <Link
                  className="btn btn-social-icon btn-google mx-0 px-2"
                  href="https://google.com/"
                  target="_blank"
                >
                  <i
                    className="fa fa-google-plus"
                    style={{ fontSize: "200%", color: "royalblue" }}
                  ></i>
                </Link>
                <Link
                  className="btn btn-social-icon btn-facebook bg-primary mx-auto px-2"
                  href="https://www.facebook.com/profile.php?id="
                  target="_blank"
                >
                  <i
                    className="fa fa-facebook"
                    style={{ fontSize: "150%", color: "white" }}
                  ></i>
                </Link>
                <Link
                  className="btn btn-social-icon btn-linkedin mx-auto px-2"
                  href="https://www.linkedin.com/in/"
                  target="_blank"
                >
                  <i
                    className="fa fa-linkedin"
                    style={{ fontSize: "200%", color: "blue" }}
                  ></i>
                </Link>
                <Link
                  className="btn btn-social-icon btn-twitter mx-auto px-2"
                  href="https://twitter.com/"
                  target="_blank"
                >
                  <i
                    className="fa fa-twitter"
                    style={{ fontSize: "200%", color: "darkslateblue" }}
                  ></i>
                </Link>
                <Link
                  className="btn btn-social-icon btn-google mx-auto px-2"
                  href="https://youtube.com/"
                  target="_blank"
                >
                  <i
                    className="fa fa-youtube"
                    style={{ fontSize: "200%", color: "#8B0000" }}
                  ></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className="row d-flex justify-content-start">
              <div className="col-sm-12 mt-3 fs-6">
                <span className="footer-hover-section">
                  জয়েন করুন এক্সপার্টদের টিমে
                </span>
              </div>
              <div className="col-sm-12">ব্লগ</div>
            </div>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className="row d-flex justify-content-start">
              <div className="col-sm-12 mt-1 fs-5">
                <address>
                  <span className="footer-hover-section">
                    Ka-6/a, Navana Sylvania, Baridhara Road, Nadda, Gulshan-2,
                    Dhaka-1212.
                  </span>
                  <br />
                  <i className="fa fa-phone fa-lg"></i>: +8801631894477
                  <br />
                  <i className="fa fa-fax fa-lg"></i>: +8801631894477
                  <br />
                  <i className="fa fa-envelope fa-lg"></i>:
                  <Link
                    href="mailto:support@ostad.app"
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    {" "}
                    <span className="footer-hover-section">
                      support@ostad.app
                    </span>
                  </Link>
                </address>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className="row d-flex justify-content-start">
              <div className="col-sm-12 mt-2">
                <div className="col-sm-12 fs-5">
                  <span className="footer-hover-section">
                    Terms & Conditions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-sm-12 d-flex justify-content-center">
            <Link
              href="https://github.com/zakaria-akash"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <span className="footer-hover-section fs-5">
                © 2023 Zakaria Ibrahim
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
