                                        //   // task01
                                        //   Create a signup form and display form data in your web
                                        //   page on submission.
function signup(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    document.write("<h2>Signup Successful</h2>");
    document.write("<p>Name: " + name + "</p>");
    document.write("<p>Email: " + email + "</p>");
    document.write("<p>Password: " + password + "</p>");
    }                                      
                                        //   // task02
                                        //   Suppose in your webpage there is content area in which
                                        //   you have entered your item details, but user can only see
                                        //   some details on first look. When user clicks on “Read
                                        //   more” button, full detail of that particular item will be
                                        //   displayed.
function showDetails() {
    let readMore = document.getElementById("details");
    readMore.style.display = "block";
}

                                        //   // task03
                                        //   In previous assignment you have created a tabular data
                                        //   using javascript. Let’s modify that. Create a form which
                                        //   takes student’s details and show each student detail in
                                        //   table. Each row of table must contain a delete button and
                                        //   an edit button. On click on delete button entire row should
                                        //   be deleted. On click on edit button, a hidden form will
                                        //   appear with the values of that row.

function addStudent() {
  let name = document.getElementById("stdname").value;
  let email = document.getElementById("emailInput").value;
  let grade = document.getElementById("grade").value;

  let table = document.getElementById("studentsTable");
  let row = table.insertRow();

  let nameCell = row.insertCell(0);
  let emailCell = row.insertCell(1);
  let gradeCell = row.insertCell(2);
  let actionCell = row.insertCell(3);

  nameCell.innerHTML = name;
  emailCell.innerHTML = email;
  gradeCell.innerHTML = grade;
  actionCell.innerHTML = `<button onclick="deleteStudent(this)">Delete</button>`;
}

function deleteStudent(button) {
  let row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
                               