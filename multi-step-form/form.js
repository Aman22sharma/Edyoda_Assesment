/*let firstName = document.getElementById('first_name')
let firstNameError = document.getElementById('first_name_error')
let lastName = document.getElementById('last_name')
let email = document.getElementById('email')
let emailError = document.getElementById('email_error')

// FOR FIRST NAME
firstName.addEventListener('input', function(e) {
    let pattern = /^[\w]{6,8}$/
    let currentValue = e.target.value
    let valid = pattern.test(currentValue)

    if (valid) {
        firstNameError.style.display = 'none'
    } else {
        firstNameError.style.display = 'block'
    }
})

email.addEventListener('input', function(e) {
    let pattern = /^ [\w ]+ @[a - zA - Z_] + ? \.[a - zA - Z] { 2, 3 }
    $ /
        let currentValue = e.target.value
    let valid = pattern.test(currentValue)

    if (valid) {
        emailError.style.display = 'none'
    } else {
        emailError.style.display = 'block'
    }
})*/



let firstName = document.getElementById('first_name')
let firstNameError = document.getElementById('first_name_error')
let lastName = document.getElementById('last_name')
let email = document.getElementById('email')
let emailError = document.getElementById('email_error')
let contactNum = document.getElementById('contact')
let contactError = document.getElementById('contact_error')

// FOR FIRST NAME
firstName.addEventListener('input', function(e) {
        let pattern = /^[a-z ,.'-]+$/i;
        let currentValue = e.target.value
        let valid = pattern.test(currentValue)

        if (valid) {
            firstNameError.style.display = 'none'
        } else {
            firstNameError.style.display = 'block'
        }
    })
    // FOR EMAIL
email.addEventListener('input', function(e) {
        let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
        let currentValue = e.target.value
        let valid = pattern.test(currentValue)

        if (valid) {
            emailError.style.display = 'none'
        } else {
            emailError.style.display = 'block'
        }
    })
    //Contact number validation
contactNum.addEventListener('input', function(e) {
    let pattern = /^\(?\d{3}\)?-?\s*-?\d{4}$/
    let currentValue = e.target.value
    let valid = pattern.test(currentValue)

    if (valid) {
        contactError.style.display = 'none'
    } else {
        contactError.style.display = 'block'
    }
})

// COUNTRy name validation

let country = document.getElementById('country')
let countryError = document.getElementById('country_error')

country.addEventListener('input', function(e) {
    let pattern = /[a-zA-Z]{2,}/
    let currentValue = e.target.value
    let valid = pattern.test(currentValue)

    if (valid) {
        countryError.style.display = 'none'
    } else {
        countryError.style.display = 'block'
    }
})




// Function that executes on click of first next button.
function next_step1() {
    document.getElementById("StepOneContainer").style.display = "none"
    document.getElementById("StepTwoContainer").style.display = "block"
}

//step-2 Function that executes on click of first previous button.
function prev_step1() {
    document.getElementById("StepOneContainer").style.display = "block";
    document.getElementById("StepTwoContainer").style.display = "none";
}
// Function that executes on click of second next button.
function next_step2() {
    document.getElementById("StepTwoContainer").style.display = "none";
    document.getElementById("StepThreeContainer").style.display = "block";
}
// Function that executes on click of second previous button.
function prev_step2() {
    document.getElementById("StepThreeContainer").style.display = "none";
    document.getElementById("StepTwoContainer").style.display = "block";

}

// Function that executes on click of second previous button.
function prev_step3() {
    document.getElementById("StepThreeContainer").style.display = "none";
    document.getElementById("StepTwoContainer").style.display = "block";

}