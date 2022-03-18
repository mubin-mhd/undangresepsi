import React from "react";
import "./_fitur.scss";
import fitur1 from "../../_assets/img/clipart/ic-1.png";
import fitur2 from "../../_assets/img/clipart/ic-2.png";
import fitur3 from "../../_assets/img/clipart/ic-3.png";
import fitur4 from "../../_assets/img/clipart/ic-4.png";
import fitur5 from "../../_assets/img/clipart/ic-5.png";
import fitur6 from "../../_assets/img/clipart/ic-6.png";

function Fitur() {
  return (
    <section id="fitur">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-12 col-lg-6"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <h1 className="text-center">
              Fitur Unggulan yang Ada Di
              <span className="text-[#890025]"> UndangResepsi ?</span>
            </h1>
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="card card-body">
              <img src={fitur1} alt="" />
              <h3>Responsive</h3>
              <p>
                Design yang ada di undangresepsi bisa pilih menyesuaikan ukuran
                setiap platform
              </p>
            </div>
          </div>
          <div
            className="col-12 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="card card-body">
              <img src={fitur2} alt="" />
              <h3>Foto Mempelai dan Galeri</h3>
              <p>
                Bebas request foto dan jumlah galeri yang ingin ditampilkan,
                bisa juga menggunakan animasi
              </p>
            </div>
          </div>
          <div
            className="col-12 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="card card-body">
              <img src={fitur4} alt="" />
              <h3>Musik Latar</h3>
              <p>Musik latar belakang bebas sesuai dengan keinginan</p>
            </div>
          </div>
          <div
            className="col-12 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="card card-body">
              <img src={fitur5} alt="" />
              <h3>Lokasi & Waktu Resepsi</h3>
              <p>Pin maps lokasi acara dan juga waktu akad nikah dan resepsi</p>
            </div>
          </div>
          <div
            className="col-12 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="card card-body">
              <img src={fitur6} alt="" />
              <h3>Quotes & Doa</h3>
              <p>
                Quotes romantis dan menyentuh sesuai dengan tema acara serta doa
                untuk mempelai
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fitur;
