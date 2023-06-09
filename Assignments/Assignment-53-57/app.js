                                        // // task01
                                        // Consider you have 4 images in a file as shown below:
                                        // Now When you click on an image it should display in a modal.
                                        // Modal code is available in this assignment file
function openModal(img) {
  let modal = document.getElementById("myModal");
  let modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = img.src;
}


                              
                                        // // task02
                                        // Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-).
                                        // On each click on “zoom in”(+) , add 10px in font size of paragraph.
                                        // And on each click on “zoom out”(-) , minus 10px in font size of paragraph.
function zoomIn() {
  let paragraph = document.getElementById("myParagraph");
  let currentSize = parseInt(window.getComputedStyle(paragraph).fontSize);
  paragraph.style.fontSize = (currentSize + 10) + "px";
}

function zoomOut() {
  let paragraph = document.getElementById("myParagraph");
  let currentSize = parseInt(window.getComputedStyle(paragraph).fontSize);
  paragraph.style.fontSize = (currentSize - 10) + "px";
}



