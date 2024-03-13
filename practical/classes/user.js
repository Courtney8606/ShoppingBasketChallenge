class User {

    // A constructor, to give initial arguments.
    constructor(name) {
  
      // We can define attributes stored on the instance with `this`
      this.name = name;
    }
  
    // A method.
    getName() {
      return this.name
    }

    getIntroduction() {
        return `Hi, my name is ${this.name}`
      }
  }
  
  // Export the class
  module.exports = User;



  // In the REPL

// const User = require('./user.js');

// // And use it to create new instances:

// const user = new User('Courtney');

// user.getName();
// user.getIntroduction();
