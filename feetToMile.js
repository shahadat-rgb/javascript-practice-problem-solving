// this problem solve is inch to feet
function inchToFeet(inch) {
    
  const feet = inch / 12;
  return feet
}
const feetResult = inchToFeet(87489)
console.log('this is a feet number',feetResult);

//  this problem solve is miles to km

function getMileToKm(mile) {
    const km = mile * 1.609344;
      return km;

}
const kmResult = getMileToKm(480)
console.log(kmResult);

// this problem solve is celcious to farenhite

function celsiusToFarenhite(celcious) {

    const farenhite = (1.8 * celcious)+32
     return farenhite;
}
const farenhiteResult = celsiusToFarenhite(2)
console.log(farenhiteResult);

// / this problem solve is farenhite to celsius

function farenhiteToCelsius(farenhite) {

    let celsius = ((farenhite-32) / 1.8).toFixed(2);
     return celsius;
}
const celsiusResult= farenhiteToCelsius(3)
console.log(celsiusResult);