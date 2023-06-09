                                                   // task01
                                                //    Write a program that takes two user inputs for first and
                                                //    last name using prompt and merge them in a new variable
                                                //    titled fullName. Greet the user using his full name.
let first= prompt("Enter your first name") 
let last= prompt("Enter your last name") 
let fullName = first + " " + last
alert("Hello! " + fullName)


                                                   // task02
                                                //    Write a program to take a user input about his favorite
                                                //    mobile phone model. Find and display the length of user
                                                //    input in your browser
let favMbl = prompt("Enter your favorite mobile phone model name")
document.write("My favourite phone is: " + favMbl)
document.write("<br>Lenght of string: " + favMbl.length)



                                                   // task03
                                                //    Write a program to find the index of letter “n” in the word
                                                //    “Pakistani” and display the result in your browser 
let myString = "Pakistani"
document.write("String: " + myString)
document.write("<br>Index of 'n': " + myString.indexOf("n"))


                                                   // task04
                                                //    Write a program to find the last index of letter “l” in the
                                                //    word “Hello World” and display the result in your browser.
let word = "Hello World"
document.write("String: " + word)
document.write("<br>Last index of 'l': " + word.lastIndexOf("l"))

                                                   // task05
                                                //    Write a program to find the character at 3rd index in the
                                                //    word “Pakistani” and display the result in your browser
let string = "Pakistani"
document.write("String: " + string)
document.write("<br>Character at index 3: " + string.charAt(3))


                                                   // task06
                                                //    Repeat Q1 using string concat() method
let firstName= prompt("Enter your first name") 
let lastName= prompt("Enter your last name") 
let full = firstName.concat (" " + lastName)
alert("Hello! " + full)



                                                   // task07
                                                //    Write a program to replace the “Hyder” to “Islam” in the
                                                //    word “Hyderabad” and display the result in your browser.
let city = "Hyderabad"
document.write("City: " + city)
document.write("<br>After replacement: " + city.replace("Hyder" , "Islam"))


                                                   // task08
                                                //    Write a program to replace all occurrences of “and” in the
                                                //    string with “&” and display the result in your browser.
                                                //    var message = “Ali and Sami are best friends. They play cricket and
                                                //    football together.”
let message = "Ali and Sami are best friends. They play cricket and football together."
let newMessage = message.replace("and" , "&")
document.write(newMessage.replace("and" , "&"))

   
                                                   // task09
                                                //    Write a program that converts a string “472” to a number
                                                //    472. Display the values & types in your browser.
let numString = "472"
document.write("Value: " + numString + "<br>Type: " + typeof(numString) )
let convert = Number(numString)
document.write("<br>Value: " + convert + "<br>Type: " + typeof(convert))


                                                   // task10
                                                //    Write a program that takes user input. Convert and
                                                //    show the input in capital letters
let userInput = prompt("enter any word to convert in capitalized form")
document.write("User input: " + userInput)
document.write("<br>Upper case: " + userInput.toLocaleUpperCase())


                                                   // task11
                                                //    Write a program that takes user input. Convert and
                                                //    show the input in title case.
let input = prompt("enter any word to convert in title case")  
document.write("User input: " + input) 
let ConvertInput = input.toLocaleLowerCase()
let capitalized = ConvertInput.slice(0,1)
let caps = capitalized.toLocaleUpperCase()
document.write("<br>Title case: " + caps+ConvertInput.slice(1))


                                                   // task12
                                                //    Write a program that converts the variable num to
                                                //    string.
                                                //    var num = 35.36 ;
                                                //    Remove the dot to display “3536” display in your browser.
let numb = 35.36
let tostring = numb.toString()
document.write("Number: " + numb)
document.write("<br>Result: " + tostring.replace("." , ""))


                                                   // task13
                                                //    Write a program to take user input and store username
                                                //    in a variable. If the username contains any special symbol
                                                //    among [@ . , !], prompt the user to enter a valid username.
                                                //    For character codes of [@ .
                                                //    Note:
                                                //    ASCII code of ! is 33
                                                //    ASCII code of , is 44
                                                //    ASCII code of . is 46
                                                //    ASCII code of @ is 64
let uName = prompt("Enter your username:");
if (uName.includes(String.fromCharCode(33)) || uName.includes(String.fromCharCode(44)) || uName.includes(String.fromCharCode(46)) || uName.includes(String.fromCharCode(64)) ) {
   alert("Enter a valid username")
}
else{
   alert("hello")
}
                                                


                                                   // task14
                                                //    You have an array
                                                //    A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
                                                //    Write a program to enable “search by user input” in an
                                                //    array. After searching, prompt the user whether the given
                                                //    item is found in the list or not.
                                                //    Note: Perform case insensitive search. Whether the user
                                                //    enters cookie, Cookie, COOKIE or coOkIE, program
                                                //    should inform about its availability. Example:
let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
let inputOfUser = prompt("Enter an item to search in the bakery:");
let myInput = inputOfUser.toLowerCase()
let found = false
let index= -1

for (let i = 0; i < bakeryItems.length; i++) {
    if (myInput == bakeryItems[i]) {
        found = true 
        index = i
        break
    }  
}
if (found) {
    document.write(myInput + " is available at index " + index + " in our bakery");
} else {
    document.write("We are sorry. " + myInput + " is not available in our bakery");
}



                                                   // task15
                                                //    Write a program to take password as an input from
                                                //    user. The password must qualify these requirements:
                                                //    a. It should contain alphabets and numbers
                                                //    b. It should not start with a number
                                                //    c. It must at least 6 characters long
                                                //    If the password does not meet above requirements,
                                                //    prompt the user to enter a valid password.
                                                //    For character codes of a-z, A-Z & 0-9, refer to ASCII
                                                //    table at the end of this document.
let password = prompt("Enter a password")

if (password.length >= 6 && /[a-zA-Z]/.test(password) && /\d/.test(password) && /^[^0-9]/.test(password)) {
   alert("ok")
}else{
   alert("enter a valid password")
}
                                                

                                                   // task16
                                                // Write a program to convert the following string to an
                                                // array using string split method.
                                                // var university = “University of Karachi”;
                                                // Display the elements of array in your browser.
let university = "University of Karachi"
for (let i = 0; i < university.length; i++) {
   document.write (university.split("")[i]+ "<br>")
}

                                                   // task17
                                                // Write a program to display the last character of a user
                                                // input.
let character = prompt("Enter a word")
let lastCharacter = character.slice(-1);
// document.write("Last character: " + lastCharacter);


                                                   // task18
                                                // You have a string “The quick brown fox jumps over the
                                                // lazy dog”. Write a program to count number of
                                                // occurrences of word “the” in given string.
let sentence = "The quick brown fox jumps over the lazy dog";
document.write ("Text: " + sentence)

let countWord = "the"
let count = 0;
let words = sentence.split(" ")

for (var i = 0; i < words.length; i++) {
   if (words[i].toLowerCase() === countWord) {
       count++;
   }
}

document.write ("<br>Their are " + count + " occurrences of word “the” ")
