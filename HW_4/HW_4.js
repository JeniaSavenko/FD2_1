'use strict';

var vowels = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"],
    askString = prompt(),
    conter = 0,
    sourses = document.getElementById("sources"),
    vowelsNumber = document.getElementById("vowels");
(function () {
  for(let i = 0, n = askString.length; i<n; i++){
    for(let j = 0, k = vowels.length; j<k; j++){
      if(askString[i] === vowels[j]){
        conter++;
      }
    }
  }
  return conter;
})();

sourses.innerHTML = `Исходная строка: ${askString}`;
vowelsNumber.innerHTML = `Колличество гласных: ${conter}`;
console.log(conter);