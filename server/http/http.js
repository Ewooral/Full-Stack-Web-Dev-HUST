const apiKey = generateKey();
const items = await getItemData();

logItems(items)


async function getItemData() {
    const response = await fetch("https://api.boot.dev")
}