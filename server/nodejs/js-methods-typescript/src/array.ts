let arrr: number[] = [1, 2, 3, 4]
const print = console.log
print(arrr)

let namess: [fname: string, lname:string] = ["elijah", "boahen"]
print(namess)


print("JAVASCRIPT/TYPESCRIPT METHODS")
print("..............................")
print("PUSH.....................")
//PUSH
let arr: number[] = [1, 2, 3, 4, 5]
arr.push(6)
print(arr)

print("CONCAT.....................")
// CONCAT().....
// Joins arrays and returns an array with the joined arrays
let arr1:number[] = [1, 2, 3, 4, 5]
let c:number[] = [6, 7]
let d:number[] = arr1.concat(c)
print(d)

print("JOIN.....................")
//JOIN()......
/*
The join() method returns an array as a string.
The join() method does not change the original array.
Any separator can be specified. The default is comma (,).
*/

type Fruits = [
    banana: string,
    orange: string,
    apple: string,
    numMango:number
]
const fruits: Fruits = ["Banana", "Orange", "Apple", 700];
let text = fruits.join("->");
print(text)
print(typeof(text))


print("SLICE..............")
//SLICE()
/*
* The slice() method returns selected elements in an array, as a new array.
The slice() method selects from a given start, up to a (not inclusive) given end.
The slice() method does not change the original array.
* */
let arr3:number[] = [3, 100, 8, 7]
print(arr3.slice(0, 2))



print("SPLICE.............")
// SPLICE()
/**
 * array.splice(start, deleteCount, addItem1, ....., addItemX)
 * The splice() method adds and/or removes array elements.
 *The splice() method overwrites the original array.
 */
let arr4: any[] = [1, 2, 3, 4, 6, 0, -1, false, 0, -1, true]
arr4.splice(4, arr4.length + 1, "ANYTHING")
print(arr4)


print("LAST ITEM.....................")
// LAST ITEM FROM ARRAY
export const lastItem = (arr:any[]) => {
    return(
        arr[arr.length - 1]
    )
}
let arr5 = ["me", "you", "them"]
print(lastItem(arr5))


print("COPY WITHIN.....................")
//COPYWITHIN()

/*
The copyWithin() method copies array elements to another
position in the array.
The copyWithin() method overwrites the existing values.
The copyWithin() method does not add items to the array.
* */
let arr6: number[] = [100, 200, -389]
arr6.copyWithin(0, 2, 3) // [-389, 200, -389]
print(arr6)
const fruit1:string[] = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruit1.copyWithin(2, 0, 2);


print("AT.....................")
// AT()
/*
* RelativeIndexable<string>.at(     index: number): string | undefined
* Takes an integer value and returns the item at that index, allowing for
* positive and negative integers.
* Negative integers count back from the last item in the array.
* */
let speed: number[] = [100, 290]
print(speed.at(2))
print(speed[1])


print("ENTRIES.................")
/*
* The entries() method returns a new Array Iterator
Returns:
A new Array iterator object that contains the key/value pairs for each index in the array.
* */
const things: string[] = ["Banana", "Orange", "Apple", "Mango"];
const f = things.entries();

for (let x of f) {
 // print(x.at(1))
 // print(x.at(0))
 print(x)
}


print("EVERY.................")
/*
*The every() method executes a function for each array element.
The every() method returns true if the function returns true for all elements.
The every() method returns false if the function returns false for one element.
The every() method does not execute the function for empty elements.
The every() method does not change the original array
* */

const ages:number[] = [32, 33, 16, 40];
print(ages.every((age:number) => {
    return age > 18;
}))






export default {arrr, namess}
