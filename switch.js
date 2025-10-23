// Coffee size Priving
// Uer Input Size of Cfofeevfr
// Accept Prompt
const prompt = require('prompt-sync')();
// Prompt 1
    console.log("Question 1 - Coffee Size Pricing")
    let coffeeSize = prompt("What is the Coffee Size?: ");
        let price; 
    switch(coffeeSize)
    {
        case "Small": 
        case "small":
            price = 2.50;
            break;

        case "Medium":
        case "medium":
            price = 3.50;
            break;

        case "Large":
        case "large":
            price = 4.25;
            break;

        case "x-large":
        case "X-Large":
            price = 5.00;
            break;

         default: 
            price = "Invalid \n";
            break;
    }

console.log("Your Coffee size is " + coffeeSize);
console.log("The Price of your coffee is: $" + price + "\n");
// ==========================================================

// Prompt 2
    console.log("Question 2 - Season Finder");
    let month = prompt("Enter a month name to know what season it belongs to!: ");
        switch(month)
        {
                case "december": 
                case "December":
                case  "january":
                case  "January":
                case  "february":
                case  "February":
                    console.log("The Season " + month + " belongs to is Winter! \n");
                    break;
                
                case "march":
                case "March":
                case "April": 
                case "april": 
                case "may":
                case "May":
                    console.log("The Season " + month + " belongs to is Spring! \n");
                    break;

                case "june":
                case "June":
                case "July":
                case "july":
                case "August": 
                case "august":
                    console.log("The Season " + month + " belongs to is Summer! \n");
                    break;

                case "september":
                case "September":
                case "october": 
                case "October": 
                case "november":
                case "November":
                    console.log("The Season " + month + " belongs to is Fall! \n");
                    break;
                
                default:
                    console.log("Invalid Answer \n");
                    break;
        }

        //=======================================================================================

        // Question 3 - Movie Rating Guide
            console.log("Question 3 - Movie Rating Guide");
            let mName = prompt("Enter a movie name: ");
            let mRating = prompt("Enter a movie rating: ");

                switch(mRating)
                {
                    case "G":
                    console.log("G (General Audiences): Suitable for all ages. Contains nothing that would offend parents for viewing by children. \n");
                    break;

                    case "PG":
                    console.log("PG (Parental Guidance Suggested): Some material may not be suitable for children. Parental guidance is recommended. \n");
                    break;

                    case "PG-13":
                        console.log("PG-13 (Parents Strongly Cautioned): Some material may be inappropriate for children under 13. \n");
                    break;

                    case "R":
                    console.log("R (Restricted): Under 17 requires accompanying parent or adult guardian. \n");
                    break;

                    case "NC-17":
                        console.log("NC-17 (No One 17 and Under Admitted): Clearly adult films. No one 17 and under is admitted, even with a parent or guardian. \n");
                    break;

                    default:
                        console.log("Invalid Answer \n");
                        break;
                }
//==================================================================================================================================
    
// Question 4 - Programming Language
    console.log("Question 4 - Programming Language");
    let pLanguage = prompt("Enter a programming language file extension: ");
        
            switch(pLanguage)
            {
                








            }