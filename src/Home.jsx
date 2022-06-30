import React from "react";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";
export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="mt-5 fw-bold fs-4 main-name">
              Understand your customers like never before with{" "}
            </div>
            <div className="fs-1 fw-bold main-name2">Google Analytics</div>
            <div className="mt-5">
              We set up Google Analytics for you, the right way.
            </div>
            <div className="d-flex mt-3">
              <button className="btn btn-light button-color text-light p-3">
                LEARN MORE
              </button>
              <button className="btn btn-light ms-2 border border-primary aa">
                CONTACT US
              </button>
            </div>
          </div>
          <div className="col-md-7 mt-5">
            <img
              src="./asset/img/screenshot 1.png"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-md-5 mt-5 ps-5">
            <div>
              Google Analytics 4 helps you to
              <span className="main-name2 fw-bold">Grow Your Business</span>
              through intelligent Data Collection and Analysis.
            </div>
            <div className="mt-5">
              Google analytics puts you a foot
              <span className="main-name2 fw-bold">
                ahead of your competitors
              </span>
            </div>
          </div>
          <div className="col-lg-12 mt-lg-5">
            <div class="col-md-12 text-center icon-color mt-5 mb-5 fs-3">
              Trusted By
            </div>

            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper text-center"
            >
              <SwiperSlide className="w-25">
                <img
                  src="./asset/img/IMAGE (2).png"
                  className="img-fluid h-100"
                />
              </SwiperSlide>
              <SwiperSlide className="w-25">
                <img
                  src="./asset/img/IMAGE (3).png"
                  className="img-fluid h-100"
                />
              </SwiperSlide>
              <SwiperSlide className="w-25">
                <img src="./asset/img/IMAGE.png" className="img-fluid h-100" />
              </SwiperSlide>
              <SwiperSlide className="w-25">
                <img
                  src="./asset/img/Rectangle.png"
                  className="img-fluid h-100"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-md-12 mt-4 text-center">
            <div className="fs-3 mt-lg-5">What We Do</div>
            <div className="main-name2 fs-1 fw-bold">
              Unlock the full potential of Google Analytics.
            </div>
          </div>
        </div>
        <div className="row mt-5 p-5 bg-color">
          <div className="col-md-4">
            <div>
              <img src="./asset/img/1.png" alt="" className="h-25 w-25 p-2" />
            </div>
            <div className="fs-5 fw-bold p-2">Google Analytics 4 Set Up</div>
            <div className="p-2">
              Universal Analytics is being sunset in 2022. Get the benefits of
              GA4 now, set up the right way.
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <img
                src="./asset/img/Rectangle (1).png"
                alt=""
                className="h-25 w-25 p-2"
              />
            </div>
            <div className="fs-5 fw-bold p-2 mt-2">
              Google Tag Manager Integration
            </div>
            <div className="p-2">
              Need enhanced analytics for Shopify, Woocommerece? We'll set up
              enhanced data layers and GTM integration.
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <img src="./asset/img/2.png" alt="" className="h-25 w-25 p-2" />
            </div>
            <div className="fs-5 fw-bold ">Google/Facebook Ad Tracking</div>
            <div className="pt-3">
              Accurate conversion tracking & remarketing is vital for ad
              success. We'll ensure it's done right.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-5">
            <div className="mt-5">Why work with us?</div>
            <div className="main-name2 fw-bold fs-2 mt-4">
              Save time, money & hassle
            </div>
            <div className="mt-4">One-Time Purchase - No monthly payments.</div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="mt-5 d-flex">
              <div>
                <i class="bi bi-arrow-right-circle-fill fs-1 main-name2"></i>
              </div>
              <div className="ms-3 align-self-center">
                Seamless Integration.
              </div>
            </div>
            <div className=" d-flex">
              <div>
                <i class="bi bi-arrow-right-circle-fill fs-1 main-name2"></i>
              </div>
              <div className="ms-3 align-self-center">
                Seamless Integration.
              </div>
            </div>
            <div className=" d-flex">
              <div>
                <i class="bi bi-arrow-right-circle-fill fs-1 main-name2"></i>
              </div>
              <div className="ms-3 align-self-center">
                Seamless Integration.
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-5">
            <div className="main-name fw-bold fs-4 mt-5">
              Supported platforms
            </div>
            <div className="fw-bold fs-3">
              We can integrate across most popular platforms
            </div>
            <div className="mt-2">
              Unlock the full potential of Google Analytics by passing enhanced,
              accurate & reliable data, using the latest version GA4, fixing
              known problems.
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="d-flex mt-5">
              <div className="align-self-center">
                <i class="bi bi-wordpress fs-1 text-primary"></i>
              </div>
              <div className="ps-4 ">
                <div className="fw-bold ">Wordpress</div>
                <div className="mt-2">
                  Get advanced Google Analytics tracking features for Wordpress
                  with custom event set up.
                </div>
              </div>
            </div>
            <div className="d-flex mt-4">
              <div className="align-self-center">
                <img src="./asset/img/IMAGE0.png" alt="" />
              </div>
              <div className="ps-4 ">
                <div className="fw-bold ">Woocommerce</div>
                <div className="mt-2">
                  Track advanced e-commerce events with Woo-commerce in Google
                  Analytics 4, with accurate conversion tracking & remarketing.
                </div>
              </div>
            </div>
            <div className="d-flex  mt-4">
              <div className="align-self-center">
                <i class="bi bi-bag-check-fill fs-1 text-success"></i>
              </div>
              <div className="ps-4 ">
                <div className="fw-bold ">Shopify</div>
                <div className="mt-2">
                  Track advanced e-commerce events with Shopify in Google
                  Analytics 4, with accurate conversion tracking & remarketing.
                </div>
              </div>
            </div>
            <div className="d-flex  mt-4">
              <div className="align-self-center">
                <i class="bi bi-bar-chart-fill fs-1 text-primary"></i>
              </div>
              <div className="ps-4 ">
                <div className="fw-bold ">Webflow</div>
                <div className="mt-2">
                  Track Webflow events in Google Analytics 4, with accurate form
                  submission events.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img
              src="./asset/img/IMAGE11.png"
              alt=""
              className="img-fluid mt-5"
            />
          </div>
          <div className="col-md-6 mt-5 p-5">
            <div className="fw-bold fs-2">
              Accurate Google Analytics to drive the right decisions
            </div>
            <div className="mt-2">
              Make decisions based on accurate data. Our clients see improved
              data analytic results, guaranteed.
            </div>
            <div className="mt-3">
              <button className="btn btn-light button-color text-light p-2">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="text-center main-name2 fw-bold fs-2 mt-5">
            How it works
          </div>
          <div className="col-md-6 offset-md-3 mt-5">
            <div className="d-flex bg-color-div p-4">
              <div className="align-self-center">
                <i class="bi bi-list-check fs-1"></i>
              </div>
              <div className="ps-4">
                <div className="fw-bold">Choose a plan</div>
                <div className="mt-3">
                  Choose from our Essentials & Enhanced Packages, based on your
                  requirments.
                </div>
              </div>
            </div>
            <div className="d-flex mt-3 bg-color-div p-4">
              <div className="align-self-center">
                <i class="bi bi-chat-right-text-fill fs-1"></i>
              </div>
              <div className="ps-4">
                <div className="fw-bold">Choose a plan</div>
                <div className="mt-3">
                  Choose from our Essentials & Enhanced Packages, based on your
                  requirments.
                </div>
              </div>
            </div>
            <div className="d-flex mt-3 bg-color-div p-4">
              <div className="align-self-center">
                <i class="bi bi-bezier2 fs-1"></i>
              </div>
              <div className="ps-4">
                <div className="fw-bold">Choose a plan</div>
                <div className="mt-3">
                  Choose from our Essentials & Enhanced Packages, based on your
                  requirments.
                </div>
              </div>
            </div>
            <div className="d-flex mt-3 bg-color-div p-4">
              <div className="align-self-center">
                <i class="bi bi-shield-fill-check fs-1"></i>
              </div>
              <div className="ps-4">
                <div className="fw-bold">Choose a plan</div>
                <div className="mt-3">
                  Choose from our Essentials & Enhanced Packages, based on your
                  requirments.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="fw-bold fs-2 main-name text-center mt-5">
            Analytics for every business.
          </div>
          <div className="col-md-6 mt-5 p-5">
            <div className="d-flex">
              <div>
                <i class="bi bi-shield-fill-check fs-2"></i>
              </div>
              <div className="ps-3">
                <div className="fs-bold fs-4">Essential Analytics</div>
                <div className="mt-2">
                  Google Analytics 4 implementation. Everything you need to get
                  started with GA4.
                </div>
              </div>
            </div>
            <div className="d-flex mt-5">
              <div>
                <i class="bi bi-check-circle-fill text-primary"></i>
              </div>
              <div className="ps-3">GA4 Implementation</div>
            </div>
            <div className="d-flex mt-1">
              <div>
                <i class="bi bi-check-circle-fill text-primary"></i>
              </div>
              <div className="ps-3">Setup takes 1-2 days.</div>
            </div>
            <div className="d-flex mt-1">
              <div>
                <i class="bi bi-check-circle-fill"></i>
              </div>
              <div className="ps-3">Enhanced Ecommerce Tracking</div>
            </div>
            <div className="d-flex mt-1">
              <div>
                <i class="bi bi-check-circle-fill"></i>
              </div>
              <div className="ps-3">Google Tag Manager Implementation</div>
            </div>
            <div className="d-flex mt-1">
              <div>
                <i class="bi bi-check-circle-fill"></i>
              </div>
              <div className="ps-3">Data Layer Events</div>
            </div>
            <div className="d-flex mt-1">
              <div>
                <i class="bi bi-check-circle-fill"></i>
              </div>
              <div className="ps-3">
                Conversion Tracking for Google/Facebook Ads
              </div>
            </div>
            <div className="text-center">
              <div className="fs-3 mt-4">$197</div>
              <div>(USD)</div>
              <div>One-time payment</div>
              <button className="btn btn-dark p-2 mt-3">GET STARTED</button>
            </div>
          </div>
          <div className="col-md-6 mt-5 p-5 div-bg-color">
            <div className="d-flex">
              <div>
                <i class="bi bi-shield-fill-check fs-2"></i>
              </div>
              <div className="ps-3">
                <div className="fs-bold fs-4">Essential Analytics</div>
                <div className="mt-2">
                  Google Analytics 4 implementation. Everything you need to get
                  started with GA4.
                </div>
              </div>
            </div>
            <div className="d-flex mt-5">
              <div>
                <i class="bi bi-check-circle-fill text-primary"></i>
              </div>
              <div className="ps-3">GA4 Implementation</div>
            </div>
            <div className="d-flex mt-1">
              <div>
                <i class="bi bi-check-circle-fill text-primary"></i>
              </div>
              <div className="ps-3">Setup takes 1-2 days.</div>
            </div>
            <div className="d-flex mt-1">
              <div>
                <i class="bi bi-check-circle-fill text-primary"></i>
              </div>
              <div className="ps-3">Enhanced Ecommerce Tracking</div>
            </div>
            <div className="d-flex mt-1">
              <div>
                <i class="bi bi-check-circle-fill text-primary"></i>
              </div>
              <div className="ps-3">Google Tag Manager Implementation</div>
            </div>
            <div className="d-flex mt-1">
              <div>
                <i class="bi bi-check-circle-fill text-primary"></i>
              </div>
              <div className="ps-3">Data Layer Events</div>
            </div>
            <div className="d-flex mt-1">
              <div>
                <i class="bi bi-check-circle-fill text-primary"></i>
              </div>
              <div className="ps-3">
                Conversion Tracking for Google/Facebook Ads
              </div>
            </div>
            <div className="text-center">
              <div className="fs-3 mt-4">$197</div>
              <div>(USD)</div>
              <div>One-time payment</div>
              <button className="btn btn-dark p-2 mt-3 button-color ">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
        <div className="row bg-dark div-box-radius1 mt-lg-5">
          <div className="col-md-6">
            <div className="p-5">
              <div className="fs-1 fw-bold  text-light">
                Frequently Asked Questions
              </div>
              <div className="text-light mt-4">
                Question not answered? Feel free to reach out to us using our
                chat option.
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-5">
              <div className="d-flex justify-content-between bg-light p-4 div-box-radius">
                <div>Do I need the Enhanced Analytics option?</div>
                <div className="align-self-center">
                  <i class="bi bi-plus fw-bold fs-3"></i>
                </div>
              </div>
              <div className="d-flex justify-content-between bg-light p-4 mt-3 div-box-radius">
                <div>What is Data Layer Events with Google Tag Manager?</div>
                <div className="align-self-center">
                  <i class="bi bi-plus fw-bold fs-3"></i>
                </div>
              </div>
              <div className="d-flex justify-content-between bg-light p-4 mt-3 div-box-radius">
                <div>How long does the set up take?</div>
                <div className="align-self-center">
                  <i class="bi bi-plus fw-bold fs-3"></i>
                </div>
              </div>
              <div className="d-flex justify-content-between bg-light p-4 mt-3 div-box-radius">
                <div>Do you support any different platforms?</div>
                <div className="align-self-center">
                  <i class="bi bi-plus fw-bold fs-3"></i>
                </div>
              </div>
              <div className="d-flex justify-content-between bg-light p-4 mt-3 div-box-radius">
                <div>Why do I need Google Analytics 4?</div>
                <div className="align-self-center">
                  <i class="bi bi-plus fw-bold fs-3"></i>
                </div>
              </div>
              <div className="d-flex justify-content-between bg-light p-4 mt-3 div-box-radius">
                <div>
                  Whats the difference between Analytics 4 & Universal
                  Analytics?
                </div>
                <div className="align-self-center">
                  <i class="bi bi-plus fw-bold fs-3"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className=" fs-1 fw-bold mt-5 main-name2">
            Ready to unlock enhanced analytics?
          </div>
          <div className="mt-2">One-Time Purchase - No monthly payments</div>
          <div>
            <button className="btn btn-light button-color text-light mt-3">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
      <div className="bg-dark text-light p-4 mt-5">
        <div className="row p-5">
          <div className="col-md-3 ">
            <img src="./asset/img/SetupGA final log 2.png" alt="" />
          </div>
          <div className="col-md-3">
            <div className="fw-bold fs-5">Product</div>
            <div className="mt-2">What we do</div>
            <div className="mt-2">Supported platforms</div>
            <div className="mt-2">How it works</div>
            <div className="mt-2">Reviews</div>
            <div className="mt-2">Pricing</div>
          </div>
          <div className="col-md-3">
            <div className="fw-bold fs-5">More</div>
            <div className="mt-2">Package Options</div>
            <div className="mt-2">FAQ's</div>
          </div>
          <div className="col-md-3">
            <div className="fw-bold fs-5">About</div>
            <div className="mt-2">Contact</div>
            <div className="mt-2">Privacy Policy</div>
            <div className="mt-2">Terms and Conditions</div>
          </div>
          <div className="d-flex justify-content-center p-4">
            <div>
              <span className="ms-5">
                <i class="bi bi-facebook fs-4 main-name2"></i>
              </span>
              <span className="ms-4">
                <i class="bi bi-twitter fs-4 main-name2"></i>
              </span>
              <span className="ms-4 me-5">
                <i class="bi bi-linkedin fs-4 main-name2"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
