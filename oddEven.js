/* this is even number whice work 2 er saty 44 divide kory 
output 0 er soman holy true hoby other wise false  */

function isEven(number) {
    
    if (number % 2 == 0 ) {
        return true
    }
    return false;

}

const isEvenResult = isEven(45)
console.log("my even number is",isEvenResult);

// here in this odd number just 2 er stay divide hoby but not equal 0(ortat bagses takby)

function isOdd(number) {
    
    if (number % 2 != 0 ) {
        return true
    }
    return false;

}

const oddNumber = isOdd(45)
console.log("my odd number is",oddNumber);

