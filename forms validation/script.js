function errorPrinting(elem, msg) {
    document.getElementById(elem).innerHTML = msg;
}

function validationForms() {
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var country = document.contactForm.country.value;
    var gender = document.contactForm.gender.value;
    var hobby = []
    var checkBoxes = document.getElementsByName("hobbies[]");

    for (i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            hobbies.push(checkBoxes[i].value);
        }
    }

    var nameError = emailError = mobileError = genderError = countryError = true;

    if (name == "") {
        errorPrinting("nameErr", "please enter a name");

    }
    else {
        var reg = /^[a-zA-Z\s]+$/
        if (reg.test(name) == false) {
            errorPrinting("nameErr", "please enter a valid name");
        } else {
            errorPrinting("name", "");
            nameError = false;
        }

    }
    if (email == "") {
        errorPrinting("emailErr", "please enter a email");

    } else {
        var reg = /^\S+@\S+\.\S+$/
        if (reg.test(email) == false) {
            errorPrinting("emailErr", "please enter a valid email");
        } else {
            errorPrinting("email", "");
            emailError = false;
        }

    }
    if (mobile == "") {
        errorPrinting("mobileErr", "please enter a mobile");

    } else {
        var reg = /^[1-9]\d{9}$/

        if (reg.test(mobile) == false) {
            errorPrinting("mobileErr", "please enter a valid mobile number");
        } else {
            errorPrinting("mobileErr", "");
            mobileError = false;
        }
    }

    if (country == "Select") {
        errorPrinting("countryErr", "please enter a country");



    } else {
        errorPrinting("countryErr", "")
        countryError = false;
        if (nameError || emailError || countryError || mobileError == true) {
            return false;

        } else {
            const data = "your name" + name + "/n" + "emailAdress" + email + "/n" + country + "/n" + mobile;
            alert(data);
        }


    }
}
