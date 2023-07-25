class Player {
  #name
  #age

  constructor(name, age){
    this.#name = name;
    this.#age = age;
  }

  getPlayerDetails(){
    return `${this.#name} is ${this.#age} years old!`
  }
}

class Cricketer extends Player {
  #centuries
  constructor(name, age, centuries){
    super(name, age);
    this.#centuries = centuries;
  }
}

class Footballer extends Player {
  #goals
  constructor(name, age, goals){
    super(name, age);
    this.#goals = goals;
  }
}

const Sourav = new Cricketer('Sourav', 50, 60);
const Ronaldo = new Footballer("Ronaldo", 50, 0);

console.log(Sourav.getPlayerDetails());
console.log(Ronaldo.getPlayerDetails());