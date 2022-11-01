const print = console.log

print(".....................")
//PUSH
let arr = [1, 2, 3, 4, 5]
arr.push(6)
print(arr)

print(".....................")
// CONCAT().....

// Joins arrays and returns an array with the joined arrays

let arr1 = [1, 2, 3, 4, 5]
let c = [6, 7]
let d = arr1.concat(c)
print(d)

print(".....................")
//JOIN()......
/*
The join() method returns an array as a string.
The join() method does not change the original array.
Any separator can be specified. The default is comma (,).
*/
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join();
print(text)

print(".....................")
//SLICE()
/*
* The slice() method returns selected elements in an array, as a new array.
The slice() method selects from a given start, up to a (not inclusive) given end.
The slice() method does not change the original array.
* */
let arr3 = [3, 100, 8, 7]
print(arr3.slice(0, 2))



print(".....................")
// SPLICE()
/**
 * array.splice(start, deleteCount, addItem1, ....., addItemX)
 * The splice() method adds and/or removes array elements.
 *The splice() method overwrites the original array.
 */
let arr4 = [1, 2, 3, 4, 6, 0, -1, false, 0, -1, true]
print(arr4.splice(2, 2, 100, 200))
print(arr4)

print(".....................")
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let newfruits = fruits1.splice(2, 2, "Lemon", "Kiwi")
print(fruits1)
print(newfruits)


print(".....................")
// LAST ITEM FROM ARRAY
const lastItemFromArray = (arr) => {
    return(
        arr[arr.length - 1]
    )
}
let arr5 = ["me", "you", "them"]
print(lastItemFromArray(arr5))


print(".....................")
//COPYWITHIN()

/*
The copyWithin() method copies array elements to another
position in the array.
The copyWithin() method overwrites the existing values.
The copyWithin() method does not add items to the array.
* */
arr5.copyWithin(3, 0)
print(arr5)