import React from "react";
import "./Navbar.css";
export default function () {
  return (
    <div className="container mt-4">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="./asset/img/log.png" alt="" className="img-fluid pt-2" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active text-light"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
            </ul>

            <div class="d-flex" role="search">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item pe-3">
                  <a class="nav-link active" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item active pe-3">
                  <a class="nav-link" href="#">
                    Review
                  </a>
                </li>
                <li class="nav-item active pe-3">
                  <a class="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li class="nav-item active pe-3">
                  <a class="nav-link" href="#">
                    Contact
                  </a>
                </li>
                <button className="btn btn-light button-color text-light">
                  GET STARTED
                </button>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
