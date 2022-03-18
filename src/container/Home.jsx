import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Beranda from "../component/Beranda/Beranda";
import Tentang from "../component/Tentang/Tentang";
import TemplateVideo from "../component/TemplateVideo/TemplateVideo";
import Harga from "../component/Harga/Harga";
import Testimonial from "../component/Testimonial/Testimonial";
import Footer from "../component/Footer/Footer";
import Closing from "../component/Closing/Closing";
import Fitur from "../component/Fitur/Fitur";

const Home = () => {
  return (
    <div className="overvlow-x-none">
      <Navbar />
      <Beranda />
      <Tentang />
      <Fitur />
      <TemplateVideo />
      <Harga />
      <Testimonial />
      <Closing />
      <Footer />
    </div>
  );
};

export default Home;
