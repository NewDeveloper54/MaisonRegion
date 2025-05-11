import React, { useState } from "react";
import { Links } from "./Header/NavBar";
import Main from "./Main/Main";
import Info from "./Info/Info";
import { Routes, Route } from "react-router-dom";
import { infosData } from "./Info/infosData";

const App = () => {
  const [isBlack, setIsBlack] = useState(true);

  const chnageColor = () => {
    setIsBlack(prevState => !prevState);
  };

  return (
    <Routes>
      <Route path="/" element={<Main isBlack={isBlack} />} />
      <Route path="/Info/:id" element={<Info data={infosData} />} />
    </Routes>
  );
};

export default App;
