/* OBJECT TYPES
* In JavaScript, the fundamental way that we group and
* pass around data is through objects. In
* TypeScript, we represent those through object types.
* As we've seen, they can be anonymous:
*
*
* */

function street(person: { name: string; age: number }) {
return "Hello " + person.name;
}



// interface
interface Shapes {
    Height?: number,
    Width:  string,
    Weight?: string,
    Color?: string,
    Shape?: string | undefined
}

let Circle: Shapes = {
    Height: 25,
    Width: "100%",
}
/*
* PROPERTY MODIFIERS

Each property in an object type can specify a couple of things: the type,
whether the property is
optional, and whether the property can be written to.
*
*
* OPTIONAL PROPERTIES
*
Much of the time, we'll find ourselves dealing with objects that
might have a property set. In those
cases, we can mark those properties as
optional by adding a question mark ( ? ) to the end of their
names.
* */


// PROPERTY MODIFIERS
// const paintShape = (opts:Shapes) => {
//     let xPos = opts.Shape === undefined ? 0 : opts.Shape;
//     let yPos = opts.Height === undefined ? 0 : opts.Height;
//     return ({xPos, yPos})
// }

const paintShape = ({Height = 0, Shape}:Shapes) => {
    let xPos = Shape === undefined ? true : Shape;
    let yPos = Height === undefined ? false : Height;
    return ({xPos, yPos})
}




console.log("Function painShape",
    paintShape({Width: "", Color:"red"})
)
console.log(Circle.Height)
console.log(Circle)


// TYPE ALIAS
type FootWears = {
    yearManufactured: number,
    footWearID: number,
    footWearISPNum: number
}



const Gucci = (footwear: FootWears) => {
    return `
    ${footwear.footWearID}
    ${footwear.yearManufactured}
    `
}



let shoes = {
    yearManufactured: 2008,
    footWearID: 1130113,
    footWearISPNum: 100-912-423
}

console.log(Gucci(shoes))


// IMPORT AND EXPORT IN TYPESCRIPT
/*
* When exporting a module using export =, TypeScript-specific
* import module = require("module") must be used to import the module.
* */
export = shoes


/*  READONLY PROPERTIES

* readonly Properties can also be marked as readonly for TypeScript. While it won't change any behavior at
runtime, a property marked as readonly can't be written to during type-checking.
* */

interface SomeType {
    readonly prop: string;
}

function doSomething(obj:SomeType){

    // We can read from obj.prop
    console.log(`prop has the value ${obj.prop}.`)

    // But we can't re-assign it
    // obj.prop = "hello"  // Cannot assign to 'prop' because it is a read-only property.
}



