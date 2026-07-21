class Student{
    constructor(name,roll){
        this.name = name;
        this.Roll = roll;
    }
}
const s1 = new Student("Shiva","1143")
console.log(s1);

class BankAccount{
    constructor(balance){
        this.balance = balance;
    }
}

const acc = new BankAccount(1000)
console.log(acc);

acc.balance = 500   // anyone can change the balance this is bad
console.log(acc);



// Encapsulation
//    directly nhi acces kr skte property function run krna padega
class bankAccount {
    #balanc

    constructor(bal){
        this.#balanc = bal;
    }

 deposit(amount){
    this.#balanc += amount;
  }

  withdraw(amt){
    if(this.#balanc > amt) {
        this.#balanc -= amt;
    }
    else{
        console.log('Insufficient data')
    }
  }

    getBal(){
        return this.#balanc;
    }
}

const shivaAcc = new bankAccount(100000000)
console.log(shivaAcc);  //bankAccount {}

console.log(shivaAcc.getBal());


shivaAcc.deposit(100000000);
console.log(shivaAcc.getBal());

shivaAcc.withdraw(1)
console.log(shivaAcc.getBal());


// console.log(shivaAcc.balanc);   // this will not work 



// Abstraction
class CoffeeMachine {

    makeCoffee() {
        this.#boilWater();
        this.#addCoffee();
        this.#serveCoffee();

        console.log("Coffee is Ready!");
    }

    #boilWater() {
        console.log("Boiling Water...");
    }

    #addCoffee() {
        console.log("Adding Coffee...");
    }

    #serveCoffee() {
        console.log("Serving Coffee...");
    }
}

const machine = new CoffeeMachine();

machine.makeCoffee();
machine.#boilWater(); // you cannot call tha private function 

