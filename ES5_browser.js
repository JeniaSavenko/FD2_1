function switchL () {
  var firstname = prompt("Имя"),
      lastName = prompt("Фамилия"),
      year = prompt("Сколько вам лет?"),
      gender = confirm("Ващ пол мужской?"),
      nameLabel = document.getElementById("name"),
      yearLabel = document.getElementById("year"),
      daysLabel = document.getElementById("days"),
      fiveYearLabel = document.getElementById("fiveyears"),
      genderLabel = document.getElementById("gender"),
      pensionLabel = document.getElementById("pension");

  nameLabel.innerHTML = "Ваше имя:" + " " + firstname + " " + lastName;
  yearLabel.innerHTML = "Ваш возраст в годах:" + " " + year;
  daysLabel.innerHTML = "Ваш возраст в днях:" + " " + (year * 365);
  fiveYearLabel.innerHTML = "Ваш возраст через 5 лет:" + " " +  (+year+5);
  if(gender){
    genderLabel.innerHTML = "Ваш пол мужской";
  }else {
    genderLabel.innerHTML = "Ваш пол женский";
  }
  if(year > 60){
    pensionLabel.innerHTML = "вы на пенсии: да";
  }else {
    pensionLabel.innerHTML = "вы на пенсии: нет";
  }

}

switchL();




