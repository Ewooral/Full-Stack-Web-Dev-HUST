let a = [2, 3, 5]
let b = a.slice()
let c = [...b]
console.log(b);

b.push(8)
console.log(a)
console.log(b)
console.log(c)

const duplicate = (arr) => {
    // let arrCopy = arr.slice()
    let arrCopy = [...arr]
    for (let value of arrCopy) {
        arr.push(value)

    }
    return arr

}

// duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]