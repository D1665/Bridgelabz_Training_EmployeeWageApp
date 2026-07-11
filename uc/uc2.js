// UC 2 - Calculate daily employee wage based on part time / full time
// Part time = 4 hrs, Full time = 8 hrs, wage/hr = $20
// solved using switch statement as asked

let perHourWage = 20;

// 0 = randomly picking no work, part time or full time for the day
let choice = Math.floor(Math.random() * 3); // gives 0, 1 or 2

let hoursWorked;

switch (choice) {
    case 0:
        hoursWorked = 0; // absent / no work
        break;
    case 1:
        hoursWorked = 4; // part time
        break;
    case 2:
        hoursWorked = 8; // full time
        break;
    default:
        hoursWorked = 0;
}

let dailyWage = hoursWorked * perHourWage;

console.log("Hours worked today: " + hoursWorked);
console.log("Daily wage: $" + dailyWage);
