// task :1 cnetimiter to miter 

function getcentToMiter(miter) {

     const centimiter  = 100 * miter;
     return centimiter;
}
const totalCentimeter = getcentToMiter(10)
console.log(totalCentimeter);

// Task : 2 feetToMiter 
function feetToInch( inch) {
    const feet  = inch / 12;
    return feet;
}
const totalfoot = feetToInch(120)
console.log( 'total foot of building', totalfoot);

// Task 3: book pages calculation   

function bookPublish(book1 , book2 , book3) {
    const firstBook = book1 * 100 
    const secondBook = book2 * 200;
    const thirdBook  =  book3 * 300;
    const totalBookPages = firstBook + secondBook + thirdBook;
    return totalBookPages;
}
const sumTotalBookPages = bookPublish(5,3,2)
console.log('Total book pages : ',sumTotalBookPages);

// Task 4:
// how to find biggest name from array in string.
// here,i have to solve of this question .

const myFriends = ['mohammada masun','arif','mohammad helal uddin','jahangir hossen','mustafizur rahman']

let length = 0;
let largest;

for(let i = 0; i < myFriends.length; i++) {
    if (myFriends[i].length > length) {
         length =  myFriends[i].length
         largest = myFriends[i]
    }
}

console.log(largest);

// Task : 5  here,i am solving how to getting positive value this arrray of number.
const number = [-1,-6,-7,10,30,45,-2,-4,45,04];
function postiveNumber(ptive){
let positive = [];
for(let i = 0; i < ptive.length; i++) {
      if (ptive[i] > 0) {
           positive.push(ptive[i])
      }
    } 
    return positive ;
}
   const totalNumber = postiveNumber(number)
   console.log(totalNumber);

   