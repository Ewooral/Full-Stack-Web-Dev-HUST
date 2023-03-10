const apiKey = generateKey();
const url = getURL()
const settings = getSettings();

const response = await fetch(url, settings)
const responseData = await response.json()

logItems(responseData)
console.log(generateKey())


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
    const characters = 'ABCDEFghijklmnop0123456789%&*!./,-(}'
    let result = ''
    for (let i = 0; i < (characters.length - 10); i++) {
        const getRandom = Math.floor(Math.random() * characters.length)
        result += characters.charAt(getRandom)
    }
    return result

}


function logItems(items) {
    for (const item of items) {
        console.log(item.name);
    }
}

function getURL() {
    return "https://api.boot.dev/v1/courses_rest_api/learn-http/items"
}



// GET IP ADDRESS
console.log("..................................................")
async function fetchIPAddress(domain) {
    const resp = await fetch(`https://cloudflare-dns.com/dns-query?name=${domain}&type=A`, {
        headers: {
            'accept': 'application/dns-json'
        }
    })
    const respObject = await resp.json()

    return respObject.Answer[0].data
}




const domain = 'api.boot.dev'
const ipAddress = await fetchIPAddress(domain)
if (!ipAddress) {
    console.log('something went wrong in fetchIPAddress')
} else {
    console.log(`found IP address for domain ${domain}: ${ipAddress}`)
}


fetch("https://api.boot.dev/v1/courses_rest_api/learn-http/items")
    .then((response) => response.json())
    .then((data) => data.forEach(d => {
        // console.log(d.name)
    }));
