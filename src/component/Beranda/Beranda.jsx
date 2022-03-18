import React, { useEffect, useState } from "react";
import clipart from "../../_assets/img/clipart/device.png";
import "./_beranda.scss";
import Suara from "./Suara";
import Aos from "aos";
import "aos/dist/aos.css";
import ModalWa from "./ModalWa";

function Beranda() {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <section id="beranda" className="mt-10 ">
      <a href="#beranda" className="totop-btn" data-nav="beranda">
        <i className="bi bi-chevron-up"></i>
      </a>
      <div className="popup-btn rounded-t-lg rounded-bl-lg rounded-br-3xl">
        {modal ? <ModalWa setModal={setModal} /> : null}
        <button onClick={openModal} className="wa-btn">
          <i className="bi bi-whatsapp"></i>
        </button>
      </div>

      <Suara />
      <div className="container">
        <div className="row justify-content-center text-center">
          <div
            className="col-12 col-md-9 col-lg-8"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <h1>Buat Undangan Pernikahan Anda Lebih Menarik dan Modern</h1>

            <p>
              undangan digital format mp4, dengan desain kekinian, tersedia
              ribuan tema dan berbagai ukuran device, serta gratis revisi
            </p>
            <a href="#" className="btn">
              Pesan Sekarang
            </a>
          </div>
        </div>
      </div>
      <img src={clipart} alt="laptop" />
    </section>
  );
}

export default Beranda;
