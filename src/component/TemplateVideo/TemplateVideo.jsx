import React from "react";
import "./_template-video.scss";
import thumb1 from "../../_assets/img/clipart/vid-thumb-1.jpg";
import thumb2 from "../../_assets/img/clipart/vid-thumb-2.jpg";
import thumb3 from "../../_assets/img/clipart/vid-thumb-3.jpg";
import thumb4 from "../../_assets/img/clipart/vid-thumb-4.jpg";
import thumb5 from "../../_assets/img/clipart/vid-thumb-5.jpg";
import thumb6 from "../../_assets/img/clipart/vid-thumb-6.jpg";
import play from "../../_assets/img/clipart/ic-play.png";
import videowedding from "../../_assets/video/wedding.mp4";

function TemplateVideo() {
  return (
    <section id="template-video" className="pt-10">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-12 col-lg-7"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <h1 className="text-center">
              Banyak Video Template yang Siap Pakai
            </h1>
            <p>
              Tersedia ribuan template video dengan tema Islamic, Minimalist,
              Elegant, Overlays Shadow, dan Water Color
            </p>
          </div>
        </div>
        <div className="row">
          <div
            className="col-12 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="card card-body">
              <h3>Template 1</h3>
              <div className="img-container ratio ratio-16x9">
                <img src={play} className="play-icon" alt="" />
                <iframe
                  width="420"
                  height="345"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY?control=0"
                ></iframe>
              </div>
              <a className="btn" data-video={videowedding}>
                Preview
              </a>
            </div>
          </div>

          <div
            className="col-12 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="card card-body">
              <h3>Template 2</h3>
              <div className="img-container ratio ratio-16x9">
                <img src={play} className="play-icon" alt="" />
                <img src={thumb2} alt="thumb2" />
              </div>
              <a
                href="#"
                className="btn"
                data-video="_assets/video/wedding.mp4"
              >
                Preview
              </a>
            </div>
          </div>

          <div
            className="col-12 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="card card-body">
              <h3>Template 3</h3>
              <div className="img-container ratio ratio-16x9">
                <img src={play} className="play-icon" alt="" />
                <img src={thumb3} alt="thumb3" />
              </div>
              <a
                href="#"
                className="btn"
                data-video="_assets/video/wedding.mp4"
              >
                Preview
              </a>
            </div>
          </div>

          <div
            className="col-12 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="card card-body">
              <h3>Template 4</h3>
              <div className="img-container ratio ratio-16x9">
                <img src={play} className="play-icon" alt="" />
                <img src={thumb4} alt="" />
              </div>
              <a
                href="#"
                className="btn"
                data-video="_assets/video/wedding.mp4"
              >
                Preview
              </a>
            </div>
          </div>

          <div
            className="col-12 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="card card-body">
              <h3>Template 5</h3>
              <div className="img-container ratio ratio-16x9">
                <img src={play} className="play-icon" alt="" />
                <img src={thumb5} alt="" />
              </div>
              <a
                href="#"
                className="btn"
                data-video="_assets/video/wedding.mp4"
              >
                Preview
              </a>
            </div>
          </div>

          <div
            className="col-12 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="card card-body">
              <h3>Template 6</h3>
              <div className="img-container ratio ratio-16x9">
                <img src={play} className="play-icon" alt="" />
                <img src={thumb6} alt="thumb6" />
              </div>
              <a
                href="#"
                className="btn"
                data-video="_assets/video/wedding.mp4"
              >
                Preview
              </a>
            </div>
          </div>
        </div>

        <div
          className="row justify-content-center"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <div className="col-12 col-md-6 col-lg-3">
            <a href="#" target="_blank" className="btn btn-more">
              Lihat Semua Video Template
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TemplateVideo;
