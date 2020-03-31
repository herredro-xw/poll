## Purpose
This project is meant to help me get into JS & React. 

It should become a React Component that displays Poll-Questions saved in a JSON.

## Functionality
### The user should be able to:
1. select pre-defined answers for each question. 
2. look up the stats for each question (in the future - might not even be implemented)

## Setup
1. `App.js` renders `QuestionsContainer.js`
2. `QuestionsContainer.js` renders `Question.js`, `Answers.js` & `Options.js` 
- `Question` renders the question as `h1`
- `Answers` renders multiple `Checkbox` (`Elementary.js`) Components
- `Options` renders the buttons "next", "back", "reset"
**`QuestionContainer contains all the logic so far`**


## Components
- `Answers`
- `Options` (being a sibling component of Answers (if that makes sense))
