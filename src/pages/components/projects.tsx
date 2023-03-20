import React from "react";
import Webcovid2 from "../../assets/webcovid2.png";

const Projets = ({}) => {
  return (
    <div
      style={{ backgroundColor: "#171718", minHeight: "90vh", marginTop: "2%" }}
      id="projects"
    >
      <h1 style={{ color: "#fff", textAlign: "center" }}>Proyectos</h1>
      <div
        style={{
          display: "flex",
          color: "#47D16E",
          textAlign: "center",
          justifyContent: "space-around",
        }}
      >
        <div style={{ display: "flex", marginTop: "3%" }} className="carrousel">
          <div className="cardAbilitie" style={{ width: "450px" }}>
            <img
              src={Webcovid2.src}
              style={{ width: "90%", margin: "5%", borderRadius: "25px" }}
            />
            <a
              href="https://covid19-cv.netlify.app/"
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: "1.5em",
                marginBottom: "3%",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Web Covid
              <br />
              HTML - CSS - JavaScript
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projets;
