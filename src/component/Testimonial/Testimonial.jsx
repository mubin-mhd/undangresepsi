import React, { useState, useEffect } from "react";
import "./_testimonial.scss";
import supabase from "../../config/supabase";
import { Loading } from "../Loading";

function Testimonial() {
  const [dataTesti, setDataTesti] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    let { data, error } = await supabase.from("testimonial").select();
    if (data) {
      setDataTesti(data);
      setLoading(false);
    } else {
      alert(`Gagal Fetching data ${error}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
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
        {loading ? (
          <Loading />
        ) : (
          <div className="row">
            {dataTesti.map((item, index) => (
              <div
                key={index}
                className="col-12 col-md-6 col-lg-4"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <div className="card card-body">
                  <p>{item.desc}</p>
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="name">{item.name}</div>
                      <div className="occupant">{item.pekerjaan}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Testimonial;
