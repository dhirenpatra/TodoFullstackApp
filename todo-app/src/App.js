import React from 'react';
import logo from './logo.svg';
import './App.css';

import FirstComponent from './components/learning-components/FirstComponent';
import SecondComponent from './components/learning-components/SecondComponent';
import ThirdComponent from './components/learning-components/ThirdComponent';

function App() {
  return (
    <div className="App">
      Hello From React
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
    </div>
  );
}

export default App;
