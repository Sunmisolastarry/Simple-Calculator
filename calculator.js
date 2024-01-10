const one = document.querySelector(".in1")
const two = document.querySelector(".in2")
const button = document.querySelector(".sub")
const buttonTwo = document.querySelector(".mul")
const buttonThree = document.querySelector(".div")
const three = document.querySelector(".result")

// ADDITION
button.addEventListener("click",(e) => {
    e.preventDefault()
    button.innerHTML = "Minus"

if (one.value === "") {
    alert("enter your first number");
} else if (two.value === "") {
    alert("enter your second number");
} else {

    three.innerHTML =one.value - two.value;
}

})

// MULTIPLICATION
buttonTwo.addEventListener("click",(e) => {
    e.preventDefault()
    // button.innerHTML = "Minus"

if (one.value === "") {
    alert("enter your first number");
} else if (two.value === "") {
    alert("enter your second number")
} else {

    three.innerHTML =one.value * two.value
}

})

// DIVISION
buttonThree.addEventListener("click",(e) => {
    e.preventDefault()
    // button.innerHTML = "Minus"

if (one.value === "") {
    alert("enter your first number");
} else if (two.value === "") {
    alert("enter your second number")
} else {

    three.innerHTML =one.value / two.value
}

})

