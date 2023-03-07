const apiKey = generateKey();
const url = getURL()
const settings = getSettings();

const response = await fetch(url, settings)
const responseData = await response.json()

logItems(responseData)



function getSettings() {
    return {
        method: 'GET',
        mode: 'cors',
        headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
        }
    }

}

function generateKey() {
    const characters = 'ABCDEF0123456789'
    let result = ''
    for (let i = 0; i < characters.length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }

}

function logItems(items) {
    for (const item of items) {
        console.log(item.name);
    }
}

function getURL() {
    return "https://api.boot.dev/v1/courses_rest_api/learn-http/items"
}

/**
 * The Fetch function is made available to us by the JS language running in
 * the browser, all we have to do is provide it with the parameters it requires
 * 
 * It takes two inputs, URL and a settings OBJECT
 */ 