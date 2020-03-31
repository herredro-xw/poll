// CREDITS :
// https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Yyn-fBtGHfN0_xCtBwUkBp

var express = require('express');
var fs = require('fs');


var app = express();
let callback_server = () => {console.log('listening...');}
var server = app.listen(4000, callback_server);
app.use(express.static('.'));

let data = JSON.parse(fs.readFileSync('src/data/questions.json'));
console.log(data);

const addQuestion = (request, response) => {
  let input = request.params;
  let word = input.word;
  let score = Number(input.score);
  data[word] = score;
  console.log("new data: ", data);
  let raw = JSON.stringify(data, null, 2);
  fs.writeFile('src/data.json', raw, ()=>{
    console.log("new data written", data);
    let reply = {
      word:word,
      score:score,
      status:"success"
    }
    response.send(reply);
  });
}

const searchWord = (request, response) => {
  let word = request.params.word;
  let reply;
  if (data[word]){
    reply = {
      status: "found",
      word:   word,
      score:  data[word]
    }
  }else {
    reply = {
      status: "not found",
      word:   "word"
    }
  }
  response.send(reply)
}

const sendAll = (request, response) => {
  response.send((data));
}

app.get('/add/:word/:score', saveQ);
app.get('/search/:word', addQ);
app.get('/all', sendAll);
