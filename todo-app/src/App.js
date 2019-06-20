import React from 'react';
import './App.css';
import './bootstrap.css';

import FirstComponent from './components/learning-components/FirstComponent';
import SecondComponent from './components/learning-components/SecondComponent';
import ThirdComponent from './components/learning-components/ThirdComponent';
import Counter from './components/counter/Counter';
import Todo from "./components/todo-app/Todo"
function App() {
  return (
    <div className="App">
      {/*Hello From React
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />

      Counter Application started from here ...
      <br/><br/><br/><br/>
  <Counter />*/}
      <Todo />
    </div>
  );
}

export default App;
