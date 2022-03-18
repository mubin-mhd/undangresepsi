import React from "react";
import "./_tentang.scss";
import ornament0 from "../../_assets/img/clipart/ornament-0.png";
import ornament1 from "../../_assets/img/clipart/ornament-1.png";
import ornament2 from "../../_assets/img/clipart/ornament-2.png";
import ornament3 from "../../_assets/img/clipart/ornament-3.png";
import ornament4 from "../../_assets/img/clipart/ornament-4.png";
import image1 from "../../_assets/img/clipart/img-1.jpg";
import image2 from "../../_assets/img/clipart/img-2.jpg";

function Tentang() {
  return (
    <section id="tentang">
      <div className="container">
        <img src={ornament0} className="ornament-0 d-none d-lg-block" alt="" />
        <div
          className="row row-1 align-items-center justify-content-between"
          id="tentang-scroll"
        >
          <div
            className="col-12 col-lg-5"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            <h1>
              Apa Itu <span>UndangResepsi</span>?
            </h1>
            <p>
              UndangResepsi.online merupakan jasa pembuatan undangan digital
              dalam format video .mp4
            </p>
          </div>
          <div className="col-12 col-lg-auto d-none d-lg-block">
            <div
              className="img-wrapper"
              data-aos="fade-left"
              data-aos-duration="700"
            >
              <img src={ornament1} className="ornament-1" alt="" />
              <img src={ornament2} className="ornament-2" alt="" />
              <div className="img-placeholder">
                <img src={image1} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row row-2 justify-content-between align-items-center">
          <div
            className="col-12 col-lg-5 d-none d-lg-block"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            <div className="img-wrapper">
              <img src={ornament3} className="ornament-3" alt="" />
              <img src={ornament4} className="ornament-4" alt="" />
              <div className="img-placeholder">
                <img src={image2} alt="" />
              </div>
            </div>
          </div>
          <div
            className="col-12 col-lg-6"
            data-aos="fade-left"
            data-aos-duration="700"
          >
            <h1>
              Mengapa Memilih <span>UndangResepsi</span> Sebagai Jasa Penyedia
              Undangan Digital
            </h1>
            <p>
              Selain proses pengerjaanya yang cepat, desain yang ditawarkan juga
              kekinian, ribuan pilihan tema yang bisa kamu pilih sesuai
              keinginan, dan bisa pilih ukuran device untuk platform media
              sosial kamu
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tentang;
