// UC 5 - calculate wages till total working hours of 160
// OR max days of 20 is reached for the month, whichever comes first
// using a while loop

function getWorkHours() {
    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            return 0;
        case 1:
            return 4;
        case 2:
            return 8;
        default:
            return 0;
    }
}

const perHourWage = 20;
const maxHours = 160;
const maxDays = 20;

let day = 0;
let totalHours = 0;
let totalWage = 0;

while (totalHours < maxHours && day < maxDays) {
    day++;
    let hours = getWorkHours();

    totalHours += hours;
    let wage = hours * perHourWage;
    totalWage += wage;

    console.log("Day " + day + " -> hours: " + hours + " | running total hours: " + totalHours + " | wage today: $" + wage);
}

console.log("====================================");
if (totalHours >= maxHours) {
    console.log("Stopped because 160 hours reached");
} else {
    console.log("Stopped because 20 days reached");
}
console.log("Days worked: " + day);
console.log("Total hours: " + totalHours);
console.log("Total wage: $" + totalWage);
