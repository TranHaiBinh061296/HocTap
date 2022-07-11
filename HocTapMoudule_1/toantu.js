let inputWidth;
let inputHeight;

inputWidth = prompt("Enter the width");
inputHeight = prompt("Enter the height");
let width = parseInt(inputWidth);
let height = parseInt(inputHeight);
let area = width * height;
document.write("Enter width: " + width + "<br>" + "Enter height: " + height + "<br>" +
    "The area is: " + area);