// const shahdat = 400;
// const tawhid = 794;
// const Rakib = 944;
// if (shahdat > tawhid && shahdat > Rakib) {
    
//     console.log('shahadat hossain is a first boy');

// }
// else if (tawhid > shahdat && tawhid > Rakib) {
//     console.log('tawhid is a first boy');
// }
// else{
//     console.log("Rakib is first boy in this class");
// }

function heightNumber(shahdat,Rakib,tawhid) {
    
    if (shahdat > tawhid && shahdat > Rakib) {
    
        return shahdat;
    
    }
    else if (tawhid > shahdat && tawhid > Rakib) {
        return tawhid;
    }
    else{
        return Rakib
    }
}
const largest = heightNumber(200,387,810)
console.log('largest number is ', largest);
