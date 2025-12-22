import "./Radio.module.css";
import { data } from "./Data.ts";
import React, { useState, useRef } from "react";



const Radio = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const channel = data;
  const radioRef = useRef<HTMLAudioElement>(null);

  //Error handling
  const handleError = () => {
    setError("The channel is unavailable at the moment.");
    setLoading(false);

  }

  const handleLoadStart = () => {
    setLoading(true);
    setError("");
  }

  const handleCanPlay = () => {
    setLoading(false);
  }

  //Changing Channels
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const index = parseInt(e.target.value);
      setSelectedIndex(index);
  }

  //Adjusting volume 
  const handleVolumeIncrease = () => {
    if(radioRef.current && radioRef.current.volume < 1){
      radioRef.current.volume += 0.1; 
      }
    }

  const handleVolumeDecrease = () => {
    if(radioRef.current && radioRef.current.volume > 0){
      radioRef.current.volume -= 0.1;
    }
  }

  return (
    <div className="radio-container">
      <h1>
        <span>Sri Lankan Radio</span></h1>
      {loading && <p>Loading stream...</p>}
      {error && <p>Error: {error}</p>}

      <section>
      <div>
        <img 
          src={channel[selectedIndex].image} 
          alt={channel[selectedIndex].value}
          onError={handleError}
        />
      </div>
      <div>
        <select onChange={handleSelectChange} value={selectedIndex} >
          {channel.map((option, index ) => (
            <option key={index} value={index} aria-label={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      <div>
        <audio controls 
          src={channel[selectedIndex].audio} 
          ref={radioRef}
          onError={handleError}
          onLoadStart={handleLoadStart}
          onCanPlay={handleCanPlay}
        />
      </div>
      <div>
        <button onClick={handleVolumeIncrease} type="button" aria-label="Increase Volume">🔉🔺</button>
        <button onClick={handleVolumeDecrease} type="button" aria-label="Decrease Volume">🔉🔻</button>
      </div>
      </section>
    </div>
  );
    
};

export default Radio;