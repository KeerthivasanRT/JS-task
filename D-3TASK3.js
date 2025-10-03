let income = Number(prompt("Enter your Monthly Income:"));
let rent = Number(prompt("Enter Rent:"));
let groceries = Number(prompt("Enter Groceries:"));
let transport = Number(prompt("Enter Transport:"));

let totalExpenses = rent + groceries + transport;
let remaining = income - totalExpenses;
let percentage = (totalExpenses / income) * 100;

let message = totalExpenses > income ? "Overspending!" : "You are within budget.";

alert("Total Expenses: " + totalExpenses +
      "\nRemaining Balance: " + remaining +
      "\nPercentage Spent: " + percentage.toFixed(2) + "%" +
      "\nMessage: " + message);