import { FactorySamples } from '../FactorySamples/factorySamples.jsx';
import { useSamples } from '../../hooks/useSamples.jsx';

export const SampleBar = () => {

  const audios = useSamples()

  return (
    <div>
      <FactorySamples audios={audios} />
    </div>
  );
};
