// UC 4 - calculate wages for a month, assuming 20 working days

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

let perHourWage = 20;
let workingDaysInMonth = 20;

let totalWage = 0;
let totalHours = 0;

for (let day = 1; day <= workingDaysInMonth; day++) {
    let hours = getWorkHours();
    let wageToday = hours * perHourWage;

    totalHours = totalHours + hours;
    totalWage += wageToday;

    console.log("Day " + day + " - hours: " + hours + ", wage: $" + wageToday);
}

console.log("------------------------------------");
console.log("Total hours worked this month: " + totalHours);
console.log("Total wage for the month: $" + totalWage);
