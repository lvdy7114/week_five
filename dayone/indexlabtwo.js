//Static Methods, Static Properties, and Inheritance
/*There is only one Governor in the state; add static methods and properties you'd expect a Governor to have.
Log the properties and test the methods (but don't instantiate an object of the class).
*/
class Governor {
    static staticIntro = 'I am the Governor';
    static staticUpdates = 'You can find current updates about the state on the government website.';
    static staticVote() {
      return 'Thanks for voting for me!';
    }
    static staticServe() {
        return 'I look forward to serving this great state!';
      }
    static {
      console.log('Welcome citizens of the state!');
    }
  }
  console.log(Governor.staticIntro);
  console.log(Governor.staticUpdates);
  console.log(Governor.staticVote());
  console.log(Governor.staticServe());

//Inheritance
/*For the Person class:
Think of three properties all people share, and set them with the constructor.
Think of three methods all people share, and create them.
*/

class Person {
    constructor (name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
    intro() {
        console.log(`${this.name} is ${this.age} years old from ${this.location}.`);
      }
    speak() {
        console.log(`${this.name} says hello to everyone.`)
      }
    walking() {
        console.log(`${this.name} starts walking.`);
      }
}
const person = new Person('Sarah',41,'Alaska');
person.speak();
person.intro();
person.walking();
 
//Create a PostalWorker class that inherits from Person, and add some methods specific to postal workers.
//Create a Chef class that inherits from Person, and add some methods specific to chefs.
//Create two PostalWorkers and two Chefs. Log them and test all of their methods.

class PostalWorker extends Person {
    constructor(name, age, location) {
        super(name, age, location);
        this.name = name;
        this.age = age;
        this.location = location;
      }
      deliverMail() {
        console.log(`${this.name} delivers mail in ${this.location} as a Postal worker.`);
      }
      explainMail() {
        console.log(`${this.name} enjoys delivering mail and walking as a ${this.age} year old.`);
      }
      
}
const postalworker = new PostalWorker('Lars', 45, 'New York City');
const postalworker1 = new PostalWorker('Jack', 43, 'Boston');

postalworker.speak();
postalworker.explainMail();
postalworker.deliverMail();
postalworker.walking();
postalworker1.speak();
postalworker1.explainMail();
postalworker1.deliverMail();
postalworker1.walking();

class Chef extends Person {
    constructor(name, age, location) {
        super(name, age, location);
        this.name = name;
        this.age = age;
        this.location = location;
    }
    cooksMeals() {
        console.log(`${this.name} is a Chef in ${this.location}.`);
    }
    explainChef() {
        console.log(`${this.name} enjoys cooking and being a Chef at ${this.age}.`)
    }
}

const chef = new Chef('Nana', 48, 'Paris');
const chef1 = new Chef('Nikky', 48, 'London');

chef.speak();
chef.cooksMeals();
chef.explainChef();

chef1.speak();
chef1.cooksMeals();
chef1.explainChef();

/*One Step Further- This section is optional, but complete it if you have the time.
Create the following classes using the given information.

Class	Derived From	Properties	Methods
BankAccount	n/a	ownerName, balance, acctNum	deposit, withdraw
CheckingAccount	BankAccount	overdraftEnabled	Override withdraw to implement an overdraft feature.
SavingsAccount	BankAccount	None	Override withdraw to disallow withdrawals completely.
acctNum should be generated within the constructor of BankAccount, not passed in as an argument.
*/

//bank account activity.

class BankAccount {
  //properties
  constructor(ownerName, balance, acctNum) {
    this.ownerName = ownerName;
    this.balance = balance;
    this.acctNum = acctNum;
  }
    //methods
    deposit() {
      balance++;

    }
    withdraw() {
      balance--;

    }
  }

class CheckingAccount extends BankAccount {
  constructor(overdraftEnabled) {
    super(ownerName, balance, acctNum);
    this.ownerName = this.ownerName;
    this.balance = this.balance;
    this.acctNum = this.acctNum;
    this.overdraftEnabled = overdraftEnabled;  
  }

  //method - Override withdraw to implement an overdraft feature.
}

class SavingsAccount extends BankAccount {
  //method Override withdraw to disallow withdrawals completely.
}

//acctNum should be generated within the constructor of BankAccount, not passed in as an argument.