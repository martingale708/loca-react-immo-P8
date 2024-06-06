import React from 'react';
import "../styles/footer.css";
import logofooter from "../assets/logo-footer.png";

const Footer = () => {
    return (
        <div className='footer'>
            <img src={logofooter} alt="logo footer" className='footer_image' />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;