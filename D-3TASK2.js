let score = 0;

let q1 = prompt("Q1: What is 2 + 2?\n1. 3\n2. 4\n3. 5");
switch (q1) {
    case "2": score++; break;
}

let q2 = prompt("Q2: Capital of India?\n1. New Delhi\n2. Mumbai\n3. Kolkata");
switch (q2) {
    case "1": score++; break;
}


let q3 = prompt("Q3: Which language runs in the browser?\n1. Python\n2. JavaScript\n3. C");
switch (q3) {
    case "2": score++; break;
}

alert("Your Final Score: " + score + "/3");