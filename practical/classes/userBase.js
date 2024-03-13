class UserBase {

    // A constructor, to give initial arguments.
    constructor(users) {
  
      // We can define attributes stored on the instance with `this`
      this.users = users;
    }
  
    // A method.
    count() {
      return this.users.length
    }

    getNames() {
        return this.users.map((user) => user.getName());
      }

    getIntroductions() {
        return this.users.map((user) => user.getIntroduction())
    }
  }
  
  // Export the class
  module.exports = UserBase;



  // In the REPL

// const UserBase = require('./user.js');

// // And use it to create new instances:

// const users = [
//   new User('Uma'),
//   new User('Josh'),
//   new User('Ollie')
// ];

// const userbase = new UserBase(users);
// userBase.count();
// userBase.getNames();
// userBase.getIntroductions();