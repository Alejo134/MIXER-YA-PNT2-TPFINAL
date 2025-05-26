import { FactorySamples } from '../FactorySamples/factorySamples.jsx';
import { getSampleAudios } from '../../services/sampleService';

const audios = getSampleAudios()

export const SampleBar = () => {
  return (
    <div>
      <FactorySamples audios={audios} />
    </div>
  );
};
