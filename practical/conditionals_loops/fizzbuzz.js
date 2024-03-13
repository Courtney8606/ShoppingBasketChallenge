const fizzBuzz = (number) => {
    if (number % 3 === 0 && number % 5 === 0) {
        return 'FizzBuzz'
    }
    else if (number % 3 === 0 && number % 5 !== 0) {
        return "Fizz"
    }
    else if (number % 3 !== 0 && number % 5 === 0) {
        return "Buzz"
    }
    else {
        return number
    }
    }

console.log('Check if 3 is Fizz:', fizzBuzz('3'));
console.log('Check if 5 is Buzz:', fizzBuzz('5'));
console.log('Check if 15 is FizzBuzz:', fizzBuzz('15'));


module.exports = fizzBuzz

