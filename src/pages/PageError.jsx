import React from 'react';
import { Link } from "react-router-dom"
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/pageError.scss";


const PageError = () => {
    return (
        <>
            <Header/>
            <div className='error-container'>
                    <div className='error-container__number'>
                    <h1>404</h1>
                    </div>
                    <div className='error-container__title'>
                    <h4>Oups! La page que vous demandez n'existe pas.</h4>
                    </div>
                   <div className='error-container__subtitle'> 
                    <p><Link to="/">Retourner sur la page d’accueil</Link></p>
                   </div>
                   
           </div>
         <Footer/>
         </>
    );
    
};

export default PageError;