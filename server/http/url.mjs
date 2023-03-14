const printURLParts = (urlString) => {
    const urlObj = new URL(urlString)
    console.log("Protocol: ", urlObj.protocol)
    console.log("username: ", urlObj.username)
    console.log("Password: ", urlObj.password)
    console.log("hostname: ", urlObj.hostname)
    console.log("port: ", urlObj.port)
    console.log("partName: ", urlObj.pathname)
    console.log("Search: ", urlObj.search)
    console.log("hash: ", urlObj.hash)
}


const fantasyQuestURL = 'http://dragonslayer:pwn3d@fantasyquest.com:8080/maps?sort=rank#id'
const nURL = 'https://www.youtube.com/watch?v=2JYT5f2isg4&t=569s'

printURLParts(nURL)
console.log("........................")
printURLParts(fantasyQuestURL)


function getMailtoLinkForEmail(email) {
    return `mailto: ${email}`
}

let email = 'boahen.cos@gmail.com'
console.log(`mailto link for ${email} is ${getMailtoLinkForEmail(email)}`)