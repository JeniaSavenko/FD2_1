'use strict';

const readline = require('readline');

function askArrLenght() {
  const rl = prompt();
  rl.question('Длинна массива ', (answer) => {
    rl.close();
    let arr = [];
    for (var i = 0; i < answer; i++) {
      arr.push(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
    }
    console.log(arr);


    (function () {
      let len = (arr.length - 1) / 2;
      for (var i = 0; i < len; ++i) {
        arr.push(arr[0]);
        arr.splice(0, 1);
      }
      arr.splice(len + 1, 0, arr[0]);
      arr.splice(0, 1);
      console.log(arr);
    })();
    askAnother();
  });
}


function askAnother() {
  const rl = prompt();
  rl.question('Еще?(да || нет) ', (answer) => {
    rl.close();
    if (answer === "да") {
      askArrLenght()
    }

  });
}

function prompt() {
  return readline.createInterface({ input: process.stdin,  output: process.stdout});
}

 askArrLenght();
