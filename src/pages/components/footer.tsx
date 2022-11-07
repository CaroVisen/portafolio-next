import React from "react";
import { AiFillLinkedin } from 'react-icons/ai'

const Footer = ({

}) => {
    return (
        <div className="foot" style={{ backgroundColor: '#171718', height: '75px', bottom: 0, color: '#47D16E', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 5%' }} id='foot'>
            <a href="https://www.linkedin.com/in/carolina-visentin-5959a816a/" style={{ textAlign: 'center', display: 'flex', margin: 'auto' }} rel="noreferrer" target="_blank">
                <AiFillLinkedin size={25} />
                <p style={{ textAlign: 'center', paddingLeft: '10px' }}> Caro Visentin</p>
            </a>
        </div>
    )
}

export default Footer;