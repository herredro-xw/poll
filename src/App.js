import React  from "react";
import QuestionsContainer from './QuestionsContainer'

import './App.css';
import './data/questions.json';

function App() {
  let quest = require('./data/questions.json');


  return (
    <QuestionsContainer data={quest} />
  );
}

export default App;
