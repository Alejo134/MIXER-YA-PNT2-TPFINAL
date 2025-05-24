import React from 'react';
import { Control } from '../Control/control.jsx';

export const FactorySamples = ({ audios }) => {
  return (
    <>
      {audios.map((src, i) => (
        <div key={i}>
          <h3>Sound {i + 1}</h3>
          <Control src={src} />
        </div>
      ))}
    </>
  );
};
