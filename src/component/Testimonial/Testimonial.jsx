import React from "react";
import "./_testimonial.scss";
import ava1 from "../../_assets/img/avatar/ava1.png";
import ava2 from "../../_assets/img/avatar/ava2.png";
import ava3 from "../../_assets/img/avatar/ava3.png";

function Testimonial() {
  return (
    <section id="testimonial" className="pt-10">
      <div className="container">
        <div className="row">
          <div
            className="col-12 col-md-9 col-lg-6 mx-auto"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <h1>
              Apa yang Customer Kami katakan Tentang{" "}
              <span>UndangResepsi ?</span>
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
              <p>
                “Terimakasih undangresepsi, undanganya bagus banget, durasinya
                pas temanya juga jaman now, harganya kemurahan sih ini”
              </p>
              <div className="d-flex align-items-center">
                <div>
                  <div className="name">Husnul</div>
                  <div className="occupant">Pegawai Swasta</div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-12 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="card card-body">
              <p>
                “Undanganya keren, cepet jadi, pesen siang sorenya langsung
                jadi, pokoknya recommended lah”
              </p>
              <div className="d-flex align-items-center">
                <div>
                  <div className="name">Mita</div>
                  <div className="occupant">Mahasiswa</div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-12 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="card card-body">
              <p>
                “Bagus bang undanganya, revisi beberapa kali sabar banget
                abangnya, gratis juga, semoga lancar terus undangresepsi”
              </p>
              <div className="d-flex align-items-center">
                <div>
                  <div className="name">Teddy</div>
                  <div className="occupant">Pegawai Swasta</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
