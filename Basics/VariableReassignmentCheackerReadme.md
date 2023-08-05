## Project: Variable Reassignment Checker
### Objective: Create a simple web application that demonstrates the behavior of let and const variables when attempting to reassign their values.
#### Features:
- Display two sections on the web page: one for let and the other for const.
- In each section, have an input field to enter a value and a button to update the value.
- When the button is clicked, update the value in the corresponding section.
- Observe how let allows reassignment, while const throws an error when attempting to reassign.

Explanation:

- The HTML file creates a simple web page with two sections for let and const variables.
- Each section has an input field and a button to update the value of the corresponding variable.
- The JavaScript file contains two functions: updateLetValue and updateConstValue.
- When the "Update Value" button is clicked in the let section, the value of the letValue variable is updated with the value entered in the input field. No errors occur since let allows reassignment.
- When the "Update Value" button is clicked in the const section, the value of the constValue variable is attempted to be updated with the value entered in the input field. This will result in an error since const does not allow reassignment.

![Error Screenshot](\Content\Errors\UpdatingConstantValue.png)


What I learned - 

- Span 
- innerText 
- document object
- getElementById method 
- value assignment 
- difference between const and let 
- button onClick method 
- id reference with JS 

