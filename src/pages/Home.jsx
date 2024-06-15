
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.scss';
import "../styles/card.scss"
import Header from '../components/Header';
import Banner from '../components/Banner';
import bannerHome from '../assets/banner-home.png';
// import Card from '../components/Card';
import data from '../data/logements.json'; // Assurez-vous que le chemin est correct
import Footer from '../components/Footer';

const Home = () => {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        // Simuler une récupération de données depuis un fichier JSON
        setCardsData(data);
    }, []);

    return (
        <>
            <Header />
            <Banner imageUrl={bannerHome} text="Chez vous et ailleurs"/>
            <div className="cards-container">
        {cardsData.map((card) => (
          <Link to={`/Location/id=${card.id}`} key={card.id} className="card">
            <img src={card.cover} alt={`Cover for ${card.title}`} className="card-image" />
            <div className="card-content">
              <h2 className="card-title">{card.title}</h2>
            </div>
          </Link>
        ))}
      </div>
            <Footer/>
        </>
    );
};

export default Home;