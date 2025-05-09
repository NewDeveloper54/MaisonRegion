import React from "react";
import { createRoot } from "react-dom/client"; // Importation correcte de createRoot
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"; // Composant principal de ton application
import Video from "./Main/Video";


// Sélectionner l'élément racine du DOM
const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // Créer la racine

// Rendu de l'application avec React Router
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<App />} /> {/* Page d'accueil */}
      <Route path="/video" element={<Video />} />

    </Routes>
  </BrowserRouter>
);
