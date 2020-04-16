import React from 'react';
import "./navbar.scss";

export default function Navbar() {
    return (
      <nav className="navbar navbar-default navbar-doublerow navbar-trans navbar-fixed-top">
        {/* top nav */}
        <nav className="navbar navbar-top hidden-xs">
          <div className="container navbar-city-container">
            {/* left nav top */}
            <ul className="nav navbar-nav pull-left">
              <li>
                <a href="#">
                  <span className="glyphicon glyphicon-thumbs-up text-white"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="glyphicon glyphicon-globe text-white"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="glyphicon glyphicon-pushpin text-white"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="text-white">
                    QUESTIONS? CALL: <b>+963000000000</b>
                  </span>
                </a>
              </li>
            </ul>
            {/* right nav top */}
            <ul className="nav navbar-nav pull-right">
              <li>
                <a href="https://github.com/alphadsy" className="text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="https://github.com/alphadsy" className="text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* down nav */}
        <nav className="navbar navbar-down">
          <div className="container  navbar-city-container">
            <div className="flex-container">
              <div className="navbar-header flex-item">
                <div
                  className="navbar-brand"
                  href="https://github.com/alphadsy"
                >
                  ALPHAD
                </div>
              </div>
              <ul className="nav navbar-nav flex-item hidden-xs">
                <li>
                  <a href="https://github.com/alphadsy">Projects</a>
                </li>
                <li>
                  <a href="https://github.com/alphadsy">Pricing</a>
                </li>
                <li>
                  <a href="https://github.com/shu3aybbadran">TheTeam</a>
                </li>
              </ul>
              <ul className="nav navbar-nav flex-item hidden-xs pull-right">
                <li>
                  <a href="https://bootsnipp.com/snippets/M5Nyj" className="">
                    Header sectoin!
                  </a>
                </li>
              </ul>
              {/* dropdown only moblie */}
              <div className="dropdown visible-xs pull-right">
                <button
                  className="btn btn-default dropdown-toggle "
                  type="button"
                  id="dropdownmenu"
                  data-toggle="dropdown"
                >
                  <span className="glyphicon glyphicon-align-justify"></span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Projects</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">TheTeam</a>
                  </li>
                  <li role="separator" className="divider"></li>
                  <li>
                    <a href="#">contact us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </nav>
    );
}
