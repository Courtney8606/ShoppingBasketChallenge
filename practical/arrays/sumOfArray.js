const numbers  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const iterator = () => {
    sum = 0;
    numbers.forEach((number) => {
        sum = sum + number
      })
    console.log(sum);
}

console.log(iterator())