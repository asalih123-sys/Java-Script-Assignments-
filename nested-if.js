// Java Script Nested If Statements Created By Amer Salih on 10/17/2025

// Prompt Instialization
const prompt = require('prompt-sync')();




// Question 1 - Loan Eligibility Checker
    console.log("Question 1 - Loan eligibility Checker");
    // User Input's: Age, Income, and Credit Score but Income and Credit Score is Inside Conditionals
    let age = parseInt(prompt("How old are you: "));
    // Conditonal Statements
    if(age > 21)
    {
        let income = parseInt(prompt("What is your annual Income?: "));
        // Nested If - 1
            if(income > 30000)
        {
                let credit = parseInt(prompt("What's you credit score?:  "));
                    // Nested if - 2
                        if(credit > 650)
                        {
                            console.log(" Congratulations- You are Approved for the Loan! \n");

                        }
                            else
                                {
                                    console.log("Sorry your credit is too low (Rejected) \n");
                                }
        }

            else
            {
                console.log("Sorry your income is too low (Rejected) \n");
            }
                      
    }

       else
        {
            console.log("Sorry your too young (Rejected) \n");
        }
//====================================================================

// Question 2 - Movie Ticket Pricing
        console.log("Question 2 - Movie Ticket Pricing");
        // User Input
        let day = prompt("What day is it?: ");
        // Conditional Statement
            if(day == "Sunday" || day == "Saturday")
            {
                let dTime = parseInt(prompt("What time is it? (Enter in Military Format Ex. 12:00 Write as a Number Ex. 12): "));
                // Nested If
                    if(dTime > 17)
                    {
                        let ageS = parseInt(prompt("How old are you? (Senior Citizens get 20% off!): "));
                        // Nested If 2
                            if(ageS >= 65)
                            {
                                let sDiscount = "Your ticket Price is $12 \n";
                                console.log(sDiscount);
                            }
                            else
                            {
                                console.log("Your ticket Price is $15 \n");
                            }
                    }

                    else
                    {
                        let ages3 = parseInt(prompt("How old are you (Senior Citizens get 20% off!): "));

                        if(ages3 >= 65)
                        {
                            console.log("Your Ticket price is $8 \n");
                        }

                        else
                        {
                            console.log("Your ticket price is $10 \n");
                        }
                    }

            }

            else
                {
                    let ages2 = parseInt(prompt("How old are you? (Senior Citizens get 20% off!): "));
                    if(ages2 >= 65)
                    {
                        console.log("Your ticket Price is $6.5 \n");
                    }

                    else
                    {
                        console.log("Your ticket Price is $8 \n")
                    }
                }
//=================================================================================================================

// Question 3 Employee Bonus Calculator
        console.log("Question 3 - Employee Bonus Calculator");

        // User Input / Bonus Calculator
        console.log("Your base bonus is $1000, Provide Accurate Information to Recieve More!");
        // User Input Years of Serivce
        let yoS = parseInt(prompt("How long have you Worked Here? (Years): "));
        // Conditional
            if(yoS > 5)
            {
                let rating = parseInt(prompt("What is your Performance Rating? (1-5): "));
                    if(rating == 5)
                    {
                        let dHead = prompt("Are you department head? (Y/N): ");
                            if(dHead == "Y")
                            {
                                console.log("Congratulations, your peformance bonus equates to $4375! \n");
                            }

                            else
                            {
                                console.log("Congratulations, your peformance bonus equates to $3500! \n");
                            }
                    }

                    else if(rating == 4)
                    {
                        let dHead2 = prompt("Are you department head? (Y/N): ");
                            if(dHead2 == "Y")
                            {
                                console.log("Congratulations, your peformance bonus equates to $3000! \n");
                            }

                            else
                            {
                                console.log("Congratulations, your peformance bonus equates to $2500! \n");
                            }
                    }

                    else
                    {
                        let dHead3 = prompt("Are you department head? (Y/N): ");
                            if(dHead3 == "Y")
                            {
                                console.log("Congratulations, your peformance bonus equates to $1250! \n");
                            }

                            else
                            {
                                console.log("Congratulations, your peformance bonus equates to $1000! \n");
                            }
                    }
            }
            
               else
            {
                let rating2 = parseInt(prompt("What is your Peformance Rating? (1-5): "));
                if(rating2 == 5)
                {
                    let dHead4 = prompt("Are you department head? (Y/N): ");
                            if(dHead4 == "Y")
                            {
                                console.log("Congratulations, your peformance bonus equates to $3600! \n");
                            }

                            else
                            {
                                console.log("Congratulations, your peformance bonus equates to $3000! \n");
                            }
                }

                else
                {
                    console.log("Congratulations, your peformance bonus equates to $1000! \n");
                }
            }
//=============================================================================================================================

// Question 4 - E-commerece Order Processing
    console.log("Question 4 - E-commerece Order Processing");

    // User Input System Check
        let systemCheck = prompt(" System: Is the item in Stock? (Y/N): ");
    // Conditonal
            if(systemCheck == "Y")
            {
                let paymentM = prompt("What's your payment method - (Ex. Credit Card or Paypal): ");
                    if(paymentM == "Credit Card" || "credit card")
                    {
                        let cardV = prompt("System: Is the Card Verified? - (Y/N): ");
                            if(cardV == "Y")
                            {
                                let shipAdd = prompt("Are you shipping Domestically or Internationally?: ");
                                    if(shipAdd == "domestic" || "Domestic")
                                    {
                                        console.log("Your Final Price is $32.68");
                                        console.log("Thank you for Ordering with US! \n");
                                    }

                                else
                                {
                                    let cSupport = prompt("Enter your country: ");
                                        if(cSupport == "United States")
                                        {
                                            console.log("Your Final Price is $32.68");
                                            console.log("Thank you for Ordering with US! \n");
                                        }

                                        else
                                        {
                                            console.log("Your Final Price $76.89");
                                            console.log("Thank you for Ordering With US! \n");
                                        }
                                }
                            }
                            else
                            {
                                console.log("ORDER CANCELED: Card Not Approved! \n");
                            }
                    }
                    else
                    {
                        let payPal = prompt("System: Is the Paypal Account Verified? - (Y/N): ");
                            if(payPal == "Y")
                            {
                                let shipAdd = prompt("Are you shipping Domestically or Internationally?: ");
                                    if(shipAdd == "domestic" || "Domestic")
                                    {
                                        console.log("Your Final Price is $32.68 \n");
                                        console.log("Thank you for Ordering with US! \n");
                                    }

                                else
                                {
                                    let cSupport = prompt("Enter your country: ");
                                        if(cSupport == "United States")
                                        {
                                            console.log("Your Final Price is $32.68");
                                            console.log("Thank you for Ordering with US! \n");
                                        }

                                        else
                                        {
                                            console.log("Your Final Price $76.89");
                                            console.log("Thank you for Ordering With US! \n");
                                        }
                                    }
                    }
                        else
                        {
                            console.log("ORDER CANCELED: Paypal Account Not Verified! \n");
                        }
                    }
                }
                 else
                    {
                        console.log("Sorry, The Item is not in Stock. :C \n");
                    }
//=========================================================================================================

// Question 5 University Admission System
	console.log("Question 5 - University Admission System");

	// User Input GPA
	let gpa = parseFloat(prompt("What's your GPA?: "));
		if(gpa >= 3.0)
		{
			let satScore = parseInt(prompt("What's your SAT Score?: "));
				if(satScore >= 1200)
				{
					let extraActivites = prompt("Do you have Extracurriculars? (Y/N): ");
						if(extraActivites == "Y")
						{
							let leader = prompt("Did you have a Leadership Role? (Y/N): ");
								if(leader == "Y")
								{
									console.log("Congratulations, you have been Admitted to the Honor College! \n");
								}
								else
								{
									console.log("Congratulations, you have been admitted to our College! \n");
								}
						}
						else
						{
							if(satScore > 1400)
							{
								console.log("You have been Admitted but on Probation! \n");
							}

							else
							{
								console.log("Sorry, you have been rejected. REASON: No Community Background (Extracurriculars) \n");
							}
						}
					   }
						 else
						 {
							console.log("Sorry, you have been rejected. REASON: SAT Score is below Minimum Requirements! \n");
						 }
			         }
					else
					{
						console.log("Sorry, you have been rejected. REASON: GPA is below Minimum Requirements! \n");
					}
//=====================================================================================================================================================

// Question 6 - Insurance Premium Calculator
	console.log("Question 6 - Insurance Premium Calculator \n");
	console.log("Your Base Premium is $1000, based on your answers it will go UP or DOWN.");
	// User Input
	let ageI = parseInt(prompt("How old are you?: "));
		if(age < 25)
		{
			let hadAccidents = prompt("Have you had a accident before? - (Y/N):  ");
				if(hadAccidents == "Y")
				{
					let mutipleC = parseInt(prompt("How many cars do you have?: "));
						if(mutipleC > 1)
						{
							console.log("Your premium costs is $1620, this includes a mutiple Car Discount of 10%! \n");
						}

						else
						{
							console.log("Your premium cost is $1800. \n");
						}
				}

				else
				{
					console.log("Your premium cost is $1500. \n");
				}
		}

	else
	{
		let yoE = parseInt(prompt("How many years of Experience do you have?: "));
			if(yoE > 5)
			{
				let hadAccidents2 = prompt("Have you had a accident before? - (Y/N): ");
					if(hadAccidents2 == "Y")
					{
						console.log("Your premium cost is $1000. \n");
					}

					else
					{
						console.log("Your premium cost is $850. \n");
					}
			}

			else
			{
				console.log("Your premium cost is $1200. \n");
			}
	}
//============================================================================================================