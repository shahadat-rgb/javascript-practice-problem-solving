function isLeapYear(year) {
    if ( year % 4 == 0 && year % 100 == !0 && year % 400 == 0 ) {
        return true
    }
    return false;
}
const resultLeapYear = isLeapYear(2100);
console.log("this year is a leap year",resultLeapYear);