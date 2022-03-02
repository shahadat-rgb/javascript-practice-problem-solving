// find the lowest element using for loop and function
function lowestNumbers(num) {
    let lowest = num[0];
  for (let i = 0; i < num.length; i++) {
        const element = num[i];
        if (element < lowest ) {
            lowest = element;
          }                    
        }                      
    
    return lowest;
}
const ages = [10,13,45,55,43,85,74,44];
const mySonAge= lowestNumbers(ages);
console.log(mySonAge);



// find the lowest element using while loop and function
function lowestNumbers(num) {
    let lowest = num[0];
    let i =0;
    while(i< num.length){
        const element = num[i]
        i++;
        if (element < lowest) {
            lowest = element;;
        }

    }                     
    
    return lowest;
}
const ages = [10,13,45,55,43,85,74,44];
const mySonAge= lowestNumbers(ages);
console.log(mySonAge);