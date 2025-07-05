let login = document.querySelector(".login");
const register = document.querySelector(".register");
let loginForm = document.querySelector("#loginForm");
let registerForm = document.querySelector("#registerForm");

login.addEventListener("click", () => {
    registerForm.style.display = "none";
    loginForm.style.display = "block"
});

register.addEventListener("click", () => {
    registerForm.style.display = "block";
    loginForm.style.display = "none"

});
// validation status check register  ....
let validator = $("#registerForm").validate({
    rules: {
        "reg-username": {
            required: true,
            minlength: 3
        },
        "reg-citizen-num": {
            required: true,
            digits: true,
            minlength: 12
        },
        "reg-password": {
            required: true,
            minlength: 6
        },
        "reg-confirm-pass": {
            required: true,
            equalTo: "#reg-password"
        }
    },
    messages: {
        "reg-username": {
            required: "Please enter your name",
            minlength: "Name must be at least 3 characters"
        },
        "reg-citizen-num": {
            required: "Please enter your citizen number",
            digits: "Only numbers are allowed",
            minlength: "Citizen number must be at least 12 digits"
        },
        "reg-password": {
            required: "Please provide a password",
            minlength: "Password must be at least 6 characters"
        },
        "reg-confirm-pass": {
            required: "Please confirm your password",
            equalTo: "Passwords do not match"
        }
    },


})
// / validation status check logic  ....
let validator2 = $("#loginForm").validate({
    rules: {
        "login-username": {
            required: true,
            minlength: 3
        },

        "login-password": {
            required: true,
            minlength: 6
        },

    },
    messages: {
        "reg-username": {
            required: "Please enter your name",
            minlength: "Name must be at least 3 characters"
        },

        "reg-password": {
            required: "Please provide a password",
            minlength: "Password must be at least 6 characters"
        },

    },


})

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Check validation
    if ($("#registerForm").valid()) {

        let username = document.getElementById("reg-username").value;
        let citizenNum = document.getElementById("reg-citizen-num").value;
        let password = document.getElementById("reg-password").value;

        let getPeronsData = JSON.parse(localStorage.getItem("persons")) || [];
        // localStorage.removeItem()
        getPeronsData.push({
            "name": username,
            "citizenNum": citizenNum,
            "password": password,
        });
        let storgeData = localStorage.setItem("persons", JSON.stringify(getPeronsData));

        registerForm.reset();
        validator.resetForm();
        $("#registerForm input").removeClass("error");

        alert("User Registered Successfully!");
    }
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if ($("#loginForm").valid()) {
        let username = document.getElementById("login-username").value;
        let password = document.getElementById("login-password").value;
        let getPersonsData = JSON.parse(localStorage.getItem("persons")) || [];

        let matchedUser = getPersonsData.find((user) => {
            return user.name === username && user.password === password;
        });

        if (matchedUser) {
            localStorage.setItem("current user", JSON.stringify(matchedUser));
            alert("Login successful!");
            window.location.href = "./system.html";
            loginForm.reset();
            validator2.resetForm();
        } else {
            alert("Invalid username or password");
        }
    }
});





