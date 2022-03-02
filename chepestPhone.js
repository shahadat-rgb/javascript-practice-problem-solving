/* find a lowest price phone from this product.
 using function, forof loop, object
 */

const phones=[
    { name: "sumsung s3", price:450000, camera : 10, storage :15 },
    { name: "Iphone", price:1450000, camera : 16, storage :20},
    { name: "Nokia", price:12000, camera : 6, storage :7 },
    { name: "Renovo", price:20000, camera : 14, storage :9 },
    { name: "hawai a15", price:450000, camera : 12, storage :11}
]

function getLowestPricePhone(pdName) {
   let chepest = phones[0]
    for (const phone of phones ) {
          if ( phone.price < chepest.price ) {
               chepest = phone;
          }
    } return chepest;
}
const myProduct  = getLowestPricePhone(phones)
console.log(myProduct);