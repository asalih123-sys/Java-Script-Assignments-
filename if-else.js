// If Else Conditonal Statements Assignment Created by Amer Salih 10/16/2025

// Prompt
const prompt = require('prompt-sync')();

// Question 1 Temperature Classification
    console.log("Question 1 - Temperature Classification");
// User Input Temperature
        let temp = parseInt(prompt("Enter the temperature: "));
    // Conditional Statement
        if(temp > 30)
        {
            console.log("The Temperature is Hot \n");
        }

        else if (temp > 20)
        {
            console.log("The Temperature is Warm \n");
        }

        else if(temp > 10)
        {
            console.log("The Temperature is Cool \n");
        }

        else
        {
            console.log("The Temperature is Cold \n");
        }
//=========================================================

// Question 2 Day of the Week
    console.log("Question 2 - Day of the Week");
    // User Input Number for Day of the Week
        let num = parseInt(prompt("Enter a number (1-7) for a day of the Week: "));
    // Conditional Statement
        if(num == 1)
        {
            console.log("The day is Monday \n");
        }

        else if(num == 2)
        {
            console.log("The day is Tuesday \n");
        }

        else if(num == 3)
        {
            console.log("The day is Wednesday \n");
        }

        else if(num == 4)
        {
            console.log("The day is Thursday \n");
        }

        else if(num == 5)
        {
            console.log("The day is Friday \n");
        }

        else if(num == 6)
        {
            console.log("The day is Saturday \n");
        }

        else if(num == 7)
        {
            console.log("The day is Sunday \n");
        }

        else
        {
            console.log("Invalid Number - Enter a number (1-7) \n");
        }
//=============================================================

// Question 3 - Age Group Classification
    console.log("Question 3 Age Group Classification");
    // User Input Age 
        let age2 = parseInt(prompt("Enter your age: "));
    // Conditonal Statement
        if(age2 < 13)
        {
            console.log("Your age group is Child. \n");
        }

        else if(age2 < 20)
        {
            console.log("Your age group is Teenager. \n");
        }

        else if(age2 < 60)
        {
            console.log("Your age group is Adult. \n");
        }

        else
        {
            console.log("Your age group is Senior. \n");
            
        }
//===========================================================

// Question 4 - BMI Category
    console.log("Question 4 - BMI Category");
    // User Input BMI Value
    let bmiValue = parseFloat(prompt("Enter your BMI Value: "));
    // Conditional Statement
        if(bmiValue < 18.5)
        {
            console.log("You are Underweight.\n");
        }

        else if(bmiValue < 25)
        {
            console.log("Your weight is Normal! \n");
        }

        else if(bmiValue < 30)
        {
            console.log("You are Overweight. \n");
        }

        else
        {
            console.log("You are Obese. \n");
        }
//=================================================================

// // // Question 5 - Traffic Light System
    console.log("Question 5 - Traffic Light System");
    // User Input Light Color
    let color = prompt("What's the traffic light color? - ");
    // Conditonal Statement
    if(color == "red" || color == "Red")
    {
        console.log("Instruction: STOP \n");
    }
    else if(color == "yellow" || color == "Yellow")
    {
        console.log("Instruction: Slow Down \n");
    }

    else if(color == "green" || color == "Green")
    {
        console.log("Instruction: GO! \n");
    }

    else
    {
        console.log("Invalid Light Color \n");
    }
//============================================================

// Question 6 - Season Detector
    console.log("Question 6 - Season Detector");
    // User Input Month Number
    let month = parseInt(prompt("Enter a number (1-12) for a Season of the Year: "));
    // Conditonal Statements
    if(month == 1 || month == 2 || month == 12)
    {
        console.log("The Season is Winter \n");
    }

    else if(month == 3 || month == 4 || month == 5)
    {
        console.log("The Season is Spring \n");
    }

    else if(month == 6 || month == 7 || month == 8)
    {
        console.log("The Season is Summer \n");
    }

    else if(month == 9 || month == 10 || month == 11)
    {
        console.log("The Season is Fall \n");
    }

    else
    {
        console.log("Invalid Number - Please Pick a Number (1-12) \n");
    }
//=================================================================================

// Question 7 - Water State Classifier
console.log("Question 7 - Water State Classifier");
// User Input State of Water
