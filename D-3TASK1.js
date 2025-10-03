let pin = prompt("Please Enter your PIN:");
let bal = 100000;

if (pin === "9944") {
    let choice = prompt("Choose an option:\n1. Withdraw\n2. Deposit\n3. Check Balance");

    if (choice === "1") {
        let amount = Number(prompt("Enter amount to withdraw:"));
        if (amount <= bal) {
            bal= bal-amount;
            alert("Withdrawal successful! New balance: " + bal);
        } 
        
        else {
            alert("Insufficient balance!");
        }
    } 

    else if (choice === "2") {
        let amount = Number(prompt("Enter amount to deposit:"));
        bal += amount;
        alert("Deposit successful! New balance: " + bal);
    } 
    
    else if (choice === "3") {
        alert("Your current balance is: " + bal);
    } 
    
    else {
        alert("Invalid choice!");
    }

}

else {
    alert("Incorrect PIN!");
}