// let count = 0

// console.log(count)

// let bonusPoints = 50
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// function exercises:

// function that logs a number 42
function countdown() {
  console.log(42)
}
countdown()

// function that logs the sum of all lap times 
let lap1 = 34
let lap2 = 33
let lap3 = 36
function logLapTIme(){
  console.log(lap1+lap2+lap3)
}
logLapTIme()

// Create a function that increments the lapsCompleted variable by 1
// Run it three times 
let lapsCompleted = 0
function countLaps(){
  lapsCompleted++
}
countLaps()
countLaps()
countLaps()
console.log(lapsCompleted)

// Create a variable, message, that stores the string: You have three new notifications
let username = "per"
let message = "You have three new notifications"
console.log(message+", "+username+"!")

// Create a variable, messageToUser, that contains the message we have logged
let messageToUser = message+", "+username+"!"
console.log(messageToUser)

// Output in comments. String + number in JS will always result in a win for the string
console.log(4 + 5) // 9
console.log("2" + "4") // "24"
console.log("5" + 1) // "51"
console.log(100 + "100") // "100100"

// Practice time part 1

// Create two variables, firstName and lastName
// Concatenate the two variables into a third variable called fullName
// Log fullName to the console
let firstName = "Faisal"
let lastName = "Mustafa"
let fullName = firstName + " " + lastName
console.log(fullName)

let name = "Linda"
let greeting = "Hi there"
// Create a function that logs out "Hi there, Linda!" when called
function greet(){
  console.log(greeting + ", " + name +"!")
}
greet()


let myPoints = 3
// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable
function add3Points(){
  myPoints+=3
}
function remove1Point(){
  myPoints-=1
}
add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()
// Call the functions to that the line below logs out 10
console.log(myPoints)

// Try to predict what each of the lines will log out
console.log("2" + 2) // 22
console.log(11 + 7) // 18
console.log(6 + "5") // 65
console.log("My points: " + 5 + 9) // My points: 59
console.log(2 + 2) // 4
console.log("11" + "14") // 1114