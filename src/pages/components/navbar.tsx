import React from "react";

const Navbar = ({

}) => {
    return (
        <div className="nav" style={{ backgroundColor: '#171718', top: 0, height: '75px', position: 'sticky', color: '#47D16E', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 5%' }} id='nav'>
            <div style={{ width: '10%' }}>
                <h2>Carolina Visentin</h2>
            </div>
            <ul className="menu">
                <li>
                    <a href="#nav">
                        Inicio
                    </a>
                </li>
                <li>
                    <a href="#inicio">
                        Acerca de mi
                    </a>
                </li>
                <li>
                    <a href="#abilities">
                        Habilidades
                    </a>
                </li>
                <li>
                    <a href="#projects">
                        Proyectos
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;