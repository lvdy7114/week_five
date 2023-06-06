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
//Set Gus's owner to the string "Timmy." 
class Hamster {
  constructor(name) {
    this.owner = "Timmy";
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

//hamster.wheelRun();
//hamster.eatFood();
//hamster.getPrice();

/*Person Class
Create a Person class with the following requirements met:
Attributes:
name - set name from a parameter in the constructor method.
age- initially 0
height - initially 0
weight - initially 0
mood - integer starting at 0 initially
hamsters - empty array initially
bankAccount - initially set to 0
Methods:
getName() - returns name.
getAge() - returns age.
getWeight() - returns weight.
greet() - logs a message with person's name.
eat() - increment weight, increment mood.
exercise() - decrement weight.
ageUp() - increment age, increment height, increment weight, decrement mood, increment bankAccount by 10 (birthday money).
buyHamster(hamster) - push the hamster object onto the hamsters array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice()).
🔴 Hard Mode - Save & Commit your work!
Your commit message should read something like: "created Person class".
🟢 Normal Mode - Make sure it works so far.
*/

class Person {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }
  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }
  getWeight() {
    return this.weight;
  }
  greet() {
    console.log(`Hello, I'm ${this.name}. Nice to meet you.`);
  }
  eat() {
    this.weight++; this.mood++;
  }
  exercise() {
    this.weight--;
  }
  ageUp() {
    this.age++; this.height++; this.weight++; this.mood--; this.bankAccount += 10; 
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster); this.mood += 10; 
    this.bankAccount -= hamster.getPrice(); 
  }

}

//person.getName();
//person.getAge();
//person.getWeight();
//person.greet();
//person.eat();
//person.exercise();
//person.ageUp();


/*Create a Story
Feel free to update or add methods to automate some of these tasks.
At this point, Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. 
Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. 

🔴 Hard Mode - Save & Commit your work!
Your commit message should read something like: "created Timmy's story".
🟢 Normal Mode - Make sure it works so far.
*/
//Instantiate a new Person named Timmy.
const person = new Person("Timmy");
//Age Timmy five years.
person.ageUp();
person.ageUp();
person.ageUp();
person.ageUp();
person.ageUp(); 
//Have him eat five times to improve his mood.
person.eat();
person.eat();
person.eat();
person.eat();
person.eat();
//Have him exercise five times.
person.exercise();
person.exercise();
person.exercise();
person.exercise();
person.exercise();
//Age Timmy 9 more years.
person.ageUp();person.ageUp();person.ageUp();
person.ageUp();person.ageUp();person.ageUp();
person.ageUp();person.ageUp();person.ageUp();
//Create a Hamster named "Gus."
const hamster = new Hamster("Gus");
//Set Gus's owner to the string "Timmy." 
//put his name in the object
//Have Timmy "buy" Gus.
person.buyHamster(hamster);
//Age Timmy more 15 years.
person.ageUp();person.ageUp();person.ageUp();person.ageUp();person.ageUp();
person.ageUp();person.ageUp();person.ageUp();person.ageUp();person.ageUp();
person.ageUp();person.ageUp();person.ageUp();person.ageUp();person.ageUp();
//Have Timmy eat twice.
person.eat();person.eat();
//Have Timmy exercise twice.
person.eat();person.eat();
console.log(person);
