                                        //    // task01
                                        //    1. Show an alert box on click on a link.
function hmu() {
    alert("hey! \u{1F60A}")
}

                                        //    // task02
                                        //    Display some Mobile images in browser. On click on an
                                        //    image Show the message in alert to user.
function imageClick() {
    alert("Thanks for purchasing a mobile from us!")
}

                                        //    // task03
                                        //    Display 10 student records in table and each row should contain a delete
                                        //    button. If you click on a button to delete a record, entire row should be
                                        //    deleted. 
                                        //    Before delete
                                        //    After click on delete button on “Mark ” row          
function dlt(button) {
    var row = button.parentNode.parentNode;
            row.parentNode.removeChild(row);
}



                                        //    // task04
                                        //    Display an image in browser. Change the picture on mouseover and set the
                                        //    first picture on mouseout.
// check html file                                     



                                        //    // task05
                                        //    Show a counter in browser. Counter should increase on click on increase
                                        //    button and decrease on click on decrease button. And show updated counter
                                        //    value in browser.
 function increase() {
    let counter = document.getElementById("counter");
    let value = parseInt(counter.innerText);
    counter.innerText = value + 1;
}


function decrease() {
    let counter = document.getElementById("counter");
    let value = parseInt(counter.innerText);
    counter.innerText = value - 1;
}


