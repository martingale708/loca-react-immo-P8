
import React from 'react';
import { useParams } from 'react-router-dom';
import records from '../data/logements.json'; // Importez votre fichier logements.json
import Header from "../components/Header";
import Collapse from "../components/Collapse";
import SlideShow from '../components/SlideShow';
import "../styles/header.scss"
import "../styles/location.scss";
import Footer from "../components/Footer";
import PageError from "../pages/PageError";

const arrayStars = [1, 2, 3, 4, 5];

function Location() {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const cleanId = id.replace('id=', ''); // Enleve le préfixe 'id='
  console.log("ID Logement:", cleanId); // Log pour vérifier l'ID nettoyé

  // Log pour vérifier les données importées
  console.log("Records:", records);

  // Afficher tous les IDs présents dans records
  records.forEach((record) => console.log("ID dans records:", record.id));

  // Normalisez l'ID avant la comparaison
  const record = records.find((element) => {
    return element.id === cleanId;
  });

  console.log("Record trouvé:", record); // Log pour vérifier le record trouvé

  if (!record) {
    return <PageError />;
  }
  const equipements = record.equipments.map((element, index) => (
    <li className="description-content" key={`equip-${index}`}>
      {element}
    </li>
  ));

  return (
    <>
        <Header />
      <div className="logement">
        <SlideShow pictures={record.pictures} />
        <div className="ficheLogement">
          <div className="div-description">
            <h1>{record.title}</h1>
            <h4>{record.location}</h4>
            <div className="div-tags">
              {record.tags.map((element, index) => (
                <p className="tags" key={`tags-${index}`}>
                  {element}
                </p>
              ))}
            </div>
          </div>
          <div className="bloc-stars">
            <div className="div-etoiles">
              <p>{record.host.name}</p>
              <img src={record.host.picture} alt={record.title} />
            </div>
            <div className="stars">
              {arrayStars.map((element) => (
                <span
                  key={`star-${element}`}
                  className={element <= parseInt(record.rating) ? 'span1' : 'span2'}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="collapseLogement">
          <Collapse title="Description" content={record.description} />
          <Collapse title="Equipements" content={equipements} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Location;