function ValidateContactForm() {
    var user_name = ContactForm.Name;
    var password = ContactForm.Password;
    var phone = ContactForm.Telephone;

    if (user_name.value == "") {
        window.alert("Please enter your name.");
        name.focus();
    }

    if (password.value == "") {
        window.alert("Please enter your Password.");
        password.focus();

    }

    if (phone.value.indexOf("@", 0) < 0) {
        window.alert("Please enter a Phone Number.");
        phone.focus();




    }

