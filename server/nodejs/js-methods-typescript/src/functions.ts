function add(a:number, b:number):number{
    return a + b;
}

console.log( add(3, 5))

// a function that takes in an array and searches for a particular element
const nemo: string[] = ["Nemo"];

function findNemo(array: string[]){
    const arr = [4, 3, 2, 1];

let value:number 
for (value of arr) {
  console.log(value);
}
}
findNemo(nemo);

function verify(text: string) {
  const stack = [];
  for (const c of text) {
    if (c === '(') stack.unshift(')')
    else if (c === '[') stack.unshift(']')
    else if (c === '<') stack.unshift('>')
    else if (c === stack[0]) stack.shift()
    else if (c === ')' || c === ']' || c === '>') return 0
  }
  return 1
}


const test_inputs = [
    "---(++++)----",
    "",
    "before ( middle []) after ",
    ") (",
    "<( >)",
    "( [ <> () ] <> )",
    " ( [)"
]
for (const s of test_inputs) {
  console.log(verify(s), s)
}

// Given an array of integers, find the sum of its elements.
function simpleArraySum(ar: number[]):number {
    // Write your code here
    let sum = 0;

    let value: number;
    for ( value of ar) {
        sum += value;
    }
    return sum 
}

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));


let myMathFunction: (num1: number, num2: number) => string;

function _add(n1: number, n2: number): string {
    return " " + n1 + n2;
}
myMathFunction = _add

console.log(myMathFunction(2,  1))