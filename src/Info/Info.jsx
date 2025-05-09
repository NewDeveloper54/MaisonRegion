import React from "react";
import { Link } from "react-router-dom"; // Import de Link pour la navigation
import "./Info.css"; // Assurez-vous d'avoir ce fichier CSS pour les styles

const Info = () => {
  return (
    <div className="info-container">
      <div className="info-card">
        <h2>Informations</h2>
        <p><strong>Maison :</strong> REGION GRAND EST</p>

        <p><strong>Téléphone :</strong> 06 12 34 56 78</p>
        <p><strong>Courriel :</strong> contact@structure.com</p>
        <p><strong>Bâtiment / Étage :</strong> Bâtiment A, 2ème étage</p>
        
        {/* Bouton de retour */}
        <Link to="/" className="back-button">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default Info;
