import React from "react";

const Inicio = ({}) => {
  return (
    <div
      style={{
        minHeight: "50vh",
        backgroundColor: "#171718",
        color: "#fff",
        textAlign: "center",
        padding: "5vh",
      }}
      id="inicio"
    >
      <h1 style={{ fontWeight: "700", padding: "5vh", fontSize: "3em" }}>
        Hola, soy <span style={{ color: "#47D16E" }}> Carolina Visentin</span>
        <br /> Front End Developer
      </h1>
      <p
        style={{
          fontSize: "1.5em",
          marginBottom: "5vh",
          width: "65vh",
          margin: "auto",
        }}
      >
        Hace más de 3 años me dedico profesionalmente al desarrollo web.
        <br />
        A lo largo de estos años he trabajado para distintas empresas y también
        desarrollé algunos proyectos como freelancer.
        <br />
        Te invito a recorrer mi portafolio y descubras algunas de mis
        habilidades y proyectos.
      </p>
    </div>
  );
};

export default Inicio;
