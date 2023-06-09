                                                        // task01
                                                        // Declare and initialize an empty multidimensional array.
                                                        // (Array of arrays)
let activities = [
    ['Work', 3],
    ['Eat', 1],
    ['Sleep', 2]
];

                                                        // task02
                                                        // Declare and initialize a multidimensional array
                                                        // representing the following matrix:
let matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];                            
document.write(matrix[0] + "<br>" + matrix[1] + "<br>" + matrix[2] )


                                                        // task03
                                                        // Write a program to print numeric counting from 1 to 10.


for (let i = 1; i <= 10; i++) {
  document.write(i + "<br>");
}


                                                        // task04
                                                        // Write a program to print multiplication table of any
                                                        // number using for loop. Table number & length should be
                                                        // taken as an input from user.
let tableNumber = +prompt("Enter the table number:");
let tableLength = +prompt("Enter the table length:");
document.write("<h3>Table of " + tableNumber + "</h3>" + "<h4>length: " + tableLength + "<br> </h4>");
for (var i = 1; i <= tableLength; i++) {
    document.write(tableNumber + " x " + i + " = " + tableNumber * i + "<br>");
  }


                                                        // task05
                                                        // Write a program to print items of the following array
                                                        // using for loop:
                                                        // fruits = [“apple”, “banana”, “mango”, “orange”,
                                                        // “strawberry”]
let fruits = ["apple", "banana", "mango", "orange", "strawberry"] 

for (let i = 0; i < fruits.length; i++) {
    document.write (fruits[i] + "<br>")
}
for (let i = 0; i < fruits.length; i++) {
document.write ("Element at index "+ i + " is " +fruits[i] + "<br>")
}  


                                                        // task06
                                                        // Generate the following series in your browser. See
                                                        // example output.
                                                        // a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
                                                        // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
                                                        // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
                                                        // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
                                                        // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
   //    Counting                                                     
document.write("<h3>Counting:</h3>");
for (let i = 1; i <= 15; i++) {
    document.write(i + ", ")
}
    // Reverse counting
document.write("<h3>Reverse counting:</h3>");
for (let i = 10; i >= 1; i--) {
    document.write(i + ", ")
}
        //   Even
document.write("<h3>Even:</h3>");
for (let i = 0; i <= 20; i += 2) {
    document.write(i + ", ")
}
        //   Odd
document.write("<h3>Odd:</h3>");
for (let i = 1; i <= 20; i+=2) {
    document.write(i + ", ")
}
        //   Series
document.write("<h3>Series:</h3>");
for (let i = 2; i <= 20; i+=2) {
    document.write(i + "k, ")
}

                                                        // task07
                                                        // You have an array
                                                        // A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
                                                        // Write a program to enable “search by user input” in an
                                                        // array.
                                                        // After searching, prompt the user whether the given item is
                                                        // found in the list or not. Example:
let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Enter an item to search in the bakery:");

let found = false
let index= -1

for (let i = 0; i < bakeryItems.length; i++) {
    if (userInput == bakeryItems[i]) {
        found = true 
        index = i
        break
    }  
}
if (found) {
    document.write(userInput + " is available at index " + index + " in our bakery");
} else {
    document.write("We are sorry. " + userInput + " is not available in our bakery");
}


                                                        // task08
                                                        // Write a program to identify the largest number in the
                                                        // given array.
                                                        // A = [24, 53, 78, 91, 12].
let A = [24, 53, 78, 91, 12]
let largestNumer = A[0]

for (let i = 1; i < A.length; i++) {
    if (A[i] > largestNumer) {
        largestNumer = A[i]
    }
}
document.write("Array items: " + A)
document.write("<br>The largest number is: " + largestNumer)



                                                        // task09
                                                        // Write a program to identify the smallest number in the
                                                        // given array.
                                                        // A = [24, 53, 78, 91, 12]
let a = [24, 53, 78, 91, 12]
let smallestNumer = a[0]

for (let i = 1; i < a.length; i++) {
    if (a[i] < smallestNumer) {
        smallestNumer = a[i]
    }
}
document.write("Array items: " + a)
document.write("<br>The smallest number is: " + smallestNumer)


                                                        
                                                        // task10
                                                        // Write a program to print multiples of 5 ranging 1 to
                                                        // 100.
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
    document.write(i + ", ")
}
}



                      