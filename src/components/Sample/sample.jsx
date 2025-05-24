import { FactorySamples } from '../FactorySamples/factorySamples.jsx';
import { getSampleAudios } from '../../services/sampleService';

const audios = getSampleAudios()

export const Sample = () => {
  return (
    <div>
      <FactorySamples audios={audios} />
      <br />
    </div>
  );
};
