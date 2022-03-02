function animalCount(mile) {
    
    if (mile <= 10 ) {
        const firstCount = mile * 10
        return firstCount;  
    }else if (mile <= 20 ) {
        const first10Mile = 10 * 10
        const resetMile  = mile - 10;
        const secondCount  = resetMile * 50;

        const firstSecondCount = first10Mile + secondCount;
        return firstSecondCount;
    }
    else if (mile >= 21) {
        const first10Mile = 10 * 10
        const second10Mile = 20 * 50
        const resetMile    = mile - 20;
         const tridCount = resetMile * 100;
         const allAnimalCount = first10Mile + second10Mile+ tridCount;
         return allAnimalCount
    }

}
const totalAnimalCount = animalCount(45)
console.log(totalAnimalCount);