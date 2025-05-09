import React, { useState } from "react";
import { Links } from "./Header/NavBar";
import Main from "./Main/Main";
import Info from "./Info/Info";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [isBlack, setIsBlack] = useState(true);

  const chnageColor = () => {
    setIsBlack(prevState => !prevState);
  };

  return (
    <Routes>
      <Route path="/" element={<Main isBlack={isBlack} />} />
      <Route path="/Info" element={<Info />} />
    </Routes>
  );
};

export default App;
