                                                        // task01
                                                        //  Write a program that take two numbers & add them in a
                                                        // new variable. Show the result in your browser.
let num1 = +prompt("Enter first number");
let num2 = +prompt("Enter second number");
let result= num1 + num2
document.write("Sum of " + num1 + " and " + num2 + " is " + result );


                                                        // task02
                                                        // Repeat task1 for subtraction, multiplication, division &
                                                        // modulus.
        // subtraction  

let num3 = +prompt("Enter first number");
let num4 = +prompt("Enter second number");
let result1= num3 - num4
document.write("subtraction of " + num3 + " and " + num4 + " is " + result1 +"<br>");
                                                       
        // multiplication 

let num5 = +prompt("Enter first number");
let num6 = +prompt("Enter second number");
let result2= num5 * num6
document.write("multiplication of " + num5 + " and " + num6 + " is " + result2 +"<br>" );

        // division  

let num7 = +prompt("Enter first number");
let num8 = +prompt("Enter second number");
let result3= num7 / num8
document.write("division of " + num7 + " and " + num8 + " is " + result3 +"<br>");

        // modulus 

let num9 = +prompt("Enter first number");
let numb = +prompt("Enter second number");
let result4= num9 % numb
document.write("modulus of " + num9 + " and " + numb + " is " + result4 +"<br>");




                                                        // task03
                                                        // . Do the following using JS Mathematic Expressions
                                                        // a. Declare a variable.
                                                        // b. Show the value of variable in your browser like “Value
                                                        // after variable declaration is: ??”.
                                                        // c. Initialize the variable with some number.
                                                        // d. Show the value of variable in your browser like “Initial
                                                        // value: 5”.
                                                        // e. Increment the variable.
                                                        // f. Show the value of variable in your browser like “Value
                                                        // after increment is: 6”.
                                                        // g. Add 7 to the variable.
                                                        // h. Show the value of variable in your browser like “Value
                                                        // after addition is: 13”.
                                                        // i. Decrement the variable.
                                                        // j. Show the value of variable in your browser like “Value
                                                        // after decrement is: 12”.
                                                        // k. Show the remainder after dividing the variable’s value
                                                        // by 3.
                                                        // l. Output : “The remainder is : 0”
let value;
document.write("Value after variable deceleration is: " + value); 
value = 5;
document.write("<br> Initial value is: " + value);
value++;
document.write("<br>Value after increment is: " + value);
value += 7;
document.write("<br>Value after addition is: " + value);
value--;
document.write("<br>Value after decrement is: " + value);
document.write("<br> The remainder is: " + value % 3)



                                                        // task04
                                                        // Cost of one movie ticket is 600 PKR. Write a script to store
                                                        // ticket price in a variable & calculate the cost of buying 5
                                                        // tickets to a movie. Example output:
let ticketPrice = 600
document.write("Total cost to buy 5 tickets of a movie is " + ticketPrice*5 + "PKR" )



                                                        // task05
                                                        // Write a script to display multiplication table of any
                                                        // number in your browser. E.g
let table = prompt("Enter any number");
document.write("<h2>Table of " + table + "</h2>");
for (let i = 1; i <= 10 ; i++) {
    document.write(table + " x " + i + " = " + table*i + "<br>")  
}



                                                        // task06
                                                        // The Temperature Converter: It’s hot out! Let’s make a
                                                        // converter based on the steps here.
                                                        // a. Store a Celsius temperature into a variable.
                                                        // b. Convert it to Fahrenheit & output “NNoC is NNoF”.
                                                        // c. Now store a Fahrenheit temperature into a variable.
                                                        // d. Convert it to Celsius & output “NNoF is NNoC”.
                                                        // Conversion Formulae:
                                                        // °C = (°F - 32 )× 5/9
                                                        // °F = (°C × 9/5) + 32.

let celsiusTemp = 35;
let convert = (celsiusTemp * 9 / 5) + 32;
document.write(celsiusTemp  + "°C is " + convert + " °F <br> " );
let fahrenTemp= 94;
var convert2 = (fahrenTemp - 32) * 5 / 9;
document.write(fahrenTemp  + "°F is " + convert2 + " °C" );

                                                        

                                                        // task07
                                                        // Write a program to implement checkout process of a
                                                        // shopping cart system for an e-commerce website. Store
                                                        // the following in variables
                                                        // a. Price of item 1
                                                        // b. Price of item 2
                                                        // c. Ordered quantity of item 1
                                                        // d. Ordered Quantity of item 2
                                                        // e. Shipping charges
                                                        // Compute the total cost & show the receipt in your browser.

let item1Price = 650;
let item2Price = 100;
let quantity1 = 3;
let quantity2 = 7;
let shippingCharges = 100;
let total = item1Price*quantity1 + item2Price*quantity2 + shippingCharges;
document.write("Total cost of your order is " + total);

                                                        

                                                        // task08
                                                        // Store total marks & marks obtained by a student in 2
                                                        // variables. Compute the percentage & show the result in
                                                        // your browser 

let totalMarks = 980;
let obtained = 804;
let percentage = obtained/totalMarks * 100
document.write ("Total Marks: "+ totalMarks + "<br>Marks Obtained: " +obtained + "<br>Percentage: " + percentage );


                                                        // task09
                                                        // Assume we have 10 US dollars & 25 Saudi Riyals. Write a
                                                        // script to convert the total currency to Pakistani Rupees.
                                                        // Perform all calculations in a single expression.
                                                        // (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
                                                        // and 1 Saudi Riyal = 28 Pakistani Rupee)

let dollars = 10;
let riyals = 25;
let conversion = dollars* 104.80 + riyals*28
document.write("Total Currency in PKR: " + conversion);



                                                        // task10
                                                        // Write a program to initialize a variable with some
                                                        // number and do arithmetic in following sequence:
                                                        // a. Add 5
                                                        // b. Multiply by 10
                                                        // c. Divide the result by 2
                                                        // Perform all calculations in a single expression

let num = 2003
let operations= ((num+5) *10 )/2
document.write(operations)



                                                        // task11
                                                        // The Age Calculator: Forgot how old someone is?
                                                        // Calculate it!
                                                        // a. Store the current year in a variable.
                                                        // b. Store their birth year in a variable.
                                                        // c. Calculate their 2 possible ages based on the stored
                                                        // values.
                                                        // Output them to the screen like so: “They are either NN or NN
                                                        // years old”
                                                        
let currentYear = 2023;
let brithYear = 2003;
let age1 = currentYear - brithYear;
let age2 =  age1--;
document.write("You  are either " + age1 + " or " + age2 + " years old")




                                                        // task12
                                                        // The Geometrizer: Calculate properties of a circle.
                                                        // a. Store a radius into a variable.
                                                        // b. Calculate the circumference based on the radius, and
                                                        // output “The circumference is NN”.
                                                        // (Hint : Circumference of a circle = 2 π r , π = 3.142)
                                                        // Calculate the area based on the radius, and output “The
                                                        // area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
let radius = 20
let circumference = 2 * 3.142 * radius
let area = 3.142 * radius**2   
document.write("<h3>The Geometrizer</h3><br>Radius of a circle is: " + radius + 
"<br>The circumference is: " + circumference + "<br>The area is: " + area)                                                      




                                                        // task13
                                                        // The Lifetime Supply Calculator: Ever wonder how
                                                        // much a “lifetime supply” of your favorite snack is?
                                                        // Wonder no more.
                                                        // a. Store your favorite snack into a variable
                                                        // b. Store your current age into a variable.
                                                        // c. Store a maximum age into a variable.
                                                        // d. Store an estimated amount per day (as a number).
                                                        // e. Calculate how many would you eat total for the rest of
                                                        // your life.
                                                        // Output the result to the screen like so: “You will need
                                                        // NNNN to last you until the ripe old age of NN”.
let favoriteSnack = "lays"
let currentAge = 19
let maxAge = 70
let estimatedAmount= 30
let amountForRestOfLife = (maxAge-currentAge) * (estimatedAmount*365)
document.write("You will need "+amountForRestOfLife +" to last you until the ripe old age of "+ maxAge );





                                                        