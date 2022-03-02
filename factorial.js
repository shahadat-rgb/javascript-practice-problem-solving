// factorial using function and for loop incremental.

function factorial(fact) {
    let factorial = 1;
    for (let i = 1; i <= fact; i++) {
        //  const element = fact[i];
           factorial = factorial * i;
    }
    return factorial;
}
const factResult = factorial(5)
console.log(factResult);

// factorial using function and while loop incremental.
function getFactorial(factNum){
    let factorial = 1;
    let i = 1 ;
    while (i <= factNum ) {
        factorial = factorial * i;
        i++
    }return factorial;
} 

const sumFactorial = getFactorial(8)
console.log(sumFactorial);


// factorial using function and for loop decremental.

function decFactorial(factNum) {
    let factorial = 1;
    for (let i = factNum ; i >= 1  ; i--) {
        factorial = factorial * i;
    }
    return factorial;
}

const minusFact= decFactorial(5)
console.log(minusFact);

// factorial using function and while loop decremental.

function decFactorial(factNum) {
    let factorial = 1;
    let i = factNum;
    while ( i >= 1 ) {
      factorial = factorial * i;
      i--;
    }
    return factorial;
}

const minusFact= decFactorial(5)
console.log(minusFact);