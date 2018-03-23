var save = localStorage.getItem("save");
var anketa = {};
if(!save){
      anketa.firstname = prompt("Имя");
      anketa.lastName = prompt("Фамилия");
      anketa.year = prompt("Сколько вам лет?");
      anketa.gender = confirm("Ващ пол мужской?");
localStorage.setItem("save", JSON.stringify(anketa));
}else {
  anketa = JSON.parse(save);
}
var nameLabel = document.getElementById("name"),
    yearLabel = document.getElementById("year"),
    daysLabel = document.getElementById("days"),
    fiveYearLabel = document.getElementById("fiveyears"),
    genderLabel = document.getElementById("gender"),
    pensionLabel = document.getElementById("pension");
nameLabel.innerHTML = "Ваше имя:" + " " + anketa.firstname + " " + anketa.lastName;
yearLabel.innerHTML = "Ваш возраст в годах:" + " " + anketa.year;
daysLabel.innerHTML = "Ваш возраст в днях:" + " " + (anketa.year * 365);
fiveYearLabel.innerHTML = "Ваш возраст через 5 лет:" + " " +  (+anketa.year+5);
if(anketa.gender){
  genderLabel.innerHTML = "Ваш пол мужской";
}else {
  genderLabel.innerHTML = "Ваш пол женский";
}
if(anketa.year > 60){
  pensionLabel.innerHTML = "вы на пенсии: да";
}else {
  pensionLabel.innerHTML = "вы на пенсии: нет";
}


