class Candy {

    // A constructor, to give initial arguments.
    constructor(name, price) {
  
      // We can define attributes stored on the instance with `this`
      this.name = name;
      this.price = price
    }
  
    // A method.
    getName() {
      return this.name
    }

    getPrice() {
        return this.price
      }
  }
  
  // Export the class
  module.exports = Candy;



  // In the REPL

// const Candy = require('./candy.js');

// // And use it to create new instances:

// const candy = new Candy('Mars', 4.99);

// candy.getName();
// candy.getPrice();
