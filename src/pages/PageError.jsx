import React from 'react';
import { Link } from "react-router-dom"
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/pageerror.css";


const PageError = () => {
    return (
        <div>
            <Header/>
        <div className='error commun-error'>
                    <span>404</span>
                    <h4>Oups! La page que vous demandez n'existe pas.</h4>
                    <p><Link to="/">Retourner sur la page d’accueil</Link></p>
         </div>
         <Footer/>
         </div>
    );
    
};

export default PageError;