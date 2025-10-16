// Java Script Assingment Ternary Conditional Statements Created 10/16/2025 by Amer Salih

// Prompt
const prompt = require('prompt-sync')();

// Question 1 Temperature Status
console.log("Question 1 Temperature Status")
// User Input Temperature
let temp = parseInt(prompt("Enter a temperature: "));
// Conditional Statement
console.log(temp >= 30 ? "Temperature is Hot \n": " Temperature is Normal \n");
//=====================================================

// Question 2 Discount Eligibility
console.log("Question 2 Discount Eligibility");
// User Input Purchase Amount
let pAmount = parseInt(prompt("Enter the purchase amount: "));
// Conditional Statement
let discount = 50;
pAmount >=100 ?  discount = 10: discount= 0;
console.log("You get a discount of " + discount + "% \n");
//======================================================

// Question 3 Ticket Price
console.log("Question 3 Discount Eligibility")
// User Input Customer Age
let age = parseInt(prompt("Enter the customer's age: "));
// Conditional Statement
let tPrice = 0;
age >= 12 ? tPrice = 15: tPrice = 8;
console.log("Your ticket price is: $" + tPrice + "\n");
//=====================================================

// Question 4 Weekend Check
console.log("Question 4 Weekend Check");
// User Input Day of the Week
let day = prompt("Enter the day of the week: ");
// Conditional statement
console.log(day == "Saturday" || day == "Sunday" ? "Weekend" : "Weekday");
//========================================================================

// Question 5 Age Category (Nested)
console.log("Question 5 Age Category (Nested)");
// User Input Age again
let age1 = parseInt(prompt("Enter your age: "));
// Conditional Statement
let result;
age1 < 13 ? result = "Child" : age1 < 20 ? result = "Teen" : age1 < 60 ? result = "Adult" : "Senior";
console.log("You are a : " + result);
//===================================================================================