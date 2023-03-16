const promise = new Promise((resolve, reject) => {
    let x = 3
    if (x + 4 <= 6) {
        resolve("resolve")

    }
    else {
        reject("reject")
    }
})
    .then(message => { console.log("completed...", message) })

    .catch(err => { console.log("Encountered Error!", err) })