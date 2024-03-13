let counter = 0

const increment = () => {
    counter = counter + 1
    console.log(counter);
}
setInterval(increment, 1000)