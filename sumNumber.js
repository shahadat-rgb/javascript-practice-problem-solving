// sum of all numbers in an array using function and for loop ;
function sumNumbers(num) {
    let sum = num[0]
    for (let i = 0; i < num.length; i++) {
        const element = num[i];
          sum = sum + element;
        
    }
    return sum
}
const somthingNumber = [10,34,8,37,38,38,93]
const sumResult  = sumNumbers(somthingNumber)
console.log(sumResult);