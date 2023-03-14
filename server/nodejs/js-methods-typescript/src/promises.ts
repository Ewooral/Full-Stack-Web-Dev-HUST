/*
  PROMISES
*  Promises are the foundation of asynchronous programming in modern JavaScript.
*  A promise is an object returned by an asynchronous function, which represents
*  the current state of the operation. At the time the promise is returned to
*  the caller, the operation often isn't finished, but the promise object
*  provides methods to handle the eventual success or failure of the operation.

ANALOGY
Imagine that you’re a top singer, and fans ask day and night for your upcoming song.

To get some relief, you promise to send it to them when it’s published. You give your
fans a list. They can fill in their email addresses, so that when the song becomes
available, all subscribed parties instantly receive it. And even if something goes very
wrong, say, a fire in the studio, so that you can’t publish the song, they will still be
notified.

Everyone is happy: you, because the people don’t crowd you anymore, and fans, because
they won’t miss the song.

This is a real-life analogy for things we often have in programming:

    A “producing code” that does something and takes time. For instance, some code that loads the data over a network. That’s a “singer”.
    A “consuming code” that wants the result of the “producing code” once it’s ready. Many functions may need that result. These are the “fans”.
    A promise is a special JavaScript object that links the “producing code” and the “consuming code” together.
    In terms of our analogy: this is the “subscription list”. The “producing code” takes whatever time it needs to produce the promised result, and
    the “promise” makes that result available to all the subscribed code when it’s ready.
* */


// The constructor syntax for a promise object is:
let promise = new Promise(function(resolve, reject) {
  // executor (the producing code, "singer")
});

let p = new Promise((resolve, reject) => {})

// @ts-ignore
import products from "../products.json"
const Products:any = products



// PRODUCING CODE (CALLBACK FUNCTION)
const getProductInfo = () => {
    console.log("Fetching...!")
    setTimeout(() => {
        Products.forEach((product: any, index: number) => {
            console.log(`${index}: ${product.type}| ${product.price}`)
        });
    }, 3000)
    console.log("Finished!")
}

// PROMISE OBJECT THAT LINKS CALLBACK AND HIGHER ORDER FUNCTION
const createProductInfo = (product: any) => {
     return new Promise<void>((resolve, reject) => {
          setTimeout(() => {
               Products.push(product)

               const error = false
               if (!error){
                    resolve()
               }else{
                    reject('Error: Something went wrong!')
               }

    }, 1000)
     })
}

// CONSUMING CODE (HIGHER ORDER FUNCTION)
createProductInfo(
    {name: 'Beans and Gari with Fish',
             price: 10.88,
             image: null,
             type: 'Local Dish'
})
    .then(getProductInfo)
    .catch(err => console.log(err))



// PROMISE.ALL()
const promise1 = Promise.resolve('Hello, World')
const promise2 = 10
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Goodbye')
})

const promise4 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json').then(res =>res.json())
Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
console.log(values))



// const fetchPromise: Promise<Response> =
//     fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
//
// console.log(fetchPromise);
//
// fetchPromise
//     .then((response) => {
//      console.log(`Received response: ${response.status}`);
// });
//
// console.log("Started request…");


// Chaining promises

/*
* arr = [1, 3, 5, 2, -1, 0]
* target = 2
* return an array of the two numbers when added amount to target
* */



outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

      let input = process.stdin.on(`Value at coords (${i},${j})`, () => {
        process.stdout.write(`${i},${j}`)
    });

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}
console.log('Done!');