class Person {
  constructor(name){
    this.name = name;
  }



  marriage(person){

  }
}

class Man extends Person{
  constructor(name){
    super(name);
    this.isMan = true;
  }


  marriage(person){
    if(this === person)return;

    if(this.isMan !== person.isMan){
    this.partner = person;
    this.partner.marriage(this);
    }else {
      console.log("pidari");
    }

  }

  whoIsYourPartner(){
    console.log(this.name + ">" + this.partner.name);
  }

}

class Woman extends Person{
  constructor(name){
    super(name);
    this.isMan = false;
  }


  marriage(person){
    if(this === person)return;

    if(this.isMan !== person.isMan){
      this.partner = person;
      this.partner.marriage(this);
    }else {
      console.log("pidari");
    }
  }

  whoIsYourPartner(){
    console.log(this.name + ">" + this.partner.name);
  }

}


var vasya = new Man("Vasya");
var tanuha = new Woman("tanuha");
var kolya = new Man("kolya");



vasya.marriage(tanuha);
vasya.whoIsYourPartner();
tanuha.whoIsYourPartner();

vasya.marriage(kolya);