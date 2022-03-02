// task 1 .write 3 variable (number ,string, boolean)

var MarkOfBangla = 80;
console.log(MarkOfBangla);
var myName = 'shahdat hossain';
console.log(myName);
var isBanana = true;
console.log(isBanana);

// 2.variable using (let , const)

let friendName = 'Mohammad Abul Kashem';
    friendName = 'helal uddin'

console.log(friendName);

const bestFriend = 'Mohammad abul kashem';
console.log(bestFriend);
const myFriend ='helal uddin'
console.log(myFriend);

// simple Math operation using Function(+, - , * , / , %)

function firstExam(bangla , english, ict , Math) {
    const sum = bangla + english + ict + Math;
    return sum;
}
const totalMarkOfExam = firstExam(80,70,82,65)
console.log( 'final result of shahdat hossain :' , totalMarkOfExam);

// 4 comparison , if else , two condition fullfill or at least one condition.

 const minister = 40000;
 const business  = 10000;
 const teacher   = 20000;
 if (minister > business && minister > teacher ) {
     console.log('minister is bigger than businessman and teacher ');
 }else if (teacher  >  minister && teacher > business) {
     console.log('teacher is bigger than minsiter and businessman');
 } 
 else{
     console.log( 'business man is bigger than minister' );
 }

// 5  while loop to display 7 - 19 all numbers. only disply odd number including 7 -19

    let odd  = []
    for (let i = 7; i <= 19 ; i++) {
         if ( i % 2 != 0 ) {
             odd.push(i)
         }
        
    }

 console.log(odd);

/* 6 .declare an array number of element. update or change 4th position element. add or remove elemntens. 
check wheater specific value exists in array. 
*/ 
// change number
let rollNumber = [2,3,34,45,6,7,86,]
    rollNumber[4] = 46;
console.log(rollNumber);
// add and remove element
let fruiteName = ['banana','apple','finappple','orange','mango','angor','licoi','jackfruite'];
    fruiteName.unshift('amragota');
 console.log(fruiteName);

//  check wheater specific value exists or not in array 
    
      const product = ['macbook pro','lenobo','hp','dell','linax']
    
      if ( product.indexOf('dell') != -1 ) {
          console.log('value exist');
      }else{
          console.log('valuse does not exists');
      }
/*
  Task 9 : use any for loop to display every elements of an array. 
   sdf
*/

const mobileName = ['sumsung','Ipnone','lenobo','Hawai','Nokia','oppp 15s'];
for (let i = 0; i < mobileName.length; i++) {
    const element = mobileName[i];
    console.log(element);
}

/* Task 10 : you have an array of numbers.display only the number of bigger than 80.
*/

  const idNumber = [10,203,94,80,60,45,4,66,56,56,39,95,39,98,92,95,85];
       let biggerNumber = []

       for (let i = 0; i < idNumber.length; i++) {
               if ( idNumber[i] >= 80 ) {
                    biggerNumber.push(idNumber[i])
               }
           
       }     
       console.log('display bigger than only 80', biggerNumber);

    

/* task 10 : write a function taht takes three numbers and 
returns the multiplication of the three numbers
*/
       function getMultiple(num1,num2,num3) {

         const multiflication = num1 *  num2 * num3 ;
         
           return multiflication
       }
const totalResult = getMultiple(10,12,6)
console.log(totalResult);

