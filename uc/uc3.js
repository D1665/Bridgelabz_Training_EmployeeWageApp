// UC 3 - refactor the code to write a function to get work hours

function getWorkHours() {
    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            return 0; // absent
        case 1:
            return 4; // part time
        case 2:
            return 8; // full time
        default:
            return 0;
    }
}

let perHourWage = 20;
let hours = getWorkHours();
let wage = hours * perHourWage;

console.log("Hours worked today: " + hours);
console.log("Wage for today: $" + wage);
