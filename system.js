let bankingContainer = document.querySelector(".banking-container")
const currentuser = JSON.parse(localStorage.getItem("current user"));
let goBackBtn = document.querySelector(".go-back-btn");
console.log(currentuser);

let user = document.querySelector(".user");
let usernull = document.querySelector(".user-null");
if (currentuser === null) {
    usernull.innerHTML = "You are not logged in";
    console.log("You are not logged in");
    bankingContainer.style.display = "none",
    goBackBtn.addEventListener("click",()=>{
        window.location.href = "index.html";
    })
}
else {
    user.innerHTML = currentuser.name;
    bankingContainer.style.display = "block"
    goBackBtn.style.display = "none"

}

let depositInput = document.querySelector("#Deposit-input");
let withdrawInput = document.querySelector("#withdraw-input");
let depositBtn = document.querySelector(".deposit-btn");
let withdrawBtn = document.querySelector(".withdraw-btn");
let balanceDisplay = document.querySelector("#balance");
let checkBlanceBtn = document.querySelector(".check-blance-btn")
let logBtn = document.querySelector(".log-btn")
// banking system
function bankingSystem() {
    let balance = 0;
    function depositAmmount(value) {
        balance += value;
        console.log("Your deposit amount:", value);
        updateBalance();
    }

    function withdrawAmmount(value) {
        if (balance >= value) {
            balance -= value;
            console.log("Your withdrawn amount:", value);
            updateBalance();
        } else {
            alert("Insufficient balance!");
        }
    }

    function checkBlance() {
        console.log("Your bank account balance:", balance);
        updateBalance()

    }

    function updateBalance() {
        if (balanceDisplay) {
            balanceDisplay.innerText = `₹ ${balance}`;
        }
    }

    return { depositAmmount, withdrawAmmount, checkBlance };
}

let banking = bankingSystem();

depositBtn.addEventListener("click", () => {
    let depositBtnInputValue = Number(depositInput.value);

    if (depositInput.value === "") {
        alert("Please fill in the deposit field.");
    } else if (isNaN(depositBtnInputValue)) {
        alert("Invalid input. Please enter a number.");
    } else {
        banking.depositAmmount(depositBtnInputValue);
        depositInput.value = "";
    }
});

// check blance 
checkBlanceBtn.addEventListener("click", () => {
   banking.checkBlance();
})

// withdrawBtn
withdrawBtn.addEventListener("click", () => {
    let withdrawInputInputValue = Number(withdrawInput.value);

    if (withdrawInput.value === "") {
        alert("Please fill in the deposit field.");
    } else if (isNaN(withdrawInputInputValue)) {
        alert("Invalid input. Please enter a number.");
    } else {
        banking.withdrawAmmount(withdrawInputInputValue);
        withdrawInputInputValue.value = "";
    }
})

// log out logic here
logBtn.addEventListener("click", () => {
    let confirmLogout = confirm("Are you sure you want to logout?");
    if (confirmLogout) {
        localStorage.setItem("current user", null);
        window.location.href = "index.html";
    }
})

// cur
