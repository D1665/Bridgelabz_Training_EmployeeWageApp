// UC 1 - Ability to check if employee is present or absent
// using Math.random(), and const/let instead of var

const isPresent = Math.random() >= 0.5; // just a coin flip basically

let status;
if (isPresent) {
    status = "Present";
} else {
    status = "Absent";
}

console.log("Employee is: " + status);

// small note to self - const cant be reassigned, let can.
// var is the old way, has function scope not block scope, we dont use it here
