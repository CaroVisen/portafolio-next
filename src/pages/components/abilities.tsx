import React from "react";
import { FaReact, FaAngular, FaNodeJs } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoJavascript, IoLogoCss3 } from 'react-icons/io';
import { SiTypescript, SiNextdotjs } from 'react-icons/si';

const Abilities = ({

}) => {
    return (
        <div style={{ backgroundColor: '#171718', }} id='abilities'>
            <h1 style={{ color: '#fff', textAlign: 'center', }}>Habilidades</h1>
            <div style={{ display: 'flex' }} className='carrousel'>
                <div className="cardAbilitie">
                    <AiFillHtml5 color="#47D16E" size={100} style={{ margin: '20% 25% 5% 25%', width: '50%', height: '50%' }} />
                    <p style={{ color: '#fff', textAlign: 'center', fontSize: '1.5em' }}>HTML</p>
                </div>
                <div className="cardAbilitie">
                    <IoLogoCss3 color="#47D16E" size={100} style={{ margin: '20% 25% 5% 25%', width: '50%', height: '50%' }} />
                    <p style={{ color: '#fff', textAlign: 'center', fontSize: '1.5em' }}>CSS</p>
                </div>
                <div className="cardAbilitie">
                    <IoLogoJavascript color="#47D16E" size={100} style={{ margin: '20% 25% 5% 25%', width: '50%', height: '50%' }} />
                    <p style={{ color: '#fff', textAlign: 'center', fontSize: '1.5em' }}>JavaScript</p>
                </div>
                <div className="cardAbilitie">
                    <SiTypescript color="#47D16E" size={100} style={{ margin: '20% 25% 5% 25%', width: '50%', height: '50%' }} />
                    <p style={{ color: '#fff', textAlign: 'center', fontSize: '1.5em' }}>TypeScript</p>
                </div>

                <div className="cardAbilitie">
                    <FaReact color="#47D16E" size={100} style={{ margin: '20% 25% 5% 25%', width: '50%', height: '50%' }} />
                    <p style={{ color: '#fff', textAlign: 'center', fontSize: '1.5em' }}>React JS</p>
                </div>
                <div className="cardAbilitie">
                    <SiNextdotjs color="#47D16E" size={100} style={{ margin: '20% 25% 5% 25%', width: '50%', height: '50%' }} />
                    <p style={{ color: '#fff', textAlign: 'center', fontSize: '1.5em' }}>Next JS</p>
                </div>
                <div className="cardAbilitie">
                    <FaAngular color="#47D16E" size={100} style={{ margin: '20% 25% 5% 25%', width: '50%', height: '50%' }} />
                    <p style={{ color: '#fff', textAlign: 'center', fontSize: '1.5em' }}>Angular</p>
                </div>
                <div className="cardAbilitie">
                    <FaNodeJs color="#47D16E" size={100} style={{ margin: '20% 25% 5% 25%', width: '50%', height: '50%' }} />
                    <p style={{ color: '#fff', textAlign: 'center', fontSize: '1.5em' }}>Node JS</p>
                </div>
            </div>


        </div>
    )
}

export default Abilities;