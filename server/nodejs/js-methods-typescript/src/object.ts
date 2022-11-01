let person: {
    first: string, last: string, age:number
} = {
    first: 'elia', last:'Boa hen', age:28
};
console.log(person)


// Null, Void, and Undefined

let favoriteCar:any = "Camaro";
favoriteCar = null;
console.log(favoriteCar)

let myFav;
console.log(myFav)

// Custom Aliases
// To avoid repetition like the below,
let person1 = {
firstName : "John", lastName : "Sheridan", age : 52
};
let person2 = {
firstName : "Michael", lastName : "Garibaldi", age : 53
};

//TypeScript offers custom type aliases, which lets
// you provide a custom name for a type.
type PersonType = {
    firstName: string, lastName: string, age: number
};


let person3: PersonType = {
firstName : "John", lastName : "Sheridan", age : 52
};
let person4: PersonType = {
firstName : "Michael", lastName : "Garibaldi", age : 53 };


// UNION TYPES
let  myAge: any;
myAge = 45;
console.log(myAge)

if(typeof myAge == 'string'){
    console.log(parseInt(myAge) * 2);
}else if (typeof myAge == "number"){
    console.log(myAge * 2);
}
/*
* But what if you tried to do this?
myAge = true;
Unfortunately, that will be allowed because myAge is of type any, and being able
to assign a boolean to it would be bad since our code doesn’t handle that (plus, for a
variable that, presumably, stores a person’s age, a boolean doesn’t make sense).
So, instead, we can use a union type, which is denoted with the pipe character:
* */

let yourAge: number | string;
yourAge = 46;
yourAge = '46';
// yourAge = true;

