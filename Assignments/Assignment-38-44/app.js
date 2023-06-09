                                            //    // task01
                                            //    Write a custom function power ( a, b ), to calculate the value of
                                            //    a raised to b.
function power(a, b) {
  alert (a ** b);
}
power(3, 3)


                                            //    // task02
                                            //    Any year is entered through the keyboard. Write a function to
                                            //    determine whether the year is a leap year or not.
                                            //    Leap years ..., 2012, 2016, 2020, …
function leap() {
    let input= +prompt("enter any year to know whether it's a leap year or not")
    switch (true) {
        case input % 4 === 0:
            alert("its a leap year")
            break;

        default:
            alert("its not a leap year ")
    }
}
leap()

                                            //    // task03
                                            //    If the lengths of the sides of a triangle are denoted by a, b, and
                                            //    c, then area of triangle is given by
                                            //    area = S(S − a)(S − b)(S − c)
                                            //    where, S = ( a + b + c ) / 2
                                            //    Calculate area of triangle using 2 functions
function triangle() {
    let a = +prompt("Enter the length of side A");
    let b = +prompt("Enter the length of side B");
    let c = +prompt("Enter the length of side C");
    return [a, b, c]
}                                               
function triangle2() {
    let S = (myTriangle[0] , myTriangle[1] , myTriangle[2]) / 2
    let area = S*(S - myTriangle[0])*(S - myTriangle[1])*(S - myTriangle[2])
    return area 
}
let myTriangle=  triangle()
let area = triangle2(myTriangle)
alert("The area of the triangle is: " + area)


                                            //    // task04
                                            //    Write a function that receives marks received by a student in 3
                                            //    subjects and returns the average and percentage of these
                                            //    marks. there should be 3 functions one is the mainFunction
                                            //    and other are for average and percentage. Call those functions
                                            //    from mainFunction and display result in mainFunction
function Average(sub1, sub2, sub3) {
    return (sub1 + sub2 + sub3) / 3;
}
function Percentage(totalMarks, obtainedMarks) {
    return (obtainedMarks / totalMarks) * 100;
}
function mainFunction() {
    let sub1Marks = +prompt("Enter marks obtained in subject 1");
    let sub2Marks = +prompt("Enter marks obtained in subject 2");
    let sub3Marks = +prompt("Enter marks obtained in subject 3");

    let average = Average(sub1Marks, sub2Marks, sub3Marks);
    let percentage = Percentage(100, average);

    alert("Average marks: " + average + "\n Percentage: " + percentage + "%");
}
mainFunction();


                                            //    // task05
                                            //    You have learned the function indexOf. Code your own custom
                                            //    function that will perform the same functionality. You can code
                                            //    for single character as of now
function customIndexOf(string, character) {
    let index = -1
    let i = 0
    while (i < string.length) {
        switch (string[i]) {
            case character:
                index = i; 
                break;
        }
        i++; 
    }
    return index;
}
let inputString = prompt("Enter a word")
let searchCharacter = prompt("Enter a letter to know index of it")

let result = customIndexOf(inputString, searchCharacter);
document.write("Index of '" + searchCharacter + "' in the string: " + result)


                                            //    // task06
                                            //    Write a function to delete all vowels from a sentence. Assume
                                            //    that the sentence is not more than 25 characters long
let sentences = prompt("Enter a word")                                            
function deleteVowels(sentences) {
    let result = "";
    let i = 0
    while (i < sentence.length) {
      let character = sentence[i];
      switch (character) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          break;
  
        default:
          result += character;
      }
      i++
    }
    return result;
  }
  let res = deleteVowels(sentence);
  document.write(res);

                                            //    // task07
                                            //    Write a function with switch statement to count the number of
                                            //    occurrences of any two vowels in succession in a line of text.
                                            //    For example, in the sentence
                                            //    “Pleases read this application and give me gratuity”
                                            //    Such occurrences are ea, ea, ui.
function countVowelsInSuccession(sentence) {
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
      let character = sentence[i]
      switch (character) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
      
          if (i + 1 < sentence.length) {
            let nextCharacter = sentence[i + 1]
            switch (nextCharacter) {
              case 'a':
              case 'e':
              case 'i':
              case 'o':
              case 'u':
                count++
               
            }
          }
          break
        default:
          break
      }
    }
    return count;
  }
  let sentence = "Pleases read this application and give me gratuity"
let count = countVowelsInSuccession(sentence)
document.write(count)


                                            //    // task08
                                            //    The distance between two cities (in km.) is input through the
                                            //    keyboard. Write four functions to convert and print this
                                            //    distance in meters, feet, inches and centimeters.
let distanceInKm = +prompt("Enter the distance between two cities in kilometers:")

function convertToMeters(distanceInKm) {
  return distanceInKm * 1000;
}
function convertToFeet(distanceInKm) {
  return distanceInKm * 3280.84;
}
function convertToInches(distanceInKm) {
  return distanceInKm * 39370.1;
}
function convertToCentimeters(distanceInKm) {
  return distanceInKm * 100000;
}
let distanceInMeters = convertToMeters(distanceInKm);
let distanceInFeet = convertToFeet(distanceInKm);
let distanceInInches = convertToInches(distanceInKm);
let distanceInCentimeters = convertToCentimeters(distanceInKm);

document.write("Distance in meters:", distanceInMeters + "<br>" + "Distance in feet:", distanceInFeet + "<br>" + 
"Distance in inches:", distanceInInches + "<br>"+ "Distance in centimeters:", distanceInCentimeters + "<br>")


                                            //    // task09
                                            //    Write a program to calculate overtime pay of employees.
                                            //    Overtime is paid at the rate of Rs. 12.00 per hour for every hour
                                            //    worked above 40 hours. Assume that employees do not work
                                            //    for fractional part of an hour.
function calculateOvertimePay(hoursWorked) {
  let regularHours = 40
  let overtimeRate = 12.00
  
  if (hoursWorked <= regularHours) {
    return 0;
  } else {
    let overtimeHours = hoursWorked - regularHours
    let overtimePay = overtimeHours * overtimeRate
    return overtimePay
  }
}
let hoursWorked = +prompt("Enter the number of hours worked:")
let overtimePay = calculateOvertimePay(hoursWorked)
alert("The overtime pay is Rs. " + overtimePay.toFixed(2))



                                            //    // task10
                                            //    A cashier has currency notes of denominations 10, 50 and
                                            //    100. If the amount to be withdrawn is input through the
                                            //    keyboard in hundreds, find the total number of currency notes
                                            //    of each denomination the cashier will have to give to the
                                            //    withdrawer.                             
let amount = +prompt("Enter the amount to be withdrawn (in hundreds): ")

function calculateCurrencyNotes(amount) {
  let notes100 = 0;
  let notes50 = 0;
  let notes10 = 0;

  while (amount >= 100) {
    notes100++;
    amount -= 100;
  }
  while (amount >= 50) {
    notes50++;
    amount -= 50;
  }
  while (amount >= 10) {
    notes10++;
    amount -= 10;
  }
  return {
    notes100: notes100,
    notes50: notes50,
    notes10: notes10
  };
}
let notes = calculateCurrencyNotes(amount);
alert("you will have " + notes.notes100 + " hundred notes " + notes.notes50 + " fifty notes " + notes.notes10 + " ten notes ");

