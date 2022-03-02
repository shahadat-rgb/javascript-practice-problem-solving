/*
    woodChir  = 3cft
    woodTable = 10cft
    woodBed   = 50cft
*/

function  woodCalculator(perchir,pertable,perbed) {
    
    const  createChir  =  perchir * 3;
    const  createTable =  pertable * 10;
    const  createBed   =  perbed * 50;
    
    const totalWood = createChir + createTable + createBed;
    return totalWood;
}  

const totalWoodResult = woodCalculator(8,2,2)
console.log(totalWoodResult);