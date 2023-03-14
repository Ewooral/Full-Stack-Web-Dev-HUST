const printURLParts = (urlString) => {
    const urlObj = new URL(urlString)
    console.log(urlObj.protocol)
}


const fantasyQuestURL = 'http://dragonslayer:pwn3d@fantasyquest.com:8080/maps?sort=rank#id'

printURLParts(fantasyQuestURL)