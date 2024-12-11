
// Putting whole code in one function to call it from form's onsubmit
function submitedData() {
    // Get user inputs from form fields
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let contact = document.getElementById('contact').value;
    let password = document.getElementById('password').value;
    let confirmPass = document.getElementById('confirmPass').value;

    // Validate user inputs
    if (name === "" || contact === "" ||
        email === "" || password === ""
        || confirmPass === "") {
        alert("Please fill in all fields");
        return false;
    }


    if(contact.length<10 || contact.length > 10) {
        alert("Contact number must be of 10 digits long.");
        return false;
    }


    //Checking if number consist any thing else then numbers
    if(isNaN(contact)){
        alert("Contact number must contain only numbers.");
        return false;
    }
    
    // Validate password length
    if (password.length<8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }

    // Validate password and confirm password mathes
    if (password !== confirmPass) {
        alert("Passwords do not match");
        return false;
    }

    
    // ALL DONE
    
    alert(
        `Thank you for registering with us! 
        Your name is ${name}, 
        email is ${email},
        contact number is ${contact}, 
        and password is ${password}`
    );
}