                                                    // task01
                                                    // Write a program to take a number in a variable, do the
                                                    // required arithmetic to display the following result in your
                                                    // browser:
let x= 10;
document.write("The value of a is: " + x + "<br>........................................<br>") 

document.write("<br>The value of ++a is: " + (++x) + "<br>");
document.write("Now the value of a is: " + x + "<br>");

document.write("<br>The value of a++ is: " + (x++) + "<br>");
document.write("Now the value of a is: " + x + "<br>");

document.write("<br>The value of --a is: " + (--x) + "<br>");
document.write("Now the value of a is: " + x + "<br>");

document.write("<br>The value of a-- is: " + (x--) + "<br>");
document.write("Now the value of a is: " + x + "<br>");
        


                                                        // task02
                                                        // What will be the output in variables a, b & result after
                                                        // execution of the following script:
                                                        // var a = 2, b = 1;
                                                        // var result = --a - --b + ++b + b--;
                                                        // Explain the output at each stage:
                                                        // --a;
                                                        // --a - --b;
                                                        // --a - --b + ++b;
                                                        // --a - --b + ++b + b--;

let a = 2
let b = 1;
let result = --a - --b + ++b + b--;
document.write("a is " + a + "<br>b is " + b + "<br>result is " + result)



                                                        // // task03
                                                        // Write a program that takes input a name from user &
                                                        // greet the user.
let userInput = prompt("enter your name")
alert("Welcome!! "+ userInput )                                                        




                                                        // task04
                                                        // Write a program to take input a number from user &
                                                        // display it’s multiplication table on your browser. If user
                                                        // does not enter a new number, multiplication table of 5
                                                        // should be displayed by default.
let number = +prompt("Enter any number", "5");
for (let i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " +number * i + "<br>")
}


                                                        // task05
                                                        // Take
                                                        // a) Take three subjects name from user and store them in 3
                                                        // different variables.
                                                        // b) Total marks for each subject is 100, store it in another
                                                        // variable.
                                                        // c) Take obtained marks for first subject from user and
                                                        // stored it in different variable
                                                        // d) Take obtained marks for remaining 2 subjects from user
                                                        // and store them in variables.
                                                        // e) Now calculate total marks and percentage and show the
                                                        // result in browser like this.(Hint: user table)


let sub1 = prompt("Enter your first subject");
let sub2 = prompt("Enter your second subject");
let sub3 = prompt("Enter your third subject");
let total = 100;

let obtMarks1 = +prompt("Enter the marks of the first subject");
let obtMarks2 = +prompt("Enter the marks of the second subject");
let obtMarks3 = +prompt("Enter the marks of the third subject");
let totalObtainedMarks = obtMarks1 + obtMarks2 + obtMarks3;

let percentage = (totalObtainedMarks / (3 * total)) * 100;

document.write("Subject&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total Marks&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtained Marks&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Percentage<br>");
document.write(sub1 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + total + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + obtMarks1 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + (obtMarks1 / total) * 100 + "%<br>");
document.write(sub2 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + total + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + obtMarks2 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + (obtMarks2 / total) * 100 + "%<br>");
document.write(sub3 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + total + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + obtMarks3 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + (obtMarks3 / total) * 100 + "%<br>");
document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + total * 3 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + totalObtainedMarks + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + percentage.toFixed(2) + "%");
 