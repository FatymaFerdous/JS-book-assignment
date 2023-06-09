                                            //  // task01
                                            //  Write a program that takes a positive integer from user &
                                            //  display the following in your browser.
                                            //  a. number
                                            //  b. round off value of the number
                                            //  c. floor value of the number
                                            //  d. ceil value of the number
let userInput = +prompt("Enter a positive integer")
if (userInput > 0) {
    document.write("number: " + userInput + "<br>")
document.write("round off value: " + Math.round(userInput) + "<br>")
document.write("floor value: " + Math.floor(userInput) + "<br>")
document.write("ceil value: " + Math.ceil(userInput) + "<br>")

}else{
    alert("please enter a positive integer")
}




                                            //  // task02
                                            //  Write a program that takes a negative floating point
                                            //  number from user & display the following in your browser.
                                            //  a. number
                                            //  b. round off value of the number
                                            //  c. floor value of the number
                                            //  d. ceil value of the number
let number = +prompt("Enter a negative floating point number")
if (number < 0) {
    document.write("number: " + number + "<br>")
document.write("round off value: " + Math.round(number) + "<br>")
document.write("floor value: " + Math.floor(number) + "<br>")
document.write("ceil value: " + Math.ceil(number) + "<br>")

}else{
    alert("please enter a negative floating point number")
}

                                            //  // task03
                                            //  Write a program that displays the absolute value of a
                                            //  number.
                                            //  E.g. absolute value of -4 is 4 & absolute value of 5 is 5
let numb = +prompt("Enter any number")
document.write("The absolute value of : " + numb + " is "+ Math.abs(numb))


                                            //  // task04
                                            //  Write a program that simulates a dice using random()
                                            //  method of JS Math class. Display the value of dice in your
                                            //  browser.:
let diceValue = Math.ceil(Math.random() * 6);
alert("random dice value: " + diceValue)


                                            //  // task05
                                            //  Write a program that simulates a coin toss using random()
                                            //  method of JS Math class. Display the value of coin in your
                                            //  browser
let coinValue = Math.ceil(Math.random() * 2)
if (coinValue == 1) {
  alert("random coin value: Tails");
} else {
  alert("random coin value: Heads");
}


                                            //  // task06
                                            //  Write a program that shows a random number between 1
                                            //  and 100 in your browser.
let randomNum = Math.ceil(Math.random() * 100)
alert("random number between 1 and 100: " + randomNum )


                                            //  // task07
                                            //  Write a program that asks the user about his weight. Parse
                                            //  the user input and display his weight in your browser.
                                            //  Possible user inputs can be:
                                            //  a. 50
                                            //  b. 50kgs
                                            //  c. 50.2kgs
                                            //  d. 50.2kilograms
let takeInput = prompt("Enter your weight in kilograms")
let convert = parseFloat(takeInput)
alert("The weight of user is " + convert + " kilograms" )



                                            //  // task08
                                            //  Write a program that stores a random secret number from
                                            //  1 to 10 in a variable. Ask the user to input a number
                                            //  between 1 and 10. If the user input equals the secret
                                            //  number, congratulate the user.
let secretNumber= Math.ceil(Math.random() * 10)
let userNum = +prompt ("Guess a number between 1 to 10");
if (userNum === secretNumber){
    alert ("Congratulations! You guessed the number");
} else  {
    alert ("Sorry Guess again!");
} 
console.log (secretNumber)



