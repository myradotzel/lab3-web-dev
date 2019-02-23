function getVerdict() {
    let message = "my message"
    pass1 = document.getElementById("pass1").value
    pass2 = document.getElementById("pass2").value

    if (pass1.length < 8 || pass2.length < 8) message = "the passwords are not at least 8 character long";
    else if (pass1 != pass2) message = "the passwords don't match!";
    else message = "the passwords match!";

    alert(message);

}