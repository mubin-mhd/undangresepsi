import React from "react";

function NavbarMobile() {
  return (
    <div
      className="nav-klik mt-2 flex justify-around"
      id="nav-klik"
      data-aos="fade-up"
      data-aos-duration="700"
    >
      <a
        href="#"
        data-nav="beranda"
        className="nav-item border-2 rounded-lg py-1 px-2"
      >
        <i className="bi bi-house text-lg"></i>
      </a>
      <a
        href="#tentang-scroll"
        data-nav="tentang-scroll"
        className="nav-item border-2 rounded-lg py-1 px-2"
      >
        <i className="bi bi-file-person text-lg"></i>
      </a>
      <a
        href="#fitur"
        data-nav="fitur"
        className="nav-item border-2 rounded-lg py-1 px-2"
      >
        <i className="bi bi-hand-index-thumb text-lg"></i>
      </a>
      <a
        href="#template-video"
        data-nav="template-video"
        className="nav-item border-2 rounded-lg py-1 px-2"
      >
        <i className="bi bi-camera-video text-lg"></i>
      </a>
      <a
        href="#harga"
        data-nav="harga"
        className="nav-item border-2 rounded-lg py-1 px-2"
      >
        <i className="bi bi-tag text-lg"></i>
      </a>
      <a
        href="#testimonial"
        data-nav="testimonial"
        className="nav-item border-2 rounded-lg py-1 px-2"
      >
        <i className="bi bi-star text-lg"></i>
      </a>
    </div>
  );
}

export default NavbarMobile;
