'use strict';

const readline = require('readline');

var gender;

const result = {
  firstName:'',
  lastName:'',
  age:0,
}

function askFirstName() {
  const rl = prompt();
  rl.question('Имя? ', (answer) => {
    rl.close();
    if (!answer) {
      console.log('Имя не может быть пустым.');
      askFirstName();
    }
    else {
      result.firstName = answer;
      askLastName();
    }
  });
}

function askLastName() {
  const rl = prompt();
  rl.question('Фамилия? ', (answer) => {
    rl.close();
    if (!answer) {
      console.log('Имя не может быть пустым.');
      askLastName();
    }
    else {
      result.lastName = answer;
      askAge();
    }
  });
}


function askAge() {
  const rl = prompt();
  rl.question('Какой Ваш возраст? ', (answer) => {
    rl.close();
    const age = +answer;
    if (isNaN(age)) {
      console.log('Возраст должен быть введен числом.');
      askAge();
    }
    else {
      result.age = age;
      askGender();
    }
  });
}


function askGender() {
  const rl = prompt();
  rl.question('Вы мужчина?(да || нет) ', (answer) => {
    rl.close();
    if (answer === "да"){
      gender = "мужской";
      end();
    }
    else {
     gender = "женский";
     end();
    }
  });
}

function prompt() {
  return readline.createInterface({ input: process.stdin,  output: process.stdout});
}

function end() {

  let fiveyear = result.age + 5,
      days = result.age * 365;

  console.log(`Ваше имя: ${result.firstName} ${result.lastName}, возраст: ${result.age}, возраст в днях: ${days}, возраст через 5 лет: ${fiveyear}, пол: ${gender}`);
}

askFirstName();