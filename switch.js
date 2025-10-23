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
        case "Small" && "small":
            price = 2.50;
            break;

        case "Medium" || "medium":
            price = 3.50;
            break;

        case "Large" || "large":
            price = 4.25;
            break;

        case "x-large" || "X-Large":
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
                    console.log("The Season" + month + " belongs to is Winter! \n");
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
                    console.log("The Season" + month + " belongs to is Summer! \n");
                    break;

                case "september":
                case "September":
                case "october": 
                case "October": 
                case "november":
                case "November":
                    console.log("The Season" + month + " belongs to is Fall! \n");
                    break;
                
                default:
                    console.log("Invalid Answer \n");
                    break;
        }

        //=======================================================================================

        // Question 3 - 
