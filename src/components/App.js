import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [para, setPara] = useState("");
  const [paraId, setParaId] = useState("");
  const setDetail = () => {
    setPara(
      `Hello, I've learnt to use the full-stack evaluation tool. This makes Me so happy`
    );
    setParaId("para");
  };
  return (
    <div id="main">
      <button id="click" onClick={setDetail}>
        RenderPara
      </button>
      <p id={paraId}>{para}</p>
    </div>
  );
}

export default App;
