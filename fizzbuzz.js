
for (let i = 1; i <101; i++) {
    
    if ( i % 15 == 0  ) {
        console.log(`this is a 'fobar' because ${i} are divide by 15`);
    } 
    if (i % 5 == 0) {
        console.log(`this is a 'bar' because ${i} are divide by 5`);
    } 
    if (i % 3 == 0) {
        
        console.log(`this is a 'fo' because ${i} are divide by 3`);
    }
    else{
         console.log(i);
    }
}