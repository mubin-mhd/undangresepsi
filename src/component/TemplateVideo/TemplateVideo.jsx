import React, { useState, useEffect } from "react";
import "./_template-video.scss";
import EmbedVideo from "../EmbedVideo";
import supabase from "../../config/supabase";

function TemplateVideo() {
  const [data, setData] = useState([]);

  const getDataListVideos = async () => {
    const dataList = await supabase
      .from("videoTemplate")
      .select("*")
      .range(0, 9);
    if (dataList.status === 200) {
      setData(dataList.data);
    }
  };

  useEffect(() => {
    getDataListVideos();
  }, []);

  return (
    <section id="template-video" className="pt-10">
      <div className="container">
        <div className="row justify-content-center mb-5">
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
        <EmbedVideo data={data} />

        <div
          className="row justify-content-center mt-5"
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
