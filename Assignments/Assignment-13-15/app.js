                            // task01
                            // Declare an empty array using JS literal notation to store
                            // student names in future.                   
let studentNames = [];


                                                        // task02
                                                        // Declare an empty array using JS object notation to store
                                                        // student names in future.
let data = {
  students: []
};

                                    
                                                        // task03
                                                        // Declare and initialize a strings array
let strings = ["ali", "anas", "hamza", "asim"];




                                                        // task04
                                                        // Declare and initialize a numbers array.
let numbers = [2, 4, 6, 8, 10];



                                                        // task05
                                                        // Declare and initialize a boolean array.
let boolean = [true, false];



                                                        // task06
                                                        // Declare and initialize a mixed array.
let mixed = ["sumsung", 1 , true, "iphone", 2, false];


                                                        // task07
                                                        // Declare and Initialize an array and store available
                                                        // education qualifications in Pakistan (e.g. SSC, HSC, BCS,
                                                        // BS, BCOM, MS, M. Phil., PhD). Show the listed
                                                        // qualifications in your browser like:

let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]
document.write("<h3>Qualifications:</h3>"+ qualifications[0] + "<br>" + qualifications[1] + "<br>" + qualifications[2] + "<br>" + qualifications[3] + "<br>" + qualifications[4] + "<br>" + qualifications[5] + "<br>" + qualifications[6] + "<br>" + qualifications[7] )
                                                        


                                                        // task08
                                                        // Write a program to store 3 student names in an array.Take
                                                        // another array to store score of these three students.
                                                        // Assume that total marks are 500 for each student, display
                                                        // the scores & percentages of students like:

let studNames = ["Seher", "Minahil", "Fatima"]   
let studScore = [390, 435 , 420]
let totalMarks = 500 

document.write("Score of "+studNames[0] + " is " + studScore[0] + ". Percentage: "+ (studScore[0] / totalMarks) * 100 + "%<br>" )
document.write("Score of "+studNames[1] + " is " + studScore[1] + ". Percentage: "+ (studScore[1] / totalMarks) * 100 + "%<br>" )
document.write("Score of "+studNames[2] + " is " + studScore[2] + ". Percentage: "+ (studScore[2] / totalMarks) * 100 + "%<br>" )



                                                        // task09
                                                        // Initialize an array with color names. Display the array
                                                        // elements in your browser.
                                                        // a. Ask the user what color he/she wants to add to the
                                                        // beginning & add that color to the beginning of the array.
                                                        // Display the updated array in your browser.
                                                        // b. Ask the user what color he/she wants to add to the end
                                                        // & add that color to the end of the array. Display the
                                                        // updated array in your browser.
                                                        // c. Add two more color to the beginning of the array.
                                                        // Display the updated array in your browser.
                                                        // d. Delete the first color in the array. Display the updated
                                                        // array in your browser.
                                                        // e. Delete the last color in the array. Display the updated
                                                        // array in your browser.
                                                        // f. Ask the user at which index he/she wants to add a color
                                                        // & color name. Then add the color to desired
                                                        // position/index. . Display the updated array in your
                                                        // browser.
                                                        // g. Ask the user at which index he/she wants to delete
                                                        // color(s) & how many colors he/she wants to delete. Then
                                                        // remove the same number of color(s) from user-defined
                                                        // position/index. . Display the updated array in your
                                                        // browser.
let colorNames = ["red" , "green" , "blue"]
document.write("<h3>Original Array</h3>" + colorNames);

let userInput1 = prompt("what colour you want to add to the beginning")
colorNames.unshift(userInput1)
document.write ("<h3>Array after adding color to the beginning</h3>" + colorNames)

let userInput2 = prompt("what colour you want to add to the end")
colorNames.push(userInput2)
document.write ("<h3>Array after adding color to the end</h3>" + colorNames)

colorNames.unshift("orange", "purple");
document.write ("<h3>Array after adding 2 more colors to the beginning</h3>" + colorNames)

colorNames.shift()
document.write("<h3>Array after deleting the first color</h3>" + colorNames)

colorNames.pop()
document.write("<h3>Array after deleting the last color</h3>"  + colorNames )


let userInput3 = prompt("At which index you want to add a color")
let userInput4 = prompt("what colour you want to add at " + userInput3 )
colorNames.splice(userInput3 , 0 , userInput4)
document.write("<h3>Array after adding color at the desired position:</h3>" + colorNames)

let userInput5 = prompt("At which index you want to remove a color")
let userInput6 = prompt("How many colors you wants to remove")
colorNames.splice( userInput5 , userInput6)
document.write("<h3>Array after deleting color from the your defined position</h3>" + colorNames)



                                                        // task10
                                                        // Write a program to store student scores in an array &
                                                        // sort the array in ascending order using Array’s sort
                                                        // method.

let studScores = [23, 56, 43, 96, 74, 96, 84, 77]
document.write("Scores of students: " + studScores )     
document.write("<br> Ordered Scores of students: " + studScores.sort() )                                                  

                            
                                                        // task11
                                                        // Write a program to initialize an array with city names.
                                                        // Copy 3 array elements from cities array to selectedCities
                                                        // array.
let cityNames = ["karachi", "lahore", "islamabad", "quetta", "multan", "gujranwala", 'peshawar']
document.write("<h3>Cities list: </h3> " + cityNames ) 
let selectedCities = [cityNames.slice(2,5)]
document.write("<h3> Selected cities list: </h3> " + selectedCities ) 


                                                        // task12
                                                        // Write a program to create a single string from the
                                                        // below mentioned array:
                                                        // var arr = [“This ”, “ is ”, “ my ”, “ cat”];
                                                        // (Use array’s join method)
let arr = ["This", "is", "my", "cat"];
document.write("<h3>Array:  </h3> " + arr ) 
document.write("<h3>String:  </h3> " + arr.join(" ") ) 



                                                        // task13
                                                        // Create a new array. Store values one by one in such a way
                                                        // that you can access the values in the order in which they
                                                        // were stored. (FIFO-First In First Out)
let devices = []
devices.push("keyboard")
devices.push("mouse")
devices.push("printer")
devices.push("monitor")
document.write("<h4>Devices:  </h4> " + devices )

document.write("<h4>Out:  </h4> " + devices.slice(0,1) )
document.write("<h4>Out:  </h4> " + devices.slice(1,2) )
document.write("<h4>Out:  </h4> " + devices.slice(2,3) )
document.write("<h4>Out:  </h4> " + devices.slice(3,4) )


                                                        // task14
                                                        // Create a new array. Store values one by one in such a way
                                                        // that you can access the values in reverse order. (Last InFirst Out)
let device = []
device.push("keyboard")
device.push("mouse")
device.push("printer")
device.push("monitor")
document.write("<h4>Devices:  </h4> " + device )

document.write("<h4>Out:  </h4> " + device.slice(3,4) )
document.write("<h4>Out:  </h4> " + device.slice(2,3) )
document.write("<h4>Out:  </h4> " + device.slice(1,2) )
document.write("<h4>Out:  </h4> " + device.slice(0,1) )


                                                        // task15
                                                        // Write a program to store phone manufacturers (Apple,
                                                        // Samsung, Motorola, Nokia, Sony & Haier) in an array.
                                                        // Display the following dropdown/select menu in your
                                                        // browser using document.write() method:

let phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
document.write("<select>"
+ "<option>" + phone[0] + "</option>"
+ "<option>" + phone[1] + "</option>"
+ "<option>" + phone[2] + "</option>"
+ "<option>" + phone[3] + "</option>"
+ "<option>" + phone[4] + "</option>"
+ "<option>" + phone[5] + "</option>"
+ "</select>")




