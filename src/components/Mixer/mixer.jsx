import React, { useState } from 'react';
import { Control } from './ControlMixer.jsx';
import './mixer.css';

export const Mixer = () => {
  const [flujos, setFlujos] = useState([0, 1, 2, 3]); 

  const agregarFlujo = () => {
    setFlujos(prev => [...prev, prev.length]);
  };

  const quitarFlujo = () => {
    if (flujos.length > 0) {
      setFlujos(prev => prev.slice(0, -1));
    }
  };

  return (
    <div className="mixer">
      <Control agregar={agregarFlujo} quitar={quitarFlujo} />

      {flujos.map(id => (
        <div key={id} className="flujo">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="subdivision">{(i + 1) * 5}s</div>
          ))}
        </div>
      ))}
    </div>
  );
};
