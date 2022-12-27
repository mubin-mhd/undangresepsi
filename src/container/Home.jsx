import React, { useEffect } from "react";
import Navbar from "../component/Navbar/Navbar";
import Beranda from "../component/Beranda/Beranda";
import Tentang from "../component/Tentang/Tentang";
import TemplateVideo from "../component/TemplateVideo/TemplateVideo";
import Harga from "../component/Harga/Harga";
import Testimonial from "../component/Testimonial/Testimonial";
import Footer from "../component/Footer/Footer";
import Closing from "../component/Closing/Closing";
import Fitur from "../component/Fitur/Fitur";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Regist from "./Regists";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  AOS.init();
  return (
    <div className="overvlow-x-none">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Beranda />
            <Tentang />
            <Fitur />
            <TemplateVideo />
            <Harga />
            <Testimonial />
            <Closing />
            <Footer />
          </Route>
          <Route exact path="/regist">
            <Regist />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Home;
