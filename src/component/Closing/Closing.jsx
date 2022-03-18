import React from "react";
import "./_closing.scss";

function Closing() {
  return (
    <section id="closing">
      <div className="background-filter"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-12 col-lg-9"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <h1>
              Apa Lagi yang Anda Tunggu? Mulai Sekarang dan Dapatkan Undangan
              Pernikahan Idaman Anda
            </h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-auto mb-2"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <a href="#" className="btn btn-1">
              Pesan Sekarang
            </a>
          </div>
          <div className="col-auto" data-aos="fade-up" data-aos-duration="700">
            <a href="#" className="btn btn-2">
              Tanya Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Closing;
