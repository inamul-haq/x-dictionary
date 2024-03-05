import './App.css';
import React, { useState } from 'react';

const initialDictionary = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const handleSearch = () => {
    const foundWord = initialDictionary.find(item => item.word.toLowerCase() === searchTerm.toLowerCase());
    setSearchResult(foundWord ? foundWord.meaning : "Word not found in the dictionary.");
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <div>
        <input 
          type="text" 
          placeholder="Search for a word" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <button onClick={handleSearch}>Search</button>
        <h4>Definition:</h4>
      </div>
      <div>
        <p>{searchResult}</p>
      </div>
    </div>
  );
}

export default App;
