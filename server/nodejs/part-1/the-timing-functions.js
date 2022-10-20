// setTimeout(() => {
//     first
// }, timeout);

// clearTimeout()

// setInterval(() => {
    
// }, interval);

// clearInterval()

const waitTime = 3000;
console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () => console.log("done!");

setTimeout(timerFinished, waitTime);