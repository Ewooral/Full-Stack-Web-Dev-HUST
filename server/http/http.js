const apiKey = generateKey();
const items = await getItemData();

logItems(items)


async function getItemData() {
    const response = await fetch("https://api.boot.dev/v1/courses_rest_api/learn-http/items", {
        method: 'GET',
        mode: 'cors',
        headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
        }
    })
    return response.json()
}

function logItems(items) {
    for (const item of items) {
        console.log(item.name);
    }
}