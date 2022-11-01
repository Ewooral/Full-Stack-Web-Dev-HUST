// ARROW FUNCTIONS
const test = (name: string[]):string => {
    return( `
    This is ${name}
    `)
}
console.log(test(["Naoki", "Kudus"]
    .map((name:string, id) => `${id} ${name} `)
))

// DEFAULT PARAMETERS
const multNums = (a: number, b: number = 10): number => a * b
console.log(multNums(3))

// SPREAD AND REST
// and Optional Arguments(?)
// @ts-ignore
const addNums = (a?:number, b?:number): number => a + b;
const nums: number[] = [5, 6];

// const [c, d] = nums
// console.log(c, d)
console.log(addNums(...nums));


// DESTRUCTURING
let anotherPerson: {
    firstName: string, lastName: string, ge:number
} = {
    firstName: 'elia', lastName:'Boahen', ge:28
};

// Now, if you want to grab the values out of that object, you might do
const FirstName = anotherPerson.firstName;
const LastName = anotherPerson.lastName;
const Age = anotherPerson.ge


//That’ll work, but it’s an awful lot of typing! With destructuring, you can get at that
// data more concisely:
const { firstName, lastName, ge} = anotherPerson;
console.log(firstName, lastName, ge)

let arrays: number[] = [3, 10]
const [aa, bb] = arrays
console.log(aa)
console.log(bb)