import React, { useState, useEffect } from "react";
import { Howl } from "howler";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";

export const Control = ({ src }) => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const s = new Howl({
      src: [src],
      html5: true,
      volume: volume,
      onend: () => setIsPlaying(false),
    });
    setSound(s);
    return () => {
      s.unload();
    };
  }, [src]);

  useEffect(() => {
    if (sound) {
      sound.volume(volume);
    }
  }, [volume, sound]);

  const play = () => {
    if (isPlaying) return  // Si sacamos esta coondición, por cada play inicia el sample de nuevo.

    if (sound) {
      sound.play();
      setIsPlaying(true);
    }
  };

  const pause = () => {
    if (sound) {
      sound.pause();
      setIsPlaying(false);
    }
  };

  const stop = () => {
    if (sound) {
      sound.stop();
      setIsPlaying(false);
    }
  };

  const handleChange = (event, newValue) => {
    setVolume(newValue);
  };

  return (
    <div>
      <button onClick={play}>Play</button>
      <button onClick={pause} disabled={!isPlaying}>
        Pause
      </button>
      <button onClick={stop} disabled={!isPlaying}>
        Stop
      </button>

      <Stack spacing={2} direction="row" sx={{ alignItems: "center", mb: 1 }}>
        <VolumeDown />
        <Slider
          aria-label="Volume"
          value={volume}
          min={0}
          max={1}
          step={0.01}
          onChange={handleChange}
        />
        <VolumeUp />
      </Stack>
    </div>
  );
};


