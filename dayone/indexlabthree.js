//7.3 - Classes and Factories
/*Hamster Class
Create a Hamster class with the following requirements met:
Attributes:
owner - string, initially set as an empty string.
name - string, set the name from a parameter in the constructor method.
price - integer, set as 15.
Methods:
wheelRun() - log "squeak squeak".
eatFood() - log "nibble nibble".
getPrice() - return the price.
🔴 Hard Mode - Save & Commit your work!
Your commit message should read something like: "created Hamster class".
🟢 Normal Mode - Make sure it works so far.
*/
class Hamster {
  constructor(name) {
    this.owner = " ";
    this.name = name;
    this.price = 15;
  }
  wheelRun() {
    console.log('squeak squeak');
  }
  eatFood() {
    console.log('nibble nibble');
  }
  getPrice() {
   return this.price;
  }

}

const hamster = new Hamster("test");
hamster.wheelRun();
hamster.eatFood();
hamster.getPrice();

