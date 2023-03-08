duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]

const duplicate = (arr) => {
    let arrCopy = arr.copy()
    for (let value of arrCopy) {
        arr.append(value)

    }
    return arr

}