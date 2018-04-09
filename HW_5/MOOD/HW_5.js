"use strict";

function randomDiap(n, m) {
  return Math.floor(Math.random() * (m - n + 1)) + n;
}

function mood(colorsCount) {
  var color = ['', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый'];
  var repeat = {'':''};
  console.log('pisya: ' + colorsCount);
  for (var i = 1; i <= colorsCount; i++) {
    var n = randomDiap(1, 7);
    var colorName = color[n];

    if (!Object.keys(repeat).includes(colorName)){
      repeat[colorName] = true;
      console.log(colorName);
    }
  }
}

mood(100);