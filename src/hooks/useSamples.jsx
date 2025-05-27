import { createContext, useState, useContext, useEffect } from "react"
import { getSamples } from "../services/sampleService.jsx"

export const samplesContext = createContext();

export function SamplesProvider({ children }) {

  const [samples, setSamples] = useState([]);

  useEffect(() => {
    getSamples().then((samples) => {
      setSamples(samples);
    });
  }, []);

  return <samplesContext.Provider value={samples}>{children}</samplesContext.Provider>;

}

const useSamples = () => {
  const sampleContext = useContext(samplesContext);

  if (!sampleContext) {
    throw new Error('useSamples debe ser usado dentro de un samplesProvider');
  }

  return sampleContext;

}

export { useSamples };
