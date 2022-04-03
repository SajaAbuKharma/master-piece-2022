import React from "react";
import { Link } from "react-router-dom";
import "./bootstrap.min.css";
import "./landingpage.css";
import data from "./Data";

const Landingpage = () => {
  return (
    <div>
      <section id="home" className="slider_area">
        <div id="carouselThree" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#carouselThree"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselThree" data-slide-to="1"></li>
            <li data-target="#carouselThree" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="slider-content">
                      <h1 className="title">Get Started With Our Subjects</h1>
                      <p className="text">
                        We blend insights and strategy to create digital
                        products for forward-thinking organisations.
                      </p>
                      <ul className="slider-btn rounded-buttons">
                        <li>
                          <a className="main-btn rounded-one" href="/subjects">
                            GET STARTED
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-image-box d-none d-lg-flex align-items-end">
                <div className="slider-image">
                  <img src="./subject/1.png" alt="Hero" />
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="slider-content">
                      <h1 className="title">Get Started with Math</h1>
                      <p className="text">
                        We blend insights and strategy to create digital
                        products for forward-thinking organisations.
                      </p>
                      <ul className="slider-btn rounded-buttons">
                        <li>
                          <a className="main-btn rounded-one" href="/subjects">
                            GET STARTED
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-image-box d-none d-lg-flex align-items-end">
                <div className="slider-image">
                  <img src="./subject/2.png" alt="Hero" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="slider-content">
                      <h1 className="title">Get Started with Physics</h1>
                      <p className="text">
                        We blend insights and strategy to create digital
                        products for forward-thinking organisations.
                      </p>
                      <ul className="slider-btn rounded-buttons">
                        <li>
                          <a className="main-btn rounded-one" href="/subjects">
                            GET STARTED
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-image-box d-none d-lg-flex align-items-end">
                <div className="slider-image">
                  <img src="./subject/3.png" alt="Hero" />
                </div>
              </div>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#carouselThree"
            role="button"
            data-slide="prev"
          >
            <i className="lni lni-arrow-left"></i>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselThree"
            role="button"
            data-slide="next"
          >
            <i className="lni lni-arrow-right"></i>
          </a>
        </div>
      </section>

      <div id="exams"></div>
      <section id="services" className="features-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="section-title text-center pb-10">
                <h3 className="title">Our Subjects</h3>
                <p className="text">
                  Stop wasting time and money choose your subject and Go !
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center text-center">
            {data.map((item, id) => (
              <div className="col-lg-4 col-md-7 col-sm-9">
                <div
                  className="single-features mt-4"
                  style={
                    {
                      // boxShadow: "0px 0px 14px -3px rgba(0,0,0,0.85)",
                      // borderRadius: "10px",
                    }
                  }
                >
                  <div className=" text-center">
                    <h1 className="features-title">{item.title}</h1>
                  </div>
                  <br />
                  <div className="features-icon">
                    <img
                      className="shape"
                      src={item.src}
                      alt="Shape"
                      width="400px"
                      height="200px"
                    />
                  </div>
                  <div className="features-content">
                    <p className="text">{item.des}</p>
                    <p className="text">{item.time}</p>
                    <br />
                    <h6>{item.ins}</h6>
                    <a
                      className="features-btn"
                      href="/subjects"
                      style={{ color: "rgb(240, 165, 0)" }}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="landingpage-about">
        <div className="landingpage-about-img">
          <img src="./subject/1.png" alt="car" />
        </div>
        <div className="landingpage-about-text">
          <h3>About Us</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
