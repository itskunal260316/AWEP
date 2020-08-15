function validation() {
    if (validateEmail()) {
        if (validateNumber()) {
            return true;
        }
        else
            return false;
    }
    else
        return false;
}


function validateEmail() {
    let userEmail = document.querySelector('#userEmail').value;
    let regex = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\.-]{2,20}).([a-z]{2,3})(.[a-z]{2,10})$/
    if (regex.test(userEmail)) {
        return true;
    }
    else {
        let parentEl = document.querySelector('#userPass').parentNode.children[2];
        parentEl.style.border = "red";
        return false;
    }
}


function validatePassword() {

    let userPassword = document.querySelector('#userPass').value;

    let regex1 = /^([a-z]+)$/;
    let regex2 = /^([A-Z]+)$/;
    let regex3 = /^([0-9]+)$/;
    if (regex1.test(userPassword))
        if (regex2.test(userPassword))
            if (regex3.test(userPassword))
                console.log("valid");
            else {
                console.log("Invalid");
            }

    let confirmPassword = document.querySelector('#conPAss').value;
    if (userPassword == confirmPassword) {
        return true;
    }
    else {
        return false;
    }
}


function validateNumber() {
    let number = document.querySelector('#phNumber').value;
    let regex = /^([0-9]+)$/;
    if (regex.test(number)) {
        return true;
    }
    else {
        return false;
    }
}




