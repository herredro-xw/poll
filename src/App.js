import React  from "react";
import QuestionsContainer from './QuestionsContainer'

import './App.css';
import './qs/questions.json';

function App() {
  let quest = require('./qs/questions.json');
  return (
    <QuestionsContainer questions={quest} />
  );
}

export default App;
