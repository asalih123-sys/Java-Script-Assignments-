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
    // User Input State of Water temperature
        let temp3 = parseInt(prompt("Enter the water's temperature (C): "));
    // Condiional Statement
        if(temp3 < 0)
        {
            console.log("The State of the Water is Ice - (Solid) \n ");
        }

        else if(temp3 < 100)
        {
            console.log("The State of the Water is a Liquid so Water. \n");
        }

        else
        {
            console.log("The State of the Water is Steam (Gas) \n");
        }
//==========================================================

// Question 8 - Income Tax Calculator
console.log("Question 8 - Income Tax Calculator");
    // User Input Annual Income
        let income = parseInt(prompt("What is your Annual Income: "));
    // Conditonal Statement
    if(income < 10000)
    {
        console.log("Your income tax is 0%- (No Tax) \n");
    }

    else if(income < 30001)
    {
        console.log("Your income tax is 10% \n");
    }

    else if(income < 60000)
    {
        console.log("Your income tax is 20% \n");
    }

    else if(income < 100001)
    {
        console.log("Your income tax is 30% \n");
    }

    else
    {
        console.log("Your income tax is 40% \n");
    }
//====================================================

// Question 9 - Blood Pressure Classification
console.log("Question 9 - Blood Pressure Classification");
    // User Input Blood Pressure Systolic and Diastolic
        let stb = parseInt(prompt("Enter your Systolic Blood Pressure (mmHg): "));
        let dtb = parseInt(prompt("Enter your Diastolic Blood Pressure (mmHg): "));
    // Conditonal Statements
    if(stb < 120 && dtb < 80)
    {
        console.log("Your Blood Pressure is Normal. \n");
    }

    else if(stb < 130 && dtb < 80)
    {
        console.log("Your Blood Pressure is Elevated. \n");
    }

    else if(stb < 140 || dtb < 90)
    {
        console.log("Your in High BP State 1 \n");
    }

    else if(stb < 180 || dtb < 120)
    {
        console.log("Your in High BP State 2 \n");
    }

    else
    {
        console.log("Your in Hypertensive Crisis \n");
    }
//====================================================

// Question 10 - Credit Score Rating
console.log("Question 10 - Credit Score Rating");
    // User Input Credit Score
        let credit = parseInt(prompt("Enter your credit score (300-850): "));
    // Conditional Statement
    if(credit < 580)
    {
        console.log("Your credit is Poor (Credit May Be Denied)");
    }

    else if(credit < 670)
    {
        console.log("Your credit is Fair (Below Average)");
    }

    else if(credit < 740)
    {
        console.log("Your credit is Good (Near or above Average)");
    }

    else if(credit < 800)
    {
        console.log("Your credit is Very Good (Better than average)");
    }

    else if(credit < 851)
    {
        console.log("Your credit is Expceptional (Best rates available)");
    }

    else
    {
        console.log("Invalid Number (Outside 300-850 Range)");
    }

//==========================================================================
