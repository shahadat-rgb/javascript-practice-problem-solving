// find the largest element using foor loop and function
function largestNumbers(num) {
    let largest = 0;
    for (let i = 0; i < num.length; i++) {
        const element = num[i];
        if (element > largest ) {
            largest = element;
        }
    }
    return largest;
}
const ages = [10,13,45,55,43,85,74,44];
const oldestAge= largestNumbers(ages);
console.log(oldestAge);