
   let promise:any =  new Promise((resolve, reject) => {
        let sum: number;
        sum = 3 * 2
        setTimeout(() => {
            let a: number = 300;
            sum += a + 1;
            if (typeof (sum) === 'number') {
               resolve(sum);
            }
            else {
                reject(404);
            }
        }, 2000);
        
   })
       .then((sum) => console.log("\nAll Clear!!\nBelow is your sum:", sum)
            // (err) => console.log("Please you have an Error!!", err)
   )
      
     .catch((err) =>  console.log("Please you have an Error!!", err))

console.log("....................................................")    
let arrow: number[] = []

function showMe() {
   return setTimeout(() => {
            pussh(4)
            pussh(40)
            pussh(400)
            pussh(4000)
           pussh(40000)
           

           console.log(`
            \n\nThis will output first becaue it is synchronous\n\n
            ${arrow.every((value, key) => {

            })}`)
        console.log(arrow)
        }, 5000)
           
   
 
}


function pussh(num: number) {
    arrow.push(num)
}

function divide(x: number):number {
        return x/2
}

showMe()

console.log("....................................................")    

// PROMISE.ALL()
// @ts-ignore
import products from "../products.json"
// const Products: any = products

const promise1 = Promise.resolve('Hello, World')
const promise2 = 10
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Goodbye')
})

// const promise4 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json').then(res =>res.json())


const promise4 = products
console.log(promise4)
Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
    // console.log(values)
   values.at(-1).map((value: any, key: number)=>{console.log(`${key}: ${value.name} | ${value.price}`)})
})