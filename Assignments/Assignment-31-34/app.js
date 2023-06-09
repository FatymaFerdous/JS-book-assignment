                                        //    // task01
                                        //    Write a program that displays current date and time in
                                        //    your browser.                                        
let currentDate = new Date()
document.write(currentDate)    


                                        //    // task02
                                        //    Write a program that alerts the current month in words.
                                        //    For example December
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let date = new Date();
let month = months[date.getMonth()]
document.write("current month: "+month)


                                        //    // task03
                                        //    Write a program that alerts the first 3 letters of the current
                                        //    day, for example if today is Sunday then alert will show
                                        //    Sun.
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
let dates = new Date();
let day = days[dates.getDay()]
document.write("Today is: "+day)


                                        //    // task04
                                        //    Write a program that displays a message “It’s Fun day” if
                                        //    its Saturday or Sunday today.
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let newDates = new Date();
let dayIndex = newDates.getDay()
if (dayIndex == 0 || dayIndex == 6 ) {
    alert("It's Fun day")
} 
else{
    alert("It's working day")
}


                                        //    // task05
                                        //    Write a program that shows the message “First fifteen
                                        //    days of the month” if the date is less than 16th of the month
                                        //    else shows “Last days of the month”.
let myDate = new Date()
if (myDate.getDate() < 16 ) {
    document.write("First fifteen days of the month")
}else {
    document.write("Last days of the month")
}


                                        //    // task06
                                        //    Write a program that determines the minutes since
                                        //    midnight, Jan. 1, 1970 and assigns it to a variable that
                                        //    hasn't been declared beforehand. Use any variable you like
                                        //    to represent the Date object.
let inDate = new Date()
let millisecondsSince1970 = inDate.getTime()
var minutesSince1970 = millisecondsSince1970 / (1000 * 60)
document.write("<br>Current date: " + inDate)
document.write("<br>Elapsed milliseconds since january 1,1970: " + millisecondsSince1970 )
document.write("<br>Elapsed minutes since january 1,1970: " + minutesSince1970 )




                                        //    // task07
                                        //    Write a program that tests whether it's before noon and
                                        //    alert “Its AM” else “its PM”.
let onDate = new Date()
if (onDate.getHours() < 12 ) {
    alert("It's AM");
} else {
  alert("It's PM");
}

                                        //   // task08
                                        //   Write a program that creates a Date object for the last day
                                        //   of the last month of 2020 and assigns it to variable named
                                        //   laterDate.
let laterDate = new Date(2020, 11, 31)
document.write("Later date: " + laterDate )


                                        //   // task09
                                        //   Create a date object of the starting date of this Ramadan
                                        //   and alert the number of days past since 1st Ramadan?
                                        //   Note: 1st Ramadan was on June 18, 2015
let ramadanDate = new Date(2015, 05, 18)
let CurrentDate = new Date()
let timeDiff = CurrentDate.getTime() - ramadanDate.getTime()
let daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
document.write(daysPassed + " days have passed since 1st Ramadan, 2015")


                                        //   // task10
                                        //   Write a program that displays in your browser the
                                        //   seconds that elapsed between the reference date and the
                                        //   beginning of 2015.

let refDate = new Date("December 5, 2015 22:50:16")
let begin2015 = new Date("January 1, 2015")
let difference = refDate.getTime() - begin2015.getTime();
let secondsPassed = Math.floor(difference / 1000);
document.write("on reference date "+ refDate + "<br>")
document.write(secondsPassed + " seconds had passed since the beginning of 2015")



                                        //   // task11
                                        //   Create a Date object for the current date and time.
                                        //   Extract the hours, reset the date object an hour ahead and
                                        //   finally display the date object in your browser
let mineDate = new Date()
document.write("Current date: " + mineDate)
var currentHours = mineDate.getHours()
mineDate.setHours(currentHours - 1)
document.write("<br>1 hour ago, it was " + mineDate)



                                        //   // task12
                                        //   Write a program that creates a date object and show the
                                        //   date in an alert box that is reset to 100 years back?
let dated = new Date()
alert("Current date: " + dated);
dated.setFullYear (dated.getFullYear() - 100)
alert("100 years back, it was " + dated);


                                        //   // task13
                                        //   Write a program to ask the user about his age. Calculate
                                        //   and show his birth year in your browser.
let age = +prompt("Enter your age")
let curYear = new Date().getFullYear()
document.write("Your age is " + age)
document.write("<br>Your birth year is " + (curYear - age ))


                                        //   // task14
                                        //   Write a program to generate your K-Electric bill in your
                                        //   browser. All the amounts should be rounded off to 2
                                        //   decimal places. Display the following fields:
                                        //   a. Customer Name
                                        //   b. Current Month
                                        //   c. Number of units
                                        //   d. Charges per unit

                                        //   e. Net Amount Payable (within Due Date)
                                        //   f. Late Payment Surcharge
                                        //   g. Gross Amount Payable (after Due Date)
                                        //   Where,
                                        //   Net Amount Payable (within Due Date) = Number of units * Charges per unit
                                        //   & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge                                          
let customerName = prompt("Enter your name")
let currentMonth = prompt("Enter current month")
let NumberOfUnits = prompt("Enter number of units")
let ChargesPerUnit = prompt("Enter charges per unit")
let lateCharges = prompt("Enter late payment surcharge ")

let netAmount =( NumberOfUnits * ChargesPerUnit) .toFixed(2)
let grossAmount = (parseFloat(netAmount) + parseFloat(lateCharges)).toFixed(2)

document.write("<h3> K-Electric bill </h3>")
document.write("<br>Customer Name: " + customerName)
document.write("<br>Current Month: "+ currentMonth)
document.write("<br>Number of units: "+NumberOfUnits)
document.write("<br>Charges per unit: "+ChargesPerUnit)
document.write("<br>Net Amount Payable (within Due Date): "+netAmount)
document.write("<br>Late Payment Surcharge: "+lateCharges)
document.write("<br>Gross Amount Payable (after Due Date): "+grossAmount)



