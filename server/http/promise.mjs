console.log("waiting...")
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let x = 3
        if (x + 4 >= 6) {
            resolve("resolve")

        }
        else {
            reject("reject")
        }
    }, 3000);
})


promise.then(message => { console.log(message) })

    .catch(err => { console.log(err) })

const message = await promise
console.log("Finished!", message)


// WHEN ARE PROMISES USED
/**
 * when performing http requests
 * when reading files from the hard drive
 * interacting with a bluetooth device
 */