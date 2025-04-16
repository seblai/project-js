const errorMessage = document.getElementById('formErrors')
const name = document.getElementById('name')
const phone = document.getElementById('phone')
const email = document.getElementById('email')
const message = document.getElementById('message')

function validateForm() {
    let ok = true;
    let error = '';
    if (name.value.length < 2) {
        ok = false
        error = "Name must include at least 2 letters"
    }
    if (email.value[0].toUpperCase() < "A" || email.value[0].toUpperCase() > "Z") {
        ok = false
        error = "Email must begin with a letter"
    }
    if (phone.value.length !== 10) {
        ok = false;
        error = "Phone number must include 10 numbers"
    }
    for (let i = 0; i < phone.value.length; i++) {
        if (phone.value[i] < '0' || phone.value[i] > '9') {
            ok = false;
            error = 'Phone number must only include numbers only'
        }
    }
    if (!ok) {
        errorMessage.classList.remove('form-error-hidden')

        errorMessage.textContent = error;
    } else {
        errorMessage.classList.add('form-error-hidden')
    }
    return ok;
}

