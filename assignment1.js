// Assignment 1 10/9/2025
// Created By Amer Salih 

// Setting up Prompt
const prompt = require('prompt-sync')();
//=======================================

// Practice Question 1 Area of a Circle
        console.log(" ===Question 1=== (Area of a Circle)");



        //Constant Pi
        const pi = 3.14;
        // User Input for Radius
        let radius = parseInt(prompt("What is the radius: "));
        // Area Equation
        let area = radius * radius * pi;
        // Displaying Area
        console.log("The area is " + area + "\n");
//==================================================

// Practice Question 2 Perimeter of a Rectangle
    console.log(" ===Question 2=== (Perimeter of a Rectangle)")



        // User Input for Length
        let length = parseInt(prompt("What is the length of the Rectangle? - "));
        // User Input for Width
        let width = parseInt(prompt("What is the width of the Rectangle? - "));
        // Perimeter of the Rectangle Equation
        let answerOne = 2*(length+width);
        // Display Perimeter
        console.log("The Perimeter is " + answerOne + "\n");
//===================================================

// Practice Question 3 Area of a Triangle
    console.log(" ===Question 3=== (Area of a Triangle)");



        // User Input for Base
        let base = parseInt(prompt("Enter the base: "));
        // User Input for Height 
        let height = parseInt(prompt("Enter the height: "));
        // Equation for Area of an Triangle
        let tArea = 0.5*base*height;
        // Display the Area of the Triangle
        console.log("The Area of the Triangle is: " + tArea + "\n");
//===================================================================

// Practice Question 4 Circumference of a Circle
    console.log(" ===Question 4=== (Circumference of a Circle)");



        // User input for the radius
        let radius1 = parseInt(prompt("Enter the radius: "));
        // Equation for the Circumference (PI REUSED)
        let circumference = pi*radius*2;
        //Display the Circumference of the Circle
        console.log("The Circumference of the Circle is: " + circumference + "\n");
//========================================================================

// Practice Question 5 Area of an Square
    console.log(" ===Question 5=== (Area of an Square)");
        // User Input for the Side Length of the Square
        let sideLength = parseInt(prompt("What is the side length: "));
        // Area of an Square Equation
        let sEquation = sideLength * sideLength;
        // Display the Area of the Square
        console.log("The area of the Square is " + sEquation + "\n");

//====================================================================================
        // Question 6 Volume of a Cube
        console.log(" ===Question 6=== (Volume of a Cube)");
        // User Input for Cube Side Length
        let cLength = parseInt(prompt("What is the side length of the Cube: "));
        // Cube Equation
        let cEquation = cLength * cLength * cLength;
        // Display Volume of the Cube
console.log("The Volume of the Cube is " + cEquation + "\n");
//==========================================================

// Question 7 Volume of a Cylinder
    console.log(" ===Question 7=== (Volume of a Cylinder)");



        // User Input for Radius
        let vRadius = parseInt(prompt("Enter the radius: "));
        // User Input for the Height
        let vHeight = parseInt(prompt("Enter the height: "));
        // Volume Equation(PI REUSED)
        let vEquation = vRadius * vRadius * pi * vHeight;
        // Display Volume Equation
        console.log("The Volume of the Cylinder is: " + vEquation + "\n");
//========================================================================

// Question 8 Simple Interest Calculator
    console.log(" ===Question 8=== (Simple Interest Calculator");



        // User Input Principal Amount
        let principalAmount = parseInt(prompt("Enter the Principal Amount: "));
        // User Input ROI(Rate of Interest)
        let roi = parseInt(prompt("Enter the Rate of Interest: "));
        // User Input Time of Years or Days for this Program(Years)
        let time = parseInt(prompt("Enter the amount of Years: "));
        // Simple Intrest Calculator
        let sI = (principalAmount * roi * time) / 100 ;
        // Display Simple Interest Equation
        console.log("Your Simple Interest Amount is: " + sI + "\n");
// =================================================================

// Question 9 Hours to Minutes and Seconds Converter
    console.log(" ===Question 9==== (Hours to Minutes and Seconds Converter)");



        // User Input Hours
        let hours = parseInt(prompt("Enter the Hours: "));
        // Hours to Minutes
        let minutes = (hours*60);
        // Minutes to Seconds
        let seconds = (minutes*60);
        // Full Equation
        console.log(hours + " hours = " + minutes + " minutes = " + seconds + " seconds" + "\n");
// =============================================================================================

//Question 10 Average of Three Numbers
    console.log(" ===Question 10=== (Average of Three Numbers)");



        // User Input Number One
        let numOne = parseInt(prompt("Enter the first Number: "));
        // User Input Number Two
        let numTwo = parseInt(prompt("Enter the second Number: "));
        // User Input Number Three
        let numThree = parseInt(prompt("Enter the third Number: "));
        // Calculation of the Average of the Three
        let avg = (numOne + numTwo + numThree) / 3 ;
        // Display Average Equation
        console.log("The Average of the three numbers of -" + numOne +", " + numTwo + ", " + numThree + " is : " + avg + "\n");
//=============================================================================================================================

// Question 11 Shopping Discount Calculator
    console.log(" ===Question 11=== (Shopping Discount Calculator)");



        // User Input Original Price
        let orgPrice = parseInt(prompt("Enter the Original Price of the Item: "));
        // User Input Discount Percentage
        let discountPer = parseInt(prompt("Enter the discount amount: "));
        // Final Price Calculation
        let finalPrice = orgPrice - (orgPrice * discountPer) / 100 ;
        // Final Price Calculation
        console.log("The Final Price of the Item is: " + finalPrice + "\n");
//===========================================================================

// Question 12 Tip Calculator
    console.log(" ===Question 12=== (Tip Calculator)");



        // User Input Bill Total
        let uTotal = parseInt(prompt("Enter the Bill Total: "));
        // User Tip Percentage
        let tipPer = parseInt(prompt("Enter the Tip Percentage: "));
        // Calculate Tip Amount
        let tipAmount = (uTotal * tipPer)/100;
        // Calculate Total Amount
        let allTotal = uTotal + tipAmount;
        // Display Tip Percentage Answer
        console.log("The Tip Amount is: " + tipAmount);
        // Display Full Total Answer
        console.log("The Bill Total is: " + allTotal + "\n");
//===========================================================

// Question 13 Monstly Savings Calculator
    console.log(" ===Question 13=== (Monthly Savings Calculator)");
        


        // User Input Amount Saved
        let aSaved = parseFloat(prompt("Enter the amount you save every month: "));
        // Calculations for Entire Year
        let yTotal = aSaved * 12;
        // Display Total Savings for the Year
        console.log("The Entire Amount you saved this year is: " + yTotal + "\n");
//=================================================================================

// Question 14 Pizza Slice Calculator
    console.log(" ===Question 14=== (Pizza Slice Calculator)");



        // User Input Amount of People
        let aPeople = parseInt(prompt("How many people are attending? - "));
        // User Input Slices Per Person
        let perSlice = parseInt(prompt("How many slices for each person? - "));
        // Calculations of Total Amount
        let sliceTotal = aPeople * perSlice;
        // Total Calculations Displayed
        console.log("You need a total of " + sliceTotal + " pizza slices for " + aPeople + " friends." + "\n");
//=============================================================================================================

// Question 15 Movie Duration Converter
    console.log(" ===Question 15=== (Movie Duration Converter)");



        // User Input Number of Minutes
        let aMinutes = parseInt(prompt("How long is the Movie (In Minutes) - "));
        // Calculations to Hours to Minutes
        let minHour = parseInt(aMinutes/60);
        let minTotal = (aMinutes - (minHour*60));
        // Display Answer
        console.log(minHour + " hours and " + minTotal + " minutes");
//===================================================================

// Question 16 Dog Age Conerter
    console.log(" ===Question 16=== (Dog Age Converter)");



        // User Input Dog Age
        let dogAge = parseInt(prompt("How old is your dog? - "));
        // Calculate Dog age in Human Years
        let hDog = dogAge * 7;
        // Display Dog Age Conversion
        console.log("Your dog is " + hDog + " in human years!");
//===============================================================

// Question 17 Speed Calculator
    console.log(" ===Question 17=== (Speed Calculator)");



        // User Input distance Traveled (in Miles)
        let distanceTraveled = parseInt(prompt("How far have you traveled? (IN MILES) - "));
        // User Input time taken
        let timeTaken = parseInt(prompt("How long did it take to travel? (IN HOURS) - "));
        // Calculating the Speed
        let speed = distnaceTraveled / timeTaken;
        // Display Calculations of Speed
        console.log("Your speed was " + speed + " and it took you " + timeTaken + " and you drove this far " + distanceTraveled + " miles" + "\n");
//=================================================================================================================================================

// Question 18 Temperature Converter (Celsius to Fahrenheit)
    console.log(" ===Question 18=== (Temperature Converter (Celsius to Fahrenheit))");



        // User Input Temperature in Celsius
        let tempC = parseFloat(prompt("Enter the temperature in Celsius: "));
        // Calculate the Temperature in Fahrenheit
        let tempF = parseInt((tempC * 9/5) + 32);
        // Display Converted Temperature
        console.log("The Temperature in Fahrenheit is: " + tempF + "F" + "\n");
//=============================================================================

// Question 19 Temperature Converter Pt. 2 (Fahrenheit to Celsius)
    console.log(" ===Question 19=== (Temperature Converter Pt.2 (Fahrenheit to Celsius)");



        // User Input Temperature in Fahrenheit
        let tempFt = parseFloat(prompt("Enter the temperature in Fahrenheit: "));
        // Calculate the Temperature in Celsius
        let tempCt = parseInt(tempFt - 32) * 5/9;
        // Display Converted Temperature
        console.log("The Temperate in Celsius is: " + tempCt + "C" + "\n");
//=========================================================================

// Question 20 BMI (Body Mass Index) Calculator 
    console.log(" ===Question 20=== (BMI Body Mass Index Calculator)");



        // User Input Weight(LB)
        let weight = parseInt(prompt("Enter your weight in (LB): "));
        // User Input Height(In Inches)
        let heightT = parseInt(prompt("Enter your height in (INCHES): "));
        // Calculate the BMI
        let bMI = weight / (heightT * heightT);
        // Display the Final Calculations of BMI
        console.log("Your BMI is: " + bMI);

//=========================================================================
// End Assignment 10/14/2025 Created By Amer Salih



