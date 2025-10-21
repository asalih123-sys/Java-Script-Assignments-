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
                            console.log(" Congratulations - You are Approved for the Loan! \n");

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
                    if(paymentM == "Credit Card" ||  paymentM == "credit card")
                    {
                        let cardV = prompt("System: Is the Card Verified? - (Y/N): ");
                            if(cardV == "Y")
                            {
                                let shipAdd = prompt("Are you shipping Domestically or Internationally?: ");
                                    if(shipAdd == "domestic" || shipAdd == "Domestic")
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
                                    if(shipAdd == "domestic" || shipAdd == "Domestic")
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
	let age12 = parseInt(prompt("How old are you?: "));
		
	if(age > 25)
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

    else if(age12 > 16)
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
            console.log("Your too young buddy!");
        }
//============================================================================================================

// Question 7 - Restaurant Bill Calculator
    console.log("Question 7 - Resturant Bill Calculator");
    // User Input / Base Bill Amount
    let tbill = parseInt(prompt("What is the intital bill?: "));
    let rcD = tbill * 0.1;
    // Conditonal Statement
        if(tbill > 50)
        {
             let aPeople = parseInt(prompt("How many people are at your table?: "));
                if(aPeople > 6)
                {
                    // Automatic 1.18 Mutipler to bill
                    let m1 = tbill * 1.18;
                        let rewardC3 = prompt("Do you have rewards card with us? - (Y/N): ")
                                    if(rewardC3 == "Y")
                                    {
                                        let tbill5 = (m1 - rcD);
                                        console.log("Your final bill is $" + tbill5 + "\n");
                                    }

                                    else
                                    {
                                        console.log("Your final bill is $" + m1 + "\n");
                                    }
                        
                }
                
                else
                {
                    let tipC = parseInt(prompt("Choose your tip amount: 15%, 18%, and 20%. Enter in Number Format: " ));
                        if(tipC == 15)
                        {
                            // Mutiply 1.15 to total bill
                            let m2 = tbill * 1.15;
                                let rewardC2 = prompt("Do you have rewards card with us? - (Y/N): ")
                                    if(rewardC2 == "Y")
                                    {
                                        let tbill3 = (m2 - rcD);
                                        console.log("Your final bill is $" + tbill3 + "\n");
                                    }

                                    else
                                    {
                                        console.log("Your final bill is $" + m2 + "\n");
                                    }

                        }

                        else if(tipC == 18)
                        {
                            // Mutiply 1.18 to total bill
                            let m3 = tbill * 1.18;
                                let rewardC3 = prompt("Do you have rewards card with us? - (Y/N): ")
                                    if(rewardC3 == "Y")
                                    {
                                         let tbill4 = (m3 - rcD);
                                        console.log("Your final bill is $" + tbill4 + "\n");
                                    }

                                    else
                                    {
                                        console.log("Your final bill is $" + m3 + "\n");
                                    }
                        }

                        else
                        {
                            // Mutiply 1.20 to total bill
                            let m4 = tbill * 1.20;
                                let rewardC4 = prompt("Do you have rewards card with us? - (Y/N): ")
                                    if(rewardC4 == "Y")
                                    {
                                         let tbill5 = (m4 - rcD);
                                        console.log("Your final bill is $" + tbill5 + "\n");
                                    }

                                    else
                                    {
                                        console.log("Your final bill is $" + m4 + "\n");
                                    }
                        }
                }
        }

        else
        {
            let tipc = parseInt(prompt("Enter a tip amount, I would recomment 15%. : "));
                if(tipc != 0)
                {
                    let rewardC = prompt("Do you have a rewards card with us? - (Y/N): ");
                        if(rewardC == "Y")
                        {
                            // 10 % discount from total bill
                             let tBill1 = ((tipc / 100) + 1) * (tbill - rcD); 
                            console.log("Your final bill is $" + tBill1 + "\n");
                        }

                        else
                        {
                            let tBill2 = ((tipc / 100) + 1) * tbill;
                            console.log("Your final bill is $" + tBill2 + "\n");
                        }
                }

                else
                {
                    console.log("Invalid TIP \n");
                }

        }
//==================================================================================================================

// Question 8 - Job Application Filter
    console.log("Question 8 - Job Application Filter");
    // User Input Required Degree
    let rDegree = prompt("System: Does Applicant Have Required Degree? - (Y/N): ");
    // Conditonal
        if(rDegree == "Y")
        {
            let yoE2 = parseInt(prompt("How many years of experience do you have?: "));
                if(yoE2 > 2)
                {
                    let certifications = prompt("Do you have your certifications? - (Y/N): ");
                        if(certifications == "Y")
                        {
                            console.log("System: Strong candidate!");
                                let wtL = prompt("Are you willing to relocate? - (Y/N): ");
                                    if(wtL == "Y")
                                    {
                                       console.log("System: ⚠️ Priority Applicant! \n");
                                    }

                                    else
                                    {
                                        console.log("System: Strong Applicant! \n");
                                    }
                        }

                        else 
                        {
                            if(yoE2 > 5)
                            {
                                console.log("System: Qualified Candidate!");
                                     let wtL2 = prompt("Are you willing to relocate? - (Y/N): ");
                                    if(wtL2 == "Y")
                                    {
                                       console.log("System: ⚠️ Priority Applicant! \n");
                                    }

                                    else
                                    {
                                        console.log("System: Strong Applicant! \n");
                                    }
                            }

                            else
                            {
                                console.log("System: Normal Candidate! \n");
                            }
                        }
                }  
                else
                {
                    console.log("System: Avaliable for Entry-level Consideration! \n");
                }
            }

            else
            {
                console.log("System: Applicant is not Qualified! \n");

            }
//=======================================================================================================================

// Question 9 - Gym Membership Pricing
    console.log("Question 9 - Gym Membership Pricing \n");
    console.log("The Base Membership Price is $50 a Month!");
    // User Input Membership Type
    let msP = prompt("What is your Membership Type? (Basic, Premium, and VIP): ");
        if(msP == "basic" ||  msP == "Basic")
        {
            let basicB = 50;
                let ageStudent = parseInt(prompt("How old are you?: "));
                    if(ageStudent < 25)
                    {
                        let studentD = (50 - (50*0.2));
                            let annualC = prompt("Have you signed up for the annual contract? - (Y/N): ");
                                if(annualC == "Y")
                                {
                                        console.log("Your total bill amount is $" + studentD + " a month and 400 a Year, which includes 2 months free!\n");
                                }
                                else
                                {
                                        console.log("Your total bill amount is $" + studentD + " a month and 480 a Year!\n");
                                }
                    }

                    else
                    {
                        let annualC = prompt("Have you signed up for the annual contract? - (Y/N): ");
                                    if(annualC == "Y")
                                    {
                                         console.log("Your total bill amount is $" + basicB + "  a month and 500 a Year, and 2 months free!! \n");
                                    }

                                    else
                                    {
                                         console.log("Your total bill amount is $" + basicB + " a month and 600 a Year! \n");
                                    }
                    }
        }

        else if(msP == "premium" ||  msP == "Premium")
        {
            let premiumB = 80;
            console.log("Extra $30 Dollars a Month Includes Group Classes");
                let ageStudent = parseInt(prompt("How old are you?: "));
                        if(ageStudent < 25)
                        {
                            let studentD1 = (80- (80*0.2));
                                let annualC = prompt("Have you signed up for the annual contract? - (Y/N): ");
                                    if(annualC == "Y")
                                    {
                                        console.log("Your total bill amount is $" + studentD1 + " a month and 768 a Year, which includes a free gym bag, and 2 months free! \n");
                                    }

                                    else
                                    {
                                         console.log("Your total bill amount is $" + studentD1 + " a month and 800 a Year, Which Includes a Free Gym Bag! \n");
                                    }
                        }

                        else
                        {
                            let annualC = prompt("Have you signed up for the annual contract? - (Y/N): ");
                                    if(annualC == "Y")
                                    {
                                         console.log("Your total bill amount is $" + premiumB + "  a month and 800 a Year, which includes a free gym bag, and 2 months free!! \n");
                                    }

                                    else
                                    {
                                         console.log("Your total bill amount is $" + premiumB + " a month and 960 a Year, Which Includes a Free Gym Bag! \n");
                                    }
                        }
        }

        else if(msP == "vip" || msP ==  "Vip" || msP == "VIP")
        {
            let vipB = 120;
            console.log("Extra $70 includes group training, and personal trainer!");
                let ageStudent = parseInt(prompt("How old are you?: "));
                        if(ageStudent < 25)
                        {
                            let studentD2 = (120 - (120*0.2));
                                let annualC = prompt("Have you signed up for the annual contract? - (Y/N): ");
                                    if(annualC == "Y")
                                    {
                                         console.log("Your total bill amount is $" + studentD2 + "  a month and 900 a Year, which includes a free gym bag, and 2 months free!! \n");
                                    }

                                    else
                                    {
                                         console.log("Your total bill amount is $" + studentD2 + " a month and 1080 a Year, Which Includes a Free Gym Bag! \n");
                                    }
                        }

                        else
                        {
                            let annualC = prompt("Have you signed up for the annual contract? - (Y/N): ");
                                    if(annualC == "Y")
                                    {
                                         console.log("Your total bill amount is $" + vipB + "  a month and 1200 a Year, which includes a free gym bag, and 2 months free!! \n");
                                    }

                                    else
                                    {
                                         console.log("Your total bill amount is $" + vipB + " a month and 1440 a Year, Which Includes a Free Gym Bag! \n");
                                    }
                        }
        }

        else
        {
            console.log("Error: Invalid Option! \n");
        }
//===================================================================================================================

// Question 10 - Hotel Room Pricing System 
    console.log("Question 10 - Hotel Room Pricing System");
    // First Introduction and Room Type Input
        console.log("Welcome to our Hotel, the base Price is $100 a Night! \n");
            // Input
                let rType = prompt("What is your room type? (Standard, Deluxe, or Suite): ");
                    // Conditonal
                    if(rType == "Standard" || rType == "standard")
                    {
                        let season = prompt("System: What season is it? (Peak, Regular, or Off-Peak): ");
                            if(season == "Peak" || season == "peak")
                            {
                                // 50% increase on Room
                                    let loS = parseInt(prompt("How long is your Stay?: "));
                                        if(loS > 7)
                                        {
                                            // 15 % Discount on Total
                                             let loyaltyS = prompt("Are you a loyalty member? (No, Silver, Gold, Platinum): ");
                                                if(loyaltyS == "Silver" || loyaltyS == "silver")
                                                {
                                                    console.log("Since you are a Silver Member you recieve Free Breakfast - ($20 value per night)!");
                                                    console.log("Your total price is $127.5 \n");
                                                }

                                                else if(loyaltyS == "Gold" || loyaltyS == "gold")
                                                {
                                                    console.log("Since you are a gold Member you recieve Free breakfast + room upgrade to next tier!");
                                                    console.log("Your total price is $127.5 \n");
                                                }

                                                else if(loyaltyS == "Platinum" || loyaltyS == "platinum")
                                                {
                                                    console.log("Since you are a Platinum Member you recieve Free breakfast + free parking + 10% additonal discount!");
                                                    console.log("Your total price is $113 \n");
                                                }
                                                
                                                else
                                                {
                                                    console.log("Your total price is $127.5 \n");
                                                }
                                        }

                                        else if(loS > 14)
                                        {
                                            // 25% discount on total
                                             let loyaltyS = prompt("Are you a loyalty member? (No, Silver, Gold, Platinum): ");
                                                if(loyaltyS == "Silver" || loyaltyS == "silver")
                                                {
                                                    console.log("Since you are a Silver Member you recieve Free Breakfast - ($20 value per night)!");
                                                    console.log("Your total price is $113.5 \n");
                                                }

                                                else if(loyaltyS == "Gold" || loyaltyS == "gold")
                                                {
                                                    console.log("Since you are a gold Member you recieve Free breakfast + room upgrade to next tier!");
                                                    console.log("Your total price is $113.5 \n");
                                                }

                                                else if(loyaltyS == "Platinum" || loyaltyS == "platinum")
                                                {
                                                    console.log("Since you are a Platinum Member you recieve Free breakfast + free parking + 10% additonal discount!");
                                                    console.log("Your total price is $101.7 \n");
                                                }

                                                else
                                                {
                                                    console.log("Your total price is $113.5 \n");
                                                }

                                        }

                                        else
                                        {
                                            let loyaltyS = prompt("Are you a loyalty member? (No, Silver, Gold, Platinum): ");
                                                if(loyaltyS == "Silver" || loyaltyS == "silver")
                                                {
                                                    console.log("Since you are a Silver Member you recieve Free Breakfast - ($20 value per night)!");
                                                    console.log("Your total price is $150 \n");
                                                }

                                                else if(loyaltyS == "Gold" || loyaltyS == "gold")
                                                {
                                                    console.log("Since you are a gold Member you recieve Free breakfast + room upgrade to next tier!");
                                                    console.log("Your total price is $150 \n");
                                                }

                                                else if(loyaltyS == "Platinum" || loyaltyS == "platinum")
                                                {
                                                    console.log("Since you are a Platinum Member you recieve Free breakfast + free parking + 10% additonal discount!");
                                                    console.log("Your total price is $135 \n");
                                                }

                                                else
                                                {
                                                    console.log("Your total pice is $150 \n");
                                                }
                                        }
                            }

                            else if(season == "Regular" || season == "regular")
                            {
                                 let loS = parseInt(prompt("How long is your Stay?: "));
                                        if(loS > 7)
                                        {
                                            // 15 % Discount on Total
                                             let loyaltyS = prompt("Are you a loyalty member? (No, Silver, Gold, Platinum): ");
                                                if(loyaltyS == "Silver" || loyaltyS == "silver")
                                                {
                                                    console.log("Since you are a Silver Member you recieve Free Breakfast - ($20 value per night)!");
                                                    console.log("Your total price is $85 \n");
                                                }

                                                else if(loyaltyS == "Gold" || loyaltyS == "gold")
                                                {
                                                    console.log("Since you are a gold Member you recieve Free breakfast + room upgrade to next tier!");
                                                    console.log("Your total price is $85 \n");
                                                }

                                                else if(loyaltyS == "Platinum" || loyaltyS == "platinum")
                                                {
                                                    console.log("Since you are a Platinum Member you recieve Free breakfast + free parking + 10% additonal discount!");
                                                    console.log("Your total price is $76.5 \n");
                                                }
                                                else
                                                {
                                                    console.log("Your total price is $85 \n");
                                                }
                                        }

                                        else if(loS > 14)
                                        {
                                            // 25% discount on total
                                             let loyaltyS = prompt("Are you a loyalty member? (No, Silver, Gold, Platinum): ");
                                                if(loyaltyS == "Silver" || loyaltyS == "silver")
                                                {
                                                    console.log("Since you are a Silver Member you recieve Free Breakfast - ($20 value per night)!");
                                                    console.log("Your total price is $75 \n");
                                                }

                                                else if(loyaltyS == "Gold" || loyaltyS == "gold")
                                                {
                                                    console.log("Since you are a gold Member you recieve Free breakfast + room upgrade to next tier!");
                                                    console.log("Your total price is $75 \n");
                                                }

                                                else if(loyaltyS == "Platinum" || loyaltyS == "platinum")
                                                {
                                                    console.log("Since you are a Platinum Member you recieve Free breakfast + free parking + 10% additonal discount!");
                                                    console.log("Your total price is $67.5 \n");
                                                }

                                                else
                                                {
                                                    console.log("Your total price is $75 \n");
                                                }

                                        }

                                        else
                                        {
                                            let loyaltyS = prompt("Are you a loyalty member? (No, Silver, Gold, Platinum): ");
                                                if(loyaltyS == "Silver" || loyaltyS == "silver")
                                                {
                                                    console.log("Since you are a Silver Member you recieve Free Breakfast - ($20 value per night)!");
                                                    console.log("Your total price is $100 \n");
                                                }

                                                else if(loyaltyS == "Gold" || loyaltyS == "gold")
                                                {
                                                    console.log("Since you are a gold Member you recieve Free breakfast + room upgrade to next tier!");
                                                    console.log("Your total price is $100 \n");
                                                }

                                                else if(loyaltyS == "Platinum" || loyaltyS == "platinum")
                                                {
                                                    console.log("Since you are a Platinum Member you recieve Free breakfast + free parking + 10% additonal discount!");
                                                    console.log("Your total price is $90 \n");
                                                }
                                                else
                                                {
                                                    console.log("Your total price is $100 \n");
                                                }
                                        }
                            }

                            else if(season == "Off-Peak" || season == "offpeak" || season == "off-peak" || season == "Off-peak" || season == "off-Peak")
                            {
                                // 20% Discount
                                 let loS = parseInt(prompt("How long is your Stay?: "));
                                        if(loS > 7)
                                        {
                                            // 15 % Discount on Total
                                             let loyaltyS = prompt("Are you a loyalty member? (No, Silver, Gold, Platinum): ");
                                                if(loyaltyS == "Silver" || loyaltyS == "silver")
                                                {
                                                    console.log("Since you are a Silver Member you recieve Free Breakfast - ($20 value per night)!");
                                                    console.log("Your total price is $68 \n");
                                                }

                                                else if(loyaltyS == "Gold" || loyaltyS == "gold")
                                                {
                                                    console.log("Since you are a gold Member you recieve Free breakfast + room upgrade to next tier!");
                                                    console.log("Your total price is $68 \n");
                                                }

                                                else if(loyaltyS == "Platinum" || loyaltyS == "platinum")
                                                {
                                                    console.log("Since you are a Platinum Member you recieve Free breakfast + free parking + 10% additonal discount!");
                                                    console.log("Your total price is $61.2 \n");
                                                }

                                                else
                                                {
                                                    console.log("Your total price is $68 \n");
                                                }
                                        }

                                        else if(loS > 14)
                                        {
                                            // 25% discount on total
                                             let loyaltyS = prompt("Are you a loyalty member? (No, Silver, Gold, Platinum): ");
                                                if(loyaltyS == "Silver" || loyaltyS == "silver")
                                                {
                                                    console.log("Since you are a Silver Member you recieve Free Breakfast - ($20 value per night)!");
                                                    console.log("Your total price is $60 \n");
                                                }

                                                else if(loyaltyS == "Gold" || loyaltyS == "gold")
                                                {
                                                    console.log("Since you are a gold Member you recieve Free breakfast + room upgrade to next tier!");
                                                    console.log("Your total price is $60 \n");
                                                }

                                                else if(loyaltyS == "Platinum" || loyaltyS == "platinum")
                                                {
                                                    console.log("Since you are a Platinum Member you recieve Free breakfast + free parking + 10% additonal discount!");
                                                    console.log("Your total price is $54 \n");
                                                }

                                                else
                                                {
                                                    console.log("Your total price is $60 \n");
                                                }

                                        }

                                        else
                                        {
                                            let loyaltyS = prompt("Are you a loyalty member? (No, Silver, Gold, Platinum): ");
                                                if(loyaltyS == "Silver" || loyaltyS == "silver")
                                                {
                                                    console.log("Since you are a Silver Member you recieve Free Breakfast - ($20 value per night)!");
                                                    console.log("Your total price is $80 \n");
                                                }

                                                else if(loyaltyS == "Gold" || loyaltyS == "gold")
                                                {
                                                    console.log("Since you are a gold Member you recieve Free breakfast + room upgrade to next tier!");
                                                    console.log("Your total price is $80 \n");
                                                }

                                                else if(loyaltyS == "Platinum" || loyaltyS == "platinum")
                                                {
                                                    console.log("Since you are a Platinum Member you recieve Free breakfast + free parking + 10% additonal discount!");
                                                    console.log("Your total price is $72 \n");
                                                }
                                                else
                                                {
                                                    console.log("Your total price is $80 \n");
                                                }
                                        }
                            }
                    }

                    else if(rType == "deluxe" || rType == "Deluxe")
                    {
                         let season = prompt("System: What season is it? (Peak, Regular, or Off-Peak): ");
                            if(season == "Peak" || season == "peak")
                            {
                                // 50% increase on Room
                                    let loS = parseInt(prompt("How long is your Stay?: "));
                                        if(loS > 7)
                                        {
                                            // 15 % Discount on Total
                                             let loyaltyS = prompt("Are you a loyalty member? (No, Silver, Gold, Platinum): ");
                                                if(loyaltyS == "Silver" || loyaltyS == "silver")
                                                {
                                                    console.log("Since you are a Silver Member you recieve Free Breakfast - ($20 value per night)!");
                                                    console.log("Your total price is $127.5 \n");
                                                }

                                                else if(loyaltyS == "Gold" || loyaltyS == "gold")
                                                {
                                                    console.log("Since you are a gold Member you recieve Free breakfast + room upgrade to next tier!");
                                                    console.log("Your total price is $127.5 \n");
                                                }

                                                else if(loyaltyS == "Platinum" || loyaltyS == "platinum")
                                                {
                                                    console.log("Since you are a Platinum Member you recieve Free breakfast + free parking + 10% additonal discount!");
                                                    console.log("Your total price is $113 \n");
                                                }
                                                
                                                else
                                                {
                                                    console.log("Your total price is $127.5 \n");
                                                }
                                        }

                                        else if(loS > 14)
                                        {
                                            // 25% discount on total
                                             let loyaltyS = prompt("Are you a loyalty member? (No, Silver, Gold, Platinum): ");
                                                if(loyaltyS == "Silver" || loyaltyS == "silver")
                                                {
                                                    console.log("Since you are a Silver Member you recieve Free Breakfast - ($20 value per night)!");
                                                    console.log("Your total price is $113.5 \n");
                                                }

                                                else if(loyaltyS == "Gold" || loyaltyS == "gold")
                                                {
                                                    console.log("Since you are a gold Member you recieve Free breakfast + room upgrade to next tier!");
                                                    console.log("Your total price is $113.5 \n");
                                                }

                                                else if(loyaltyS == "Platinum" || loyaltyS == "platinum")
                                                {
                                                    console.log("Since you are a Platinum Member you recieve Free breakfast + free parking + 10% additonal discount!");
                                                    console.log("Your total price is $101.7 \n");
                                                }

                                                else
                                                {
                                                    console.log("Your total price is $113.5 \n");
                                                }

                                        }

                                        else
                                        {
                                            let loyaltyS = prompt("Are you a loyalty member? (No, Silver, Gold, Platinum): ");
                                                if(loyaltyS == "Silver" || loyaltyS == "silver")
                                                {
                                                    console.log("Since you are a Silver Member you recieve Free Breakfast - ($20 value per night)!");
                                                    console.log("Your total price is $150 \n");
                                                }

                                                else if(loyaltyS == "Gold" || loyaltyS == "gold")
                                                {
                                                    console.log("Since you are a gold Member you recieve Free breakfast + room upgrade to next tier!");
                                                    console.log("Your total price is $150 \n");
                                                }

                                                else if(loyaltyS == "Platinum" || loyaltyS == "platinum")
                                                {
                                                    console.log("Since you are a Platinum Member you recieve Free breakfast + free parking + 10% additonal discount!");
                                                    console.log("Your total price is $135 \n");
                                                }

                                                else
                                                {
                                                    console.log("Your total pice is $150 \n");
                                                }
                                        }
                            }

                            else if(season == "Regular" || season == "regular")
                            {
                                 let loS = parseInt(prompt("How long is your Stay?: "));
                                        if(loS > 7)
                                        {
                                            // 15 % Discount on Total
                                             let loyaltyS = prompt("Are you a loyalty member? (No, Silver, Gold, Platinum): ");
                                                if(loyaltyS == "Silver" || loyaltyS == "silver")
                                                {
                                                    console.log("Since you are a Silver Member you recieve Free Breakfast - ($20 value per night)!");
                                                    console.log("Your total price is $85 \n");
                                                }

                                                else if(loyaltyS == "Gold" || loyaltyS == "gold")
                                                {
                                                    console.log("Since you are a gold Member you recieve Free breakfast + room upgrade to next tier!");
                                                    console.log("Your total price is $85 \n");
                                                }

                                                else if(loyaltyS == "Platinum" || loyaltyS == "platinum")
                                                {
                                                    console.log("Since you are a Platinum Member you recieve Free breakfast + free parking + 10% additonal discount!");
                                                    console.log("Your total price is $76.5 \n");
                                                }
                                                else
                                                {
                                                    console.log("Your total price is $85 \n");
                                                }
                                        }

                                        else if(loS > 14)
                                        {
                                            // 25% discount on total
                                             let loyaltyS = prompt("Are you a loyalty member? (No, Silver, Gold, Platinum): ");
                                                if(loyaltyS == "Silver" || loyaltyS == "silver")
                                                {
                                                    console.log("Since you are a Silver Member you recieve Free Breakfast - ($20 value per night)!");
                                                    console.log("Your total price is $75 \n");
                                                }

                                                else if(loyaltyS == "Gold" || loyaltyS == "gold")
                                                {
                                                    console.log("Since you are a gold Member you recieve Free breakfast + room upgrade to next tier!");
                                                    console.log("Your total price is $75 \n");
                                                }

                                                else if(loyaltyS == "Platinum" || loyaltyS == "platinum")
                                                {
                                                    console.log("Since you are a Platinum Member you recieve Free breakfast + free parking + 10% additonal discount!");
                                                    console.log("Your total price is $67.5 \n");
                                                }

                                                else
                                                {
                                                    console.log("Your total price is $75 \n");
                                                }

                                        }

                                        else
                                        {
                                            let loyaltyS = prompt("Are you a loyalty member? (No, Silver, Gold, Platinum): ");
                                                if(loyaltyS == "Silver" || loyaltyS == "silver")
                                                {
                                                    console.log("Since you are a Silver Member you recieve Free Breakfast - ($20 value per night)!");
                                                    console.log("Your total price is $100 \n");
                                                }

                                                else if(loyaltyS == "Gold" || loyaltyS == "gold")
                                                {
                                                    console.log("Since you are a gold Member you recieve Free breakfast + room upgrade to next tier!");
                                                    console.log("Your total price is $100 \n");
                                                }

                                                else if(loyaltyS == "Platinum" || loyaltyS == "platinum")
                                                {
                                                    console.log("Since you are a Platinum Member you recieve Free breakfast + free parking + 10% additonal discount!");
                                                    console.log("Your total price is $90 \n");
                                                }
                                                else
                                                {
                                                    console.log("Your total price is $100 \n");
                                                }
                                        }
                            }

                            else if(season == "Off-Peak" || season == "offpeak" || season == "off-peak" || season == "Off-peak" || season == "off-Peak")
                            {
                                // 20% Discount
                                 let loS = parseInt(prompt("How long is your Stay?: "));
                                        if(loS > 7)
                                        {
                                            // 15 % Discount on Total
                                             let loyaltyS = prompt("Are you a loyalty member? (No, Silver, Gold, Platinum): ");
                                                if(loyaltyS == "Silver" || loyaltyS == "silver")
                                                {
                                                    console.log("Since you are a Silver Member you recieve Free Breakfast - ($20 value per night)!");
                                                    console.log("Your total price is $68 \n");
                                                }

                                                else if(loyaltyS == "Gold" || loyaltyS == "gold")
                                                {
                                                    console.log("Since you are a gold Member you recieve Free breakfast + room upgrade to next tier!");
                                                    console.log("Your total price is $68 \n");
                                                }

                                                else if(loyaltyS == "Platinum" || loyaltyS == "platinum")
                                                {
                                                    console.log("Since you are a Platinum Member you recieve Free breakfast + free parking + 10% additonal discount!");
                                                    console.log("Your total price is $61.2 \n");
                                                }

                                                else
                                                {
                                                    console.log("Your total price is $68 \n");
                                                }
                                        }

                                        else if(loS > 14)
                                        {
                                            // 25% discount on total
                                             let loyaltyS = prompt("Are you a loyalty member? (No, Silver, Gold, Platinum): ");
                                                if(loyaltyS == "Silver" || loyaltyS == "silver")
                                                {
                                                    console.log("Since you are a Silver Member you recieve Free Breakfast - ($20 value per night)!");
                                                    console.log("Your total price is $60 \n");
                                                }

                                                else if(loyaltyS == "Gold" || loyaltyS == "gold")
                                                {
                                                    console.log("Since you are a gold Member you recieve Free breakfast + room upgrade to next tier!");
                                                    console.log("Your total price is $60 \n");
                                                }

                                                else if(loyaltyS == "Platinum" || loyaltyS == "platinum")
                                                {
                                                    console.log("Since you are a Platinum Member you recieve Free breakfast + free parking + 10% additonal discount!");
                                                    console.log("Your total price is $54 \n");
                                                }

                                                else
                                                {
                                                    console.log("Your total price is $60 \n");
                                                }

                                        }

                                        else
                                        {
                                            let loyaltyS = prompt("Are you a loyalty member? (No, Silver, Gold, Platinum): ");
                                                if(loyaltyS == "Silver" || loyaltyS == "silver")
                                                {
                                                    console.log("Since you are a Silver Member you recieve Free Breakfast - ($20 value per night)!");
                                                    console.log("Your total price is $80 \n");
                                                }

                                                else if(loyaltyS == "Gold" || loyaltyS == "gold")
                                                {
                                                    console.log("Since you are a gold Member you recieve Free breakfast + room upgrade to next tier!");
                                                    console.log("Your total price is $80 \n");
                                                }

                                                else if(loyaltyS == "Platinum" || loyaltyS == "platinum")
                                                {
                                                    console.log("Since you are a Platinum Member you recieve Free breakfast + free parking + 10% additonal discount!");
                                                    console.log("Your total price is $72 \n");
                                                }
                                                else
                                                {
                                                    console.log("Your total price is $80 \n");
                                                }
                                        }
                            }
                    }

                    else if(rType == "suite" || "Suite")
                    {
                         let season = prompt("System: What season is it? (Peak, Regular, or Off-Peak): ");
                            if(season == "Peak" || season == "peak")
                            {
                                let cost1 = 250;
                                // 50% increase on Room
                                let cost150 = cost1 * 1.50;
                                    let loS = parseInt(prompt("How long is your Stay?: "));
                                        if(loS > 7)
                                        {
                                            // 15 % Discount on Total
                                             let loyaltyS = prompt("Are you a loyalty member? (No, Silver, Gold, Platinum): ");
                                                if(loyaltyS == "Silver" || loyaltyS == "silver")
                                                {
                                                    console.log("Since you are a Silver Member you recieve Free Breakfast - ($20 value per night)!");
                                                    console.log("Your total price is $" + (cost150*0.85) + "\n");
                                                }

                                                else if(loyaltyS == "Gold" || loyaltyS == "gold")
                                                {
                                                    console.log("Since you are a gold Member you recieve Free breakfast + room upgrade to next tier!");
                                                    console.log("Your total price is $"+(cost150 * 0.85) + "\n");
                                                }

                                                else if(loyaltyS == "Platinum" || loyaltyS == "platinum")
                                                {
                                                    console.log("Since you are a Platinum Member you recieve Free breakfast + free parking + 10% additonal discount!");
                                                    console.log("Your total price is $" +((cost150*0.85)*0.9) + "\n");
                                                }
                                                
                                                else
                                                {
                                                    console.log("Your total price is $"+(cost150 * 0.85) + "\n");
                                                }
                                        }

                                        else if(loS > 14)
                                        {
                                            // 25% discount on total
                                             let loyaltyS = prompt("Are you a loyalty member? (No, Silver, Gold, Platinum): ");
                                                if(loyaltyS == "Silver" || loyaltyS == "silver")
                                                {
                                                    console.log("Since you are a Silver Member you recieve Free Breakfast - ($20 value per night)!");
                                                    console.log("Your total price is $"+(cost150 * 0.75) + "\n");
                                                }

                                                else if(loyaltyS == "Gold" || loyaltyS == "gold")
                                                {
                                                    console.log("Since you are a gold Member you recieve Free breakfast + room upgrade to next tier!");
                                                    console.log("Your total price is $"+(cost150 * 0.75) + "\n");
                                                }

                                                else if(loyaltyS == "Platinum" || loyaltyS == "platinum")
                                                {
                                                    console.log("Since you are a Platinum Member you recieve Free breakfast + free parking + 10% additonal discount!");
                                                    console.log("Your total price is $101.7 \n");
                                                }

                                                else
                                                {
                                                    console.log("Your total price is $" +((cost150*0.75)*0.9) + "\n");
                                                }

                                        }

                                        else
                                        {
                                            let loyaltyS = prompt("Are you a loyalty member? (No, Silver, Gold, Platinum): ");
                                                if(loyaltyS == "Silver" || loyaltyS == "silver")
                                                {
                                                    console.log("Since you are a Silver Member you recieve Free Breakfast - ($20 value per night)!");
                                                    console.log("Your total price is $" + cost150 + "\n");
                                                }

                                                else if(loyaltyS == "Gold" || loyaltyS == "gold")
                                                {
                                                    console.log("Since you are a gold Member you recieve Free breakfast + room upgrade to next tier!");
                                                    console.log("Your total price is $" + cost150 + "\n");
                                                }

                                                else if(loyaltyS == "Platinum" || loyaltyS == "platinum")
                                                {
                                                    console.log("Since you are a Platinum Member you recieve Free breakfast + free parking + 10% additonal discount!");
                                                    console.log("Your total price is $" + (cost150*0.9) + "\n");
                                                }

                                                else
                                                {
                                                    console.log("Your total price is $" + cost150 + "\n");
                                                }
                                        }
                            }

                            else if(season == "Regular" || season == "regular")
                            {
                                let cost2 = 250;
                                 let loS = parseInt(prompt("How long is your Stay?: "));
                                        if(loS > 7)
                                        {
                                            let cost25 = cost2 * 0.85;
                                            // 15 % Discount on Total
                                             let loyaltyS = prompt("Are you a loyalty member? (No, Silver, Gold, Platinum): ");
                                                if(loyaltyS == "Silver" || loyaltyS == "silver")
                                                {
                                                    console.log("Since you are a Silver Member you recieve Free Breakfast - ($20 value per night)!");
                                                    console.log("Your total price is $" + cost25 + "\n");
                                                }

                                                else if(loyaltyS == "Gold" || loyaltyS == "gold")
                                                {
                                                    console.log("Since you are a gold Member you recieve Free breakfast + room upgrade to next tier!");
                                                    cconsole.log("Your total price is $" + cost25 + "\n");
                                                }

                                                else if(loyaltyS == "Platinum" || loyaltyS == "platinum")
                                                {
                                                    console.log("Since you are a Platinum Member you recieve Free breakfast + free parking + 10% additonal discount!");
                                                    console.log("Your total price is $" + (cost25*0.9) + "\n");
                                                }
                                                else
                                                {
                                                        console.log("Your total price is $" + cost25 + "\n");
                                                }
                                        }

                                        else if(loS > 14)
                                        {
                                            let cost256 = cost2 * 0.75; 
                                            // 25% discount on total
                                             let loyaltyS = prompt("Are you a loyalty member? (No, Silver, Gold, Platinum): ");
                                                if(loyaltyS == "Silver" || loyaltyS == "silver")
                                                {
                                                    console.log("Since you are a Silver Member you recieve Free Breakfast - ($20 value per night)!");
                                                    console.log("Your total price is $" + cost256 + "\n");
                                                }

                                                else if(loyaltyS == "Gold" || loyaltyS == "gold")
                                                {
                                                    console.log("Since you are a gold Member you recieve Free breakfast + room upgrade to next tier!");
                                                    console.log("Your total price is $" + cost256 + "\n");
                                                }

                                                else if(loyaltyS == "Platinum" || loyaltyS == "platinum")
                                                {
                                                    console.log("Since you are a Platinum Member you recieve Free breakfast + free parking + 10% additonal discount!");
                                                    console.log("Your total price is $" + (cost256*0.9) + "\n");
                                                }

                                                else
                                                {
                                                    console.log("Your total price is $" + cost2 + "\n");
                                                }

                                        }

                                        else
                                        {
                                            let loyaltyS = prompt("Are you a loyalty member? (No, Silver, Gold, Platinum): ");
                                                if(loyaltyS == "Silver" || loyaltyS == "silver")
                                                {
                                                    console.log("Since you are a Silver Member you recieve Free Breakfast - ($20 value per night)!");
                                                    cconsole.log("Your total price is $" + cost2 + "\n");
                                                }

                                                else if(loyaltyS == "Gold" || loyaltyS == "gold")
                                                {
                                                    console.log("Since you are a gold Member you recieve Free breakfast + room upgrade to next tier!");
                                                    console.log("Your total price is $" + cost2 + "\n");
                                                }

                                                else if(loyaltyS == "Platinum" || loyaltyS == "platinum")
                                                {
                                                    console.log("Since you are a Platinum Member you recieve Free breakfast + free parking + 10% additonal discount!");
                                                    console.log("Your total price is $" + (cost2*0.9) + "\n");
                                                }
                                                else
                                                {
                                                    console.log("Your total price is $" + cost2 + "\n");
                                                }
                                        }
                            }

                            else if(season == "Off-Peak" || season == "offpeak" || season == "off-peak" || season == "Off-peak" || season == "off-Peak")
                            {
                                // 20% Discount
                                 let loS = parseInt(prompt("How long is your Stay?: "));
                                        if(loS > 7)
                                        {
                                            // 15 % Discount on Total
                                             let loyaltyS = prompt("Are you a loyalty member? (No, Silver, Gold, Platinum): ");
                                                if(loyaltyS == "Silver" || loyaltyS == "silver")
                                                {
                                                    console.log("Since you are a Silver Member you recieve Free Breakfast - ($20 value per night)!");
                                                    console.log("Your total price is $68 \n");
                                                }

                                                else if(loyaltyS == "Gold" || loyaltyS == "gold")
                                                {
                                                    console.log("Since you are a gold Member you recieve Free breakfast + room upgrade to next tier!");
                                                    console.log("Your total price is $68 \n");
                                                }

                                                else if(loyaltyS == "Platinum" || loyaltyS == "platinum")
                                                {
                                                    console.log("Since you are a Platinum Member you recieve Free breakfast + free parking + 10% additonal discount!");
                                                    console.log("Your total price is $61.2 \n");
                                                }

                                                else
                                                {
                                                    console.log("Your total price is $68 \n");
                                                }
                                        }

                                        else if(loS > 14)
                                        {
                                            // 25% discount on total
                                             let loyaltyS = prompt("Are you a loyalty member? (No, Silver, Gold, Platinum): ");
                                                if(loyaltyS == "Silver" || loyaltyS == "silver")
                                                {
                                                    console.log("Since you are a Silver Member you recieve Free Breakfast - ($20 value per night)!");
                                                    console.log("Your total price is $60 \n");
                                                }

                                                else if(loyaltyS == "Gold" || loyaltyS == "gold")
                                                {
                                                    console.log("Since you are a gold Member you recieve Free breakfast + room upgrade to next tier!");
                                                    console.log("Your total price is $60 \n");
                                                }

                                                else if(loyaltyS == "Platinum" || loyaltyS == "platinum")
                                                {
                                                    console.log("Since you are a Platinum Member you recieve Free breakfast + free parking + 10% additonal discount!");
                                                    console.log("Your total price is $54 \n");
                                                }

                                                else
                                                {
                                                    console.log("Your total price is $60 \n");
                                                }

                                        }

                                        else
                                        {
                                            let loyaltyS = prompt("Are you a loyalty member? (No, Silver, Gold, Platinum): ");
                                                if(loyaltyS == "Silver" || loyaltyS == "silver")
                                                {
                                                    console.log("Since you are a Silver Member you recieve Free Breakfast - ($20 value per night)!");
                                                    console.log("Your total price is $80 \n");
                                                }

                                                else if(loyaltyS == "Gold" || loyaltyS == "gold")
                                                {
                                                    console.log("Since you are a gold Member you recieve Free breakfast + room upgrade to next tier!");
                                                    console.log("Your total price is $80 \n");
                                                }

                                                else if(loyaltyS == "Platinum" || loyaltyS == "platinum")
                                                {
                                                    console.log("Since you are a Platinum Member you recieve Free breakfast + free parking + 10% additonal discount!");
                                                    console.log("Your total price is $72 \n");
                                                }
                                                else
                                                {
                                                    console.log("Your total price is $80 \n");
                                                }
                                        }
                            }
                    }

                    else
                    {
                        console.log("Invalid Entry!");
                    }
