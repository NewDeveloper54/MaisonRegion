import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Info.css";

const Info = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const info = data[id];

  if (!info) return <p>Données introuvables</p>;

  return (
    <div className="info-container">
      <div className="info-card">
        <h2>{info.name}</h2>
        <p><strong className="pp">Téléphone </strong> : {info.telephone}</p>
        <p><strong className="pp">Courriel </strong>: {info.courriel}</p>
        <p><strong className="pp">Bâtiment / Étage </strong>: {info.batimentEtage}</p>

        <button onClick={() => navigate(-1)} className="back-button">
          Retour en arrière
        </button>
      </div>
    </div>
  );
};

export default Info;
