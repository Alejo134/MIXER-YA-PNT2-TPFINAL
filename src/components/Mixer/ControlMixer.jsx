import './controlMixer.css';

export const Control = ({ agregar, quitar }) => {
    
  return (
    <div className="control">
      <button onClick={agregar}>Agregar flujo de sonidos</button>
      <button onClick={quitar}>Quitar flujo</button>
    </div>
  );
};
