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

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console
let name = "Faisal"
let greeting = "Hi, my name is "
let myGreeting = greeting + name
console.log(myGreeting)

// Output in comments. String + number in JS will always result in a win for the string
console.log(4 + 5) // 9
console.log("2" + "4") // "24"
console.log("5" + 1) // "51"
console.log(100 + "100") // "100100"