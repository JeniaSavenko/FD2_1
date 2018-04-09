class HashStorage {
  constructor(){
    let obj = {};
    this.getValue = (key) => { return obj[key] };
    this.addValue = (key, value) =>{obj[key] = value};
    this.deleteValue = (key) => {return delete obj[key]};
    this.getKeys = () => {
      let temp = [];
      for(let key in obj){
        temp.push(key);
      }
      return temp;
    }
  }
}

var drink = new HashStorage();

function addValue() {
  drink.addValue(prompt("Название напитка"), [confirm("Он алкогольный"), prompt("Рецепт напитка")]);
}

function getValue() {
  let nameDrink = prompt("Название напитка");
  let test = drink.getValue(nameDrink);
  if (test[0]=== true){
    alert(`Название напитка ${nameDrink}\n алкогольный: да\n рецепт: ${test[1]}`);
  }else {
    alert(`Название напитка ${nameDrink}\n алкогольный: нет\n рецепт: ${test[1]}`);
  }

}

function deleteValue() {
  let nameDrink = prompt("Название напитка");
  drink.deleteValue(nameDrink);
  alert(`Напиток ${nameDrink} удален`)
}

function getAllValue() {
  alert(drink.getKeys());
}