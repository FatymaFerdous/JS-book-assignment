                                                        // task01
                                                        // Write a program that takes a character (number or string)
                                                        // in a variable & checks whether the given input is a
                                                        // number, uppercase letter or lower case letter. (Hint: ASCII
                                                        // codes:- A=65, Z=90, a=97, z=122).
let userInput = prompt("Enter a character:")

let charCode = userInput.charCodeAt(0)

if (charCode >= 48 && charCode <= 57) {
  alert("The input is a number.")
} else if (charCode >= 65 && charCode <= 90) {
  alert("The input is an uppercase letter.")
} else if (charCode >= 97 && charCode <= 122) {
  alert("The input is a lowercase letter.")
} else {
  alert("The input is not a number nor a letter.")
}
                                                        

                                                        // task02
                                                        // Write a JavaScript program that accept two integers and
                                                        // display the larger. Also show if the two integers are equal.
let num1 = +prompt("Enter the first integer:")
var num2 = +prompt("Enter the second integer:")

if (num1 > num2) {
  alert("The larger number is: " + num1)
} else if (num2 > num1) {
  alert("The larger number is: " + num2)
} else {
  alert("Both integers are equal.")
}


                                                        
                                                        // task03
                                                        // Write a program that takes input a number from user &
                                                        // state whether the number is positive, negative or zero.
let number = +prompt("Enter a number")

if (number > 0) {
  alert("The number is positive");
} else if (number < 0) {
  alert("The number is negative");
} else {
  alert("The number is zero");
}


                                                        // task04
                                                        // Write a program that takes a character (i.e. string of
                                                        // length 1) and returns true if it is a vowel, false otherwise
let letter = prompt("Enter a letter:");
let vowels = ['a', 'e', 'i', 'o', 'u'];
if (vowels.includes(letter.toLowerCase())) {
    alert("True")
}
else{
    alert("False")
}


                                                        // task05
                                                        // Write a program that
                                                        // a. Store correct password in a JS variable.
                                                        // b. Asks user to enter his/her password
                                                        // c. Validate the two passwords:
                                                        // i. Check if user has entered password. If not, then
                                                        // give message “ Please enter your password”
                                                        // ii. Check if both passwords are same. If they are
                                                        // same, show message “Correct! The password you
                                                        // entered matches the original password”. Show
                                                        // “Incorrect password” otherwise
let password = "12345";

let userPassword = prompt("Enter your password");

if (userPassword === "") {
  alert("Please enter your password");
} else if (userPassword === password) {
  alert("Correct! The password you entered matches the original password");
} else {
  alert("Incorrect password");
}



                                                        // task06
                                                        // This if/else statement does not work. Try to fix it:
                                                        // var greeting;
                                                        // var hour = 13;
                                                        // if (hour < 18) {
                                                        // greeting = "Good day";
                                                        // else
                                                        // greeting = "Good evening";
                                                        // }
let greeting;
let hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
alert(greeting);



                                                        // task07
                                                        // Write a program that takes time as input from user in 24
                                                        // hours clock format like: 1900 = 7pm. Implement the
                                                        // following case using if, else & else if statements


let time = prompt("enter time 24 hours clock format like: 1900 = 7pm")
if (time >= 0000 && time < 1200) {
    alert("Good morning!")
}else if (time >= 1200 && time < 1700 ) {
    alert("Good afternoon")
}else if (time >= 1700 && time < 2100 ) {
    alert("Good evening!")
}else if (time >= 2100 && time < 2359 ) {
    alert("Good night!")
}else {
    alert(
      "Invalid input! Please enter time in 24 hours clock format"
    );
  }

                                                        