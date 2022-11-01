// @ts-ignore
import products from "../products.json"
const Products:any = products


// PRODUCING CODE (CALLBACK FUNCTION)
const getProductInfo = () => {
    console.log("Fetching...!")
    setTimeout(() => {
        Products.forEach((product: any, index: number) => {
            console.log(`${index}: ${product.type}| ${product.price}`)
        });
    }, 3000)
    console.log("Finished!")
}


// PROMISE OBJECT THAT LINKS CALLBACK AND HIGHER ORDER FUNCTION
const createProductInfo = (product: any) => {
     return new Promise<void>((resolve, reject) => {
          setTimeout(() => {
               Products.push(product)
               const error = false
               if (!error){
                    resolve()
               }else{
                    reject('Error: Something went wrong!')
               }

    }, 1000)
     })
}


// ASYNC AWAIT
const init = async () => {
    await createProductInfo(
        {
            name: 'Beans and Gari with Fish',
            price: 10.88,
            image: null,
            type: 'Local Dish'
        })
    getProductInfo()
}

init()