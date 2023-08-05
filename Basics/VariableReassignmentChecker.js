/*
Project: Variable Reassignment Checker
Objective: Create a simple web application that demonstrates the behavior of let and const variables when attempting to reassign their values.
Features:
- Display two sections on the web page: one for let and the other for const.
- In each section, have an input field to enter a value and a button to update the value.
- When the button is clicked, update the value in the corresponding section.
- Observe how let allows reassignment, while const throws an error when attempting to reassign.
*/


let letValue = "-";
const constValue = "-";

function updateLetValue() {
    let inputValue = document.getElementById("letInput").value;
    letValue = inputValue;
    document.getElementById("letValue").innerText = letValue;
}

function updateConstValue() {
   let constValue = document.getElementById("constInput") .value;
   constValue = inputValue;
   document.getElementById("consValue").innerText = constValue;
}
