                                    //     // task01
                                    //     Consider you have following code snippet:
                                    //     (Copy it in your HTML file)
                                    //    <div>
                                    //    <h1> DOM </h1>
                                    //    <div id=”form-content” class=”content”>
                                    //    <label for=”first-name”>First Name</label>
                                    //    <input type=”text” id=”first-name” />
                                    //    <label for=”last-name”>Last Name</label>
                                    //    <input type=”text” id=”last-name” />
                                    //    <label for=”email”>Email</label>
                                    //    <input type=”text” id=”email” />
                                    //    </div>
                                    //    <div id=”main-content” class=”content”>
                                    //    <p class=”render”> First Name : Alex</p>
                                    //    <p class=”render” id=”lastName”>Last Name: Bank</p>
                                    //    <p class=”render”> Email : alexbank@example.com</p>
                                    //    <p class=”render”> Country : Pakistan </p>
                                    //    <p class=”render”> contact : +92 300 1234567</p>
                                    //    </div>
                                    //    </div>
                                    //    i. Get element of id “main-content” and assign them in a variable.
                                    //    ii. Display all child elements of “main-content” element.
                                    //    iii. Get all elements of class “render” and show their innerHTML
                                    //    in browser.
                                    //    iv. Fill input value whose element id first-name using javascript.
                                    //    v. Repeat part iv for id ”last-name” and “email”.
                                       
                        //  1
let mainContent = document.getElementById("main-content");

                        //  2
let childElements = mainContent.childNodes;
console.log(childElements);


                        //  3
let renderElements = document.getElementsByClassName("render");
for (let i = 0; i < renderElements.length; i++) {
  console.log(renderElements[i].innerHTML);
}

//                         //  4
let firstNameInput = document.getElementById("first-name");
firstNameInput.value = "Alex";

//                         //  5
let lastNameInput = document.getElementById("last-name");
let emailInput = document.getElementById("email");
lastNameInput.value = "Bank";
emailInput.value = "alexbank@example.com";



                                    //     // task02
                                    //     use HTML code of question 1 and show the result on browser.
                                    //     i. What is node type of element having id “form-content”.
                                    //     ii. Show node type of element having id “lastName” and its child node.
                                    //     iii. Update child node of element having id “lastName”.
                                    //     iv. Get First and last child of id “main-content”.
                                    //     v. Get next and previous siblings of id “lastName”.
                                    //     vi. Get parent node and node type of element having id “email”

                              //1 

let formContent = document.getElementById("form-content");
console.log(formContent.nodeType); 


                              // 2
let lastName = document.getElementById("lastName");
console.log(lastName.nodeType); 
console.log(lastName.firstChild.nodeType); 


                              // 3
let mylastName = document.getElementById("lastName");
lastName.firstChild.nodeValue = "New Last Name";


                              // 4
let mymainContent = document.getElementById("main-content");
console.log(mymainContent.firstChild); 
console.log(mymainContent.lastChild); 


                              // 5
let lastmyName = document.getElementById("lastName");
console.log(lastName.nextSibling); 
console.log(lastName.previousSibling); 


                              // 6
let email = document.getElementById("email");
console.log(email.parentNode); 
                        