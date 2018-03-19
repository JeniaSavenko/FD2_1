var arr = [];
for (var i = 0; i < 7; i++)
  arr.push(Math.floor(Math.random()*(10-1+1))+1);
console.log(arr);

(function () {
  let len = (arr.length-1)/2;
  for (var i = 0; i<len; ++i){
    arr.push(arr[0]);
    arr.splice(0, 1);
  }
  arr.splice(len+1, 0, arr[0]);
  arr.splice(0, 1);
  console.log(arr);
})();


var arr2 = [];
for (var i = 0; i < 9; i++)
  arr2.push(Math.floor(Math.random()*(10-1+1))+1);
console.log(arr2);

(function () {
  let len = (arr2.length-1)/2;
  for (var i = 0; i<len; ++i){
    arr2.push(arr2[0]);
    arr2.splice(0, 1);
  }
  arr2.splice(len+1, 0, arr2[0]);
  arr2.splice(0, 1);
  console.log(arr2);
})();

