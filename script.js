//EXERCISE 1: The Fortune Teller
let jobTitle = `UI Designer`
let geoLocation = `Toronto`
let annualSalary= `70000`
let companyName= `Semanggg`
console.log(`You will be a ${jobTitle} in ${geoLocation}, making $${annualSalary} for ${companyName}.`)
//EXERCISE 2: The Age Calculator
var CurrentYear =`2020`
var Dob=`1998`
console.log(`They are ${CurrentYear-Dob} years old.`)
//EXERCISE 3: The Lifetime Supply Calculator
var CurrentAge=`23`
var MaxAge= `90`
var AmountSnack=`30`
console.log(`You will need ${(MaxAge-CurrentAge)*365*15} to last you until the ripe old age of ${MaxAge}.`)
//EXERCISE 4: The Geometrizer
var RadiusCalc= `3`
console.log(`The circumference is ${3.1415*(2*RadiusCalc)}`)
console.log(`The area is ${3.1415*(RadiusCalc**2)}.`)
//EXERCISE 5: The Temperature Converter
var TempCel=`30`
var TempFar=`14`
console.log(`${TempCel}°C is ${TempCel*9/5+32}°F`)
console.log (`${TempFar}°F is ${(TempFar-32)*5/9}°C.`)

// LAB2

// EXERCISE 6

function squareNumber(a) {
    let result;
    let content06 = document.querySelector('#Ex06');
    content06.textContent = ("The result of squaring the number " + a + " is " + (result = Math.sqrt(a)).toFixed(2));
    return result;
}
var squaredNumber = 64;
squareNumber(squaredNumber);

// EXERCISE 7

function halfNumber (a) {
    let result;
    let content07 = document.querySelector('#Ex07');
    content07.textContent = ("Half of " + a + " is " + (result = a/2));
    return result;
}
let halfNum = 32;
halfNumber (halfNum);

// EXERCISE 8

function percentOf (num1,num2) {
    let result;
    let content08 = document.querySelector('#Ex08');
    content08.textContent = (num2 + " is " + (result = (num2 / num1) * 100).toFixed(2) + "% of " + num1);
    return result;
}
percentOf(160, 40);

// EXERCISE 9


function areaOfCircle (radius) {
    let result;
    let content09 = document.querySelector('#Ex09');
    var radiusResult = (result = (Math.PI * radius ** 2).toFixed(2));
    content09.textContent = ("The area for a circle with the radius " + radius + " is " + radiusResult);
    return result;
}
let radNum = 12;
areaOfCircle(radNum);

// EXERCISE 10


let content10 = document.querySelector('#Ex10');
function allFunctions (a) {
    console.log("All Functions: ");
    let half = halfNumber(a);
    let sqrRoot = squareNumber(half);
    let areaOf = areaOfCircle(sqrRoot);
    let percentageOf = percentOf(areaOf, sqrRoot);
    return percentageOf;
}
let totalFunc = 70;
content10.textContent = allFunctions(totalFunc);
