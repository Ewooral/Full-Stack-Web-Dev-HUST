import data from './data.json' assert {type: 'json'};
console.log(data.movies)


const resp = import('./data.json', {
    assert: {
        type: 'json'
    }
})


console.log("...........................")
resp.then((data) => {
    data.default.movies.forEach(d => { console.log(d) })
})

