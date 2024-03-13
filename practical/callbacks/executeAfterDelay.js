const printHello = () => {
    console.log('Hello!');
  }

const executeAfterDelay = (delay, delayedFunction) => {
    delay = delay * 1000
    return setTimeout(delayedFunction, delay)
}  

executeAfterDelay(5, printHello);
  
