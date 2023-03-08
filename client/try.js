const duplicate = (arr) => {
    let lastValue = arr[arr.length - 1]
    let IdxlastValue = arr.lastIndexOf(lastValue)
    let i = 0;
    while (i <= IdxlastValue) {
        let value = arr[i]
        arr.push(value)
        i += 1
    }

    return arr

}

console.log(duplicate([1, 2, 3, 4, 5])); // [1,2,3,4,5,1,2,3,4,5]

