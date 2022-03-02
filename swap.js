let myName = 'shahdat';
let id  = 489085;
console.log(myName,id)
const temp = myName;
 myName = id;
 id = temp;
console.log(myName,id);

//  now let's start ..how to swap 2 variables without temporaray variable
// method no
        //    1. Destructuring assignement;
 
    let a = 1;
    let b = 2;
    [a ,b ]  = [b , a]

    console.log(a,b);
 
//  Method no 
        //     2.Addition and defierent
    
 let p = 2;
 let q = 3;

 p = p + q;  // 2 + 3       >> p is now 5 
 q = p - q;  //  5 - 3      >>> q is now 2;
 p = p - q;  // 5 - 2    >>> p is now 3;

 console.log(p,q);
