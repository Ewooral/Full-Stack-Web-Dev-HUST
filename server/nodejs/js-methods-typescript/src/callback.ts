// @ts-ignore
import products from "../products.json"
const Products:any = products

// CALLBACK FUNCTION
const getProductInfo = () => {
    console.log("Fetching...!")
    setTimeout(() => {
        Products.forEach((product: any, index: number) => {
            console.log(`${index}: ${product.type}| ${product.price}`)
        });
    }, 3000)
    console.log("Finished!")
}

// HIGHER ORDER FUNCTION
const createProductInfo = (product: any, callback:any) => {
    setTimeout(() => {
        Products.push(product)
        callback()
    }, 1000)
}

createProductInfo(
    {name: 'Pizza kudata Fry',
             price: 10.88,
             image: null,
             type: 'eatab'
}, getProductInfo)



