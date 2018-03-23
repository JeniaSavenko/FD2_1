'use strict';

const readline = require('readline');

function askArrLenght() {
  const rl = prompt();
  rl.question('Длинна массива', (answer) => {
    rl.close();
    let arr = [];
    for (var i = 0; i < answer; i++) {
      arr.push(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
    }
    console.log("Исходный массив " + arr);

    for (let i = 0, even = arr.length % 2, n = Math.floor(arr.length / 2); i < n; i++) {
      const temp = arr[i];
      const index = n + i + even;
      arr[i] = arr[index];
      arr[index] = temp;
    }
    console.log("Измененный массив " + arr);
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
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
}

askArrLenght();
