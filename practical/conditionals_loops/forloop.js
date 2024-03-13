// Use a for loop to iterate numbers from 1 to 20, and for each of them, print whether the number is even or odd.
const getParity = (number) => {
        if (number % 2 === 0) {
            return('even')
        }
        else {
            return('odd')
        }
}

for (let i=1 ; i<=20 ; i++)
    console.log(`${i} is ${getParity(i)}`)

module.exports = getParity