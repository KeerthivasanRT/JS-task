let distance = Number(prompt("Enter distance in km:"));
let transport = prompt("Enter transport type (Bus/Train/Car):");

let farePerKm;

switch (transport.toLowerCase()) {
    case "bus": farePerKm = 3; break;
    case "train": farePerKm = 5; break;
    case "car": farePerKm = 10; break;
    default: farePerKm = 0; alert("Invalid transport type!");
}

let totalFare = distance * farePerKm;

if (farePerKm > 0) {
    alert("Total Fare: " + totalFare);
}