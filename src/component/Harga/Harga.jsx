import React from "react";
import "./_harga.scss";
import check from "../../_assets/img/clipart/ic-check.png";

function Harga() {
  return (
    <section id="harga" className="pt-10">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-12 col-lg-7"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <h1 className="text-center">
              Berapa harga undangan di UndangResepsi ?
            </h1>
            <p>
              Harga yang sangat terjangakau dan ada banyak bonus yang kamu
              dapatkan
            </p>
          </div>
        </div>
        <div className="row">
          <div
            className="col-12 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="card">
              <div className="card-body">
                <h4>UR 1</h4>
                <h2>Rp.60.000</h2>
                <ul>
                  <li>
                    <img src={check} alt="" />
                    Undangan Video Wedding
                  </li>
                  <li>
                    <img src={check} alt="" />
                    Wedding Letter Card
                  </li>
                  <li>
                    <img src={check} alt="" />
                    Wedding Save The Date
                  </li>
                </ul>
                <a href="#" className="btn">
                  Pilih Paket
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-12 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="card card-highlight">
              <div className="card-body">
                <h4>UR 2</h4>
                <h2>Rp.70.000</h2>
                <ul className="mx-auto">
                  <li>
                    <img src={check} alt="" />
                    Undangan Video Wedding
                  </li>
                  <li>
                    <img src={check} alt="" />
                    Wedding Letter Card
                  </li>
                  <li>
                    <img src={check} alt="" />
                    Wedding Save The Date
                  </li>
                  <li>
                    <img src={check} alt="" />
                    Wedding Envelopes
                  </li>
                </ul>
                <a href="#" className="btn">
                  Pilih Paket
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-12 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="card">
              <div className="card-body">
                <h4>UR 3</h4>
                <h2>Rp.90.000</h2>
                <ul className="list-Benefit">
                  <li>
                    <img src={check} alt="" />
                    Undangan Video Wedding
                  </li>
                  <li>
                    <img src={check} alt="" />
                    Wedding Letter Card
                  </li>
                  <li>
                    <img src={check} alt="" />
                    Wedding Save The Date
                  </li>
                  <li>
                    <img src={check} alt="" />
                    Wedding Envelopes
                  </li>
                  <li>
                    <img src={check} alt="" />
                    Moodboard video moment
                  </li>
                </ul>
                <a href="#" className="btn">
                  Pilih Paket
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Harga;
