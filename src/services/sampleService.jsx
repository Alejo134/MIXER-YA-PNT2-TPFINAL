const samples = () => [
  'https://cdn.jsdelivr.net/gh/lunu-bounir/audio-equalizer/test/mono-8000hz.mp3',
  'https://cdn.jsdelivr.net/gh/lunu-bounir/audio-equalizer/test/both.ogg',
  'https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-sonic-soundfx/Sonic_Soundfx_MUSCInst_Harmonica_Phrase_06.mp3',
];

const getSamples = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sampleList = samples()
      if (sampleList.length > 0) {
        resolve(sampleList)
      } else {
        reject(new Error('No samples found'))
      }
    }
    , 1000)
  })
}

export { getSamples };

