
function increment() {
  console.log("The Increment button was clicked")
}


// Function below works to Change h1 "People entered" to blue text on button click
// This implies JS file is working with html file

// function increment() {
//   document.querySelector('.box').style.color = 'blue'
// }

// *** Increment on Clicks lesson ***
// document.getElementById("count").innerText = 5

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el") // this is the DOM: Document Object Model. Here Document is the html, Object is document. in the code and model is "count-el"
let saveEl = document.getElementById("save-el")

let count = 0

function increment() {
  count+=1
  countEl.innerText = count
  // console.log(count)
}

// Commented code is what I used to make this work

//let saveN = "Previous entries: "
function save() {
  // saveN += count + " - "
  // saveEl.innerText = saveN
  // console.log(count)
  let counterStr = count + " - "
  // saveEl.innerText += counterStr
  // innerText only shows 'Human Readable elements' so use textContent instead
  saveEl.textContent += counterStr
}
