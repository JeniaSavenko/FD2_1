'use strict';

var vowels = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"],
    askString = prompt(""),
    strin = askString.split(''),
    conter = 0,
    cont = 0,
    sourses = document.getElementById("sources"),
    vowelsNumber = document.getElementById("vowels");
strin.forEach(function (elem) {
  if (vowels.indexOf(elem) > -1) {
    conter++;
  }
});

strin.filter(function (elem) {
  if (vowels.indexOf(elem) > -1) {
    cont++;
  }
});


console.log(conter);
console.log(cont);
sourses.innerHTML = `Исходная строка: ${askString}`;
vowelsNumber.innerHTML = `Колличество гласных: ${conter}`;
