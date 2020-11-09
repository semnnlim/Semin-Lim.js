//EXERCISE 1: The Fortune Teller

let jobTitle = `UX/UI designer`
let geoLocation = `Seoul`
let annualSalary = '50k'
let companyName = `Semmmang`

console.log(`You will be a ${jobTitle} in ${geoLocation}, making $${annualSalary} for ${companyName}.`)

//EXERCISE 2: The Age Calculator

let currentYear = 2020;
let birthYear = 1998;
let age = currentYear - birthYear;

console.log(`They are ${age} years old.`);

//EXERCISE 3: The Lifetime Supply Calculator


let currentAge = 23;
let maxAge = 100;
let perDay = 100;
let daysofYear = 365;

let remainingYears = maxAge - currentAge;
let dailySnacks = daysofYear * perDay;
let totalSnacks = dailySnacks * remainingYears;

console.log(`If I eat ${perDay} snacks a day, I'll need ${totalSnacks} snacks to last me until the ripe old age of ${maxAge}.`);

//EXERCISE 4: The Geometrizer


let radius = 4
let pi = Math.PI
let circumference = (2 * 5) * pi
let area = pi * (radius ** 2)

console.log(`The circumference is ${circumference}cm. The area is ${area}cm.`)

//EXERCISE 5: The Temperature Converter


let celciusTemp = 27;
let fahrenheitTemp = celciusTemp * 9/5 + 32

console.log(`${celciusTemp}°C is ${fahrenheitTemp}°F.`)

fahrenheitTemp = 30;
celciusTemp = (fahrenheitTemp - 32) * 5/9

console.log(`${fahrenheitTemp}°F is ${celciusTemp}°C.`)


// EXERCISE 1


function squareNumber(num) {
    console.log(`The square root of the number ${num} is: ${num ** 2}.`)
    return num ** 2
}

let x = 6
squareNumber(x)


// EXERCISE 2
// Write a function named halfNumber that will take one argument 
//(a number), divide it by 2, and return the result. It should also 
//log a string like "Half of 5 is 2.5.".

// now using the console.log in function method, which i prefer
//again so halfNumber(10) calls 10 into num, then do the calculations in that
//function, and if you want to change the number, change it in halfResult
function halfNumber(num) {
    console.log(`Half of ${num} is ${num / 2}.`)
    return num / 2
}

halfNumber(100)


// EXERCISE 3
// Write a function named percentOf that will take two numbers, 
//figure out what percent the first number represents of the second number, 
//and return the result. It should also log a string like "2 is 50% of 4."

function percentOf(numA,numB){
    let result;
   
    console.log(`${numA} is ${result = (numA / numB) * 100}% of ${numB}.`)
    return result;
}

percentOf (10,5)


// EXERCISE 4
// Write a function named areaOfCircle that will take 
//one argument (the radius), calculate the area based on that, and 
//return the result. It should also log a string like 
//"The area for a circle with radius 2 is 12.566370614359172."
//Bonus: Round the result so there are only two digits after the decimal.

function areaOfCircle (rad) {
    let area = Math.PI * (rad ** 2)
    console.log(`The area for a circle with radius ${rad} is ${area.toFixed(2)}.`)
    return area
}

areaOfCircle(7)


// EXERCISE 5
// Write a function named runAll that will take one argument (a number) 
// and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area (#3) is of the squared result (#2).


function runAll (num) {

    let half = halfNumber(num);
    // this should take my half number function and half 7 into 3.5

    let sqRoot = squareNumber(half);
    // this should square root 3.5 cuz its taking my half var and using my function 
    // squareNumber to square root it

    let areaCir = areaOfCircle (sqRoot);
    // this should calulate the area of 12.25, same concept as above

    let perOf = percentOf(areaCir, sqRoot);
    // this should tell me what percentage the area is of 12.25

    return perOf
}

runAll(10)



//DOM Exercise:

let eleOne = document.querySelector(`#Ex01`)
eleOne.textContent = `You will be a ${jobTitle} in ${geoLocation}, making $${annualSalary} for ${companyName}.`

let eleTwo = document.querySelector(`#Ex2`)
eleTwo.textContent = `They are ${age} years old.`

let eleThree = document.querySelector(`#Ex03`)
eleThree.textContent = `If I eat ${perDay} snacks a day, I'll need ${totalSnacks} snacks to last me until the ripe old age of ${maxAge}.`

let eleFour = document.querySelector(`#Ex04`)
eleFour.textContent = `The circumference is ${circumference}cm. The area is ${area}cm.`

let eleFive = document.querySelector(`#Ex05`)
eleFive.textContent = `${fahrenheitTemp}°F is ${celciusTemp}°C and ${fahrenheitTemp}°F is ${celciusTemp}°C.`

let eleSix = document.querySelector(`#Ex06`)
eleSix.textContent = `The square root of the number ${x} is ${squareNumber(6)}.`

let eleSeven = document.querySelector(`#Ex07`)
eleSeven.textContent = `Half of 10 is ${halfNumber(100)}.`

let eleEight = document.querySelector(`#Ex08`)
eleEight.textContent = `10 is ${percentOf(10,5)}% of 5.`

let eleNine = document.querySelector(`#Ex09`)
eleNine.textContent = `The area for a circle with radius 7 is ${areaOfCircle(7).toFixed(2)}.`

let eleTen= document.querySelector(`#Ex10`)
eleTen.textContent = `Half of 10 is ${halfNumber(10)}. The square root of the number 5 is ${squareNumber(5)}. The area for a circle with radius 25 is ${areaOfCircle(25).toFixed(2)}. 1963.50 is ${percentOf(1963,25)} % of 25.`
