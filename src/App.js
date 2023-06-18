import React, { useState } from 'react';
import flagsData from './flags.json'; // Assuming the JSON file is in the same directory

const RandomFlagGenerator = () => {
  const [randomIndex, setRandomIndex] = useState(null);
  const [name, setName] = useState('');
  const [svg, setSvg] = useState('');

  const generateRandomFlag = () => {
    const randomIndex = Math.floor(Math.random() * flagsData.length);
    const { name, svg } = flagsData[randomIndex];
    setRandomIndex(randomIndex);
    setName(name);
    setSvg(svg);
  };

  return (
     <nav class="navbar">
        <div class="navbar-container">
          <
          <a href="file:///F:/allhackthons/pridehack/welcome.html#" class="navbar-logo">
            <img src="logo-png-removebg-preview (1).png" alt="Logo">
          </a>
        </div>
      </nav>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h2 style={{color: 'pink'}}>Generate And Get Aware Of Pride Flags!</h2>
       {randomIndex !== null && (
        <div>
          <h3 style={{color: 'white'}}>{name}</h3>
          <div class="image" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            
            <div  style={{ width: '500px',display: 'flex', justifyContent: 'center', alignItems: 'center' }} dangerouslySetInnerHTML={{ __html: svg }} /></div>
          
        </div>
      )}
      
      <button style={{marginTop:'15%'}}class="button" onClick={generateRandomFlag}><span>Click!</span><span>generate a flag</span></button>
     
    </div>
  );
};

export default RandomFlagGenerator;
