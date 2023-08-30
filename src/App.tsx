import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import InputPage from "./components/InputPage";

function App() {
  const handleUsernameSubmit = (username: string) => {
    console.log("Submitted username:", username);
    // Perform any necessary actions with the username
  };

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<InputPage onUsernameSubmit={handleUsernameSubmit} />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
