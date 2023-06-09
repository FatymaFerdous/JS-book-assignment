                            // task01
                            // Write a program to take “city” name as input from user. If
                            // user enters “Karachi”, welcome the user like this:
                            // “Welcome to city of lights” 
let userInput = prompt("Enter your city name")
if (userInput == "karachi") {
    alert("Welcome to city of lights")
}  
else {

}







       


                                                        // task02
                                                        // Write a program to take “gender” as input from user. If the
                                                        // user is male, give the message: Good Morning Sir. If the
                                                        // user is female, give the message: Good Morning Ma’am.
let gender = prompt("enter your gender")
if (gender == "male") {
    alert("Good Morning Sir")
} else if (gender == "female") {
    alert("Good Morning Ma’am")
}
else{

}


                                                        // task03
                                                        // Write a program to take input color of road traffic signal
                                                        // from the user & show the message according to this table:
let trafficSignal = prompt("What's the traffic signal colour?") 
if (trafficSignal == "red") {
alert("Must Stop")                                                       
} else if (trafficSignal == "yellow") {
    alert("Ready to move")
}
else if (trafficSignal == "green") {
    alert("Move now")
}
else{

}


                                                        // task04
                                                        // Write a program to take input remaining fuel in car (in
                                                        // litres) from user. If the current fuel is less than 0.25litres,
                                                        // show the message “Please refill the fuel in your car”
let fuel = +prompt("Enter the remaining fuel in litres")
if (fuel < 0.25) {
    alert("Please refill the fuel in your car ")
}
else{
    alert("you're good to go")
}


                                                        // task05
                                                        // Run this script, & check whether alert message would be
                                                        // displayed or not. Record the outputs.
                                                        // a. var a = 4;
                                                        // if (++a === 5){
                                                        // alert("given condition for variable a is true");
                                                        // }
                                                        // b. var b = 82;
                                                        // if (b++ === 83){
                                                        // alert("given condition for variable b is true");
                                                        // }
                                                        // c. var c = 12;
                                                        // if (c++ === 13){
                                                        // alert("condition 1 is true");
                                                        // }
                                                        // if (c === 13){
                                                        // alert("condition 2 is true");
                                                        // }
                                                        // if (++c < 14){
                                                        // alert("condition 3 is true");
                                                        // }
                                                        // if(c === 14){
                                                        // alert("condition 4 is true");
                                                        // }
                                                        // d. var materialCost = 20000;
                                                        // var laborCost = 2000;
                                                        // var totalCost = materialCost + laborCost;
                                                        // if (totalCost === laborCost + materialCost){
                                                        // alert("The cost equals");
                                                        // }
                                                        // e. if (true){
                                                        // alert("True");
                                                        // }
                                                        // if (false){
                                                        // alert("False");
                                                        // }
                                                        // f. if("car" < "cat"){
                                                        //     alert("car is smaller than cat");
                                                        //     }
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}

if("car" < "cat"){
alert("car is smaller than cat");
}


                                                        // task06
                                                        // Write a program to take input the marks obtained in three
                                                        // subjects & total marks. Compute & show the resulting
                                                        // percentage on your page. Take percentage & compute
                                                        // grade as per following table:
let sub1 = +prompt("Enter marks obtained in Subject 1:");
let sub2 = +prompt("Enter marks obtained in Subject 2:");
let sub3 = +prompt("Enter marks obtained in Subject 3:");
let totalMarks = +prompt("Enter total marks:");   

let obtMarks = sub1 + sub2 + sub3;
let percentage = (obtMarks / totalMarks) * 100;

let grade;
let remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}
  
document.write("<h1>Mark Sheet</h1>" );
document.write("<br>Total marks: " + totalMarks);
document.write("<br>Marks obtained: " + obtMarks);
document.write("<br>Percentage: " + percentage.toFixed(2) + "%");
document.write("<br>Grade: " + grade);
document.write("<br>Remarks: " + remarks);



                                                        // task07
                                                        // Guess game:
                                                        // Store a secret number (ranging from 1 to 10) in a variable.
                                                        // Prompt user to guess the secret number.
                                                        // a. If user guesses the same number, show “Bingo! Correct
                                                        // answer”.
                                                        // b. If the guessed number +1 is the secret number, show
                                                        // “Close enough to the correct answer”.
let secretNumber = 3
let userNum = +prompt("guess the secret number")
if (userNum === secretNumber) {
    alert("Bingo! Correct answer")
} else if (userNum === secretNumber + 1) {
    alert("Close enough to the correct answer");
  } else {

}


                                                        // task08
                                                        // Write a program to check whether the given number is
                                                        // divisible by 3. Show the message to the user if the number
                                                        // is divisible by 3.
let number1 = +prompt("Enter a number:");
if (number1 % 3 === 0) {
  alert("The number is divisible by 3");
} else {
    alert("The number is not divisible by 3");
}


                                                        // task09
                                                        // Write a program that checks whether the given input is an
                                                        // even number or an odd number.
let number = +prompt("Enter a number:");

if (number % 2 === 0) {
  alert("The number is even.");
} else {
  alert("The number is odd.");
}
                                                        

                                                        // task10
                                                        // Write a program that takes temperature as input and
                                                        // shows a message based on following criteria
                                                        // a. T > 40 then “It is too hot outside.”
                                                        // b. T > 30 then “The Weather today is Normal.”
                                                        // c. T > 20 then “Today’s Weather is cool.”
                                                        // d. T > 10 then “OMG! Today’s weather is so Cool.”
let temperature = +prompt("Enter the temperature:");
if (temperature > 40) {
  alert("It is too hot outside.");
} else if (temperature > 30) {
  alert("The Weather today is Normal.");
} else if (temperature > 20) {
  alert("Today’s Weather is cool.");
} else if (temperature > 10) {
  alert("OMG! Today’s weather is so Cool.");
} else {
  alert("The temperature is too low.");
}


                                                        // task11
                                                        // Write a program to create a calculator for +,-,*, / & %
                                                        // using if statements. Take the following input:
                                                        // a. First number
                                                        // b. Second number
                                                        // c. Operation (+, -, *, /, %)
                                                        // Compute & show the calculated result to user.

let numb1 = +prompt("Enter the first number:");
let numb2 = +prompt("Enter the second number:");
let operation = prompt("Enter the operation (+, -, *, /, %):");

let result;

if (operation === "+") {
  result = numb1 + numb2;
  alert("The calculated result is: " + result)
} else if (operation === "-") {
  result = numb1 - numb2;
  alert("The calculated result is: " + result)
} else if (operation === "*") {
  result = numb1 * numb2;
  alert("The calculated result is: " + result)
} else if (operation === "/") {
  result = numb1 / numb2;
  alert("The calculated result is: " + result)
} else if (operation === "%") {
  result = numb1 % numb2;
  alert("The calculated result is: " + result)
} else {
  alert("Invalid operation");
  
}




                                                        




                    
