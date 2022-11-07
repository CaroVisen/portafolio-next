import React from "react";
import Navbar from "./components/navbar";
import Inicio from "./components/inicio";
import Abilities from "./components/abilities";
import Projects from "./components/projects";
import Footer from "./components/footer";


const Home = ({

}) => {
  return (
    <div className="all">
      <Navbar />
      <Inicio />
      <Abilities />
      <Projects />
      <Footer />
    </div>
  )
}

export default Home;