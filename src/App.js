import React from "react";
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Services from "./components/Services";
import About from "./components/About";
import Skill from "./components/Skill";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
      <Banner />
      <Nav />
      <Services />
      <About />
      <Skill />
      <Contact />
    </div>
  );
}

export default App;
