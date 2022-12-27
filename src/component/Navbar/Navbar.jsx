import React, { useEffect, useState } from "react";
import NavbarMobile from "./NavbarMobile";
import "./_navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <section id="navbar">
      <div className="container">
        <div className="row justify-content-between align-items-center flex">
          <div className="col-auto">
            <div className="logo ml-2">
              <a href="#" data-nav="beranda">
                UndangResepsi
              </a>
            </div>
          </div>
          <div className="col-auto d-block d-lg-none mr-2">
            <button onClick={openMenu}>
              <a className="open-navbar">
                <i className="bi bi-list text-lg"></i>
              </a>
            </button>
          </div>
          {showMenu ? <NavbarMobile /> : null}

          <div className="col-12 col-lg-auto">
            <div className="nav">
              <a href="#" data-nav="beranda" className="nav-item">
                Home
              </a>
              <a href="#tentang" data-nav="tentang-scroll" className="nav-item">
                Tentang Kami
              </a>
              <a href="#fitur" data-nav="fitur" className="nav-item">
                Fitur
              </a>
              <a
                href="#template-video"
                data-nav="template-video"
                className="nav-item"
              >
                Template
              </a>
              <a href="#harga" data-nav="harga" className="nav-item">
                Harga
              </a>
              <a
                href="#testimonial"
                data-nav="testimonial"
                className="nav-item"
              >
                Testimoni
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
