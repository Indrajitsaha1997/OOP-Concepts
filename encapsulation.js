// What is Encapsulation?
// Encapsulation is the practice of bundling related data into a structured unit, along with the methods used to work with that data.

class Player {
// we can make private property in encapsulation also by using #. To mention private property we need to mention those like the following.
// N.B. private properties will not be accessible from outside the class. But it will be accessible inside the class. We can make functions private also by adding # before them. 
// eg,
// #getAge(){
//     const diff_ms = Date.now()- new Date(this.dob).getTime();
//     const age_dt = new Date(diff_ms);
//     return Math.abs(age_dt.getFullYear() - 1970);
//  } 

  #name;

  constructor(name, dob, noOfMonths, monthlySalary){
    this.#name = name;
    this.dob = dob;
    this.noOfMonths = noOfMonths;
    this.monthlySalary = monthlySalary;
  }

  getAge(){
    const diff_ms = Date.now()- new Date(this.dob).getTime();
    const age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getFullYear() - 1970);
  }

  getSalary(){
    return (this.monthlySalary * this.noOfMonths);
  }
}

const Sourav = new Player('Sourav','1997-05-07',12,20000);
const Sachin = new Player("Sachin","1997-12-05",12,10000);

console.log('Sourav Age: ',Sourav.getAge());
console.log('Sourav Salary: ',Sourav.getSalary());
console.log('Sourav DOB: ',Sourav.dob);
// As we made the name property private so the following console log will be undefined
console.log(Sourav.name)

console.log('Sachin Age: ',Sachin.getAge());
console.log('Sachin Salary: ',Sachin.getSalary());
console.log('Sachin Monthly Salary: ',Sachin.monthlySalary);

