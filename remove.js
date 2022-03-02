const fndName = ['shahadat','korim','rohim','shahadat','jamal','kamal','rohim',
'arif','helal','masum','jamal','kamal','korim']

// for (let i = 0; i <fndName.length; i++) {
//      const element = fndName[i];
//      console.log(element);
    
// }


function removeElement(fndName) {
  const unicq = []
  const duplicate = []
    // for (let i = 0; i < fndName.length; i++) {
    //      const element = fndName[i];
    //      console.log(element);
    // }
    for (const element of fndName) {
        //  console.log( element);
        if (unicq.indexOf(element) == -1 ) {
             unicq.push(element)
        } 
    }
    return unicq;
    
}
const unicName = removeElement(fndName)
console.log( 'unic name of cricket player' , unicName);