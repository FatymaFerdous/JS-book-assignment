                                                //    // task01
                                                //    . Write a function that displays current date & time in your
                                                //    browser.
function currentDate() {
    let date = new Date()
    document.write(date)
}
currentDate()
                            
                                                //    // task02
                                                //    Write a function that takes first & last name and then it
                                                //    greets the user using his full name.
function input() {
    let first= prompt("Enter your first name") 
    let last= prompt("Enter your last name") 
    let fullName = first + " " + last
    alert("Hello! " + fullName)
}                                                
input()
                                                

                                                //    // task03
                                                //    Write a function that adds two numbers (input by user)
                                                //    and returns the sum of two numbers.
function sum() {
    let firstNum= +prompt("Enter first number") 
    let lastNum= +prompt("Enter last number") 
    let fullNum = firstNum + lastNum
    alert(fullNum)
}
sum() 


                                                //    // task04
                                                //    Calculator:
                                                //    Write a function that takes three arguments num1, num2
                                                //    & operator & compute the desired operation. Return and
                                                //    show the desired result in your browser.
function operation(num1, num2, operator) {
    let res ;

    if (operator === "+" ) {
        res = num1 + num2
    }
else if (operator === "-" ) {
    res = num1 - num2
}
else if (operator === "*" ) {
    res = num1 * num2
}
else if (operator === "/" ) {
    res = num1 / num2
}
else{
}
alert(res)
}
operation(3 , 4 , "+")

  

                                                //    // task05
                                                //    5. Write a function that squares its argument.
function square(number) {
    let result = number ** 2
    alert(result)
}
square(6)
  

                                                //    // task06
                                                //    6. Write a function that computes factorial of a number.
function factorial(num) {
    if (num > 1) {
        return num*factorial(num - 1)
    }
    return 1
}
alert(factorial(6))

                                                //    // task07
                                                //    Write a function that take start and end number as inputs
                                                //    & display counting in your browser.
function counting() {
    let start = +prompt("Enter starting number")
    let end = +prompt("Enter ending number")

    for (let i = start; i <= end; i++) {
        document.write(i + "<br>");
      }
}
counting()


  
                                                //    // task08
                                                //    Write a nested function that computes hypotenuse of a
                                                //    right angle triangle.
                                                //    Hypotenuse2 = Base2 + Perpendicular2
                                                //    Take base and perpendicular as inputs.
                                                //    Outer function : calculateHypotenuse()
                                                //    Inner function: calculateSquare()                                                   
function hypotenuse() {
    function square(num) {
        return num ** 2
    }
    let base = +prompt("Enter base")
    let perpendicular = +prompt("Enter perpendicular")
    let Base2 = square(base);
    let  Perpendicular2 = square(perpendicular);

    let sum = Base2 + Perpendicular2
    let Hypotenuse2 = Math.sqrt(sum)

    alert("Hypotenuse: " + Hypotenuse2)
}

hypotenuse()

  
  
                                                //    // task09
                                                //    Write a function that calculates the area of a rectangle.
                                                //    A = width * height
                                                //    Pass width and height in following manner:
                                                //   i. Arguments as value
                                                //   ii. Arguments as variables
function calculateArea(width, height) {
  let area = width * height;
  return area;
}
alert(calculateArea(4, 5))   //   i. Arguments as value

let rectangleWidth = 8;
let rectangleHeight = 10;
alert(calculateArea(rectangleWidth, rectangleHeight)) //   ii. Arguments as variables

                                                //    // task10
                                                //    Write a JavaScript function that checks whether a passed
                                                //    string is palindrome or not?
                                                //    A palindrome is word, phrase, or sequence that reads the same backward as
                                                //    forward, e.g., madam.
function palindrome() {
    let string = prompt("Enter a string")
    let arrayValues = string.split("")
    let reverse = arrayValues.reverse().join("")

    if(string === reverse) {
                alert("It is a palindrome");
            }
            else {
                alert("It is not a palindrome");
            }
}
palindrome()

                                                //    // task11
                                                //    Write a JavaScript function that accepts a string as a
                                                //    parameter and converts the first letter of each word of the
                                                //    string in upper case.
                                                //    EXAMPLE STRING : 'the quick brown fox'
                                                //    EXPECTED OUTPUT : 'The Quick Brown Fox'
function upperCase(string) {
    let words = string.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    return words.join(" ");
}
let inputString = prompt("Enter a string")
let convertedString = upperCase(inputString);
alert(convertedString);

  
                                                //    // task12
                                                //    Write a JavaScript function that accepts a string as a
                                                //    parameter and find the longest word within the string.
                                                //    EXAMPLE STRING : 'Web Development Tutorial'
                                                //    EXPECTED OUTPUT : 'Development'
function myLongestWord(str) {
    let words = str.split(" ");
    let longestWord = "";

    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
          longestWord = words[i];
      }
}                                                   
     return longestWord;
}
let userInput = prompt("Enter a string")
let myString = myLongestWord(userInput);
alert(myString);


                                                //    // task13
                                                //    Write a JavaScript function that accepts two arguments, a
                                                //    string and a letter and the function will count the number of
                                                //    occurrences of the specified letter within the string.
                                                //    Sample arguments : 'JSResourceS.com', 'o'                                                   
function occurrences(strings , letter) {
    let count = strings.split(letter).length - 1
    return count
}
alert(occurrences("JSResourceS.com" , "o"))


                                                //    // task14
                                                //    The Geometrizer
                                                //    Create 2 functions that calculate properties of a circle, using
                                                //    the definitions here.
                                                //    Create a function called calcCircumference:
                                                //    • Pass the radius to the function.
                                                //    • Calculate the circumference based on the radius, and output
                                                //    "The circumference is NN".
                                                //    Create a function called calcArea:
                                                //    • Pass the radius to the function.
                                                //    • Calculate the area based on the radius, and output "The area
                                                //    is NN".
                                                //    Circumference of circle = 2πr
                                                //    Area of circle = πr2
function calcCircumference() {
    let radius = 25
    let circumference = 2 * 3.142 * radius
    document.write("The circumference is " + circumference)
}

function calcArea() {
    let radius = 12
    let area = 3.142 * radius**2
    document.write("<br>The area is " + area)
}

calcCircumference()
calcArea()     
                           