function Add(){
    let number1 = Number(document.getElementById("num1").value);
    let number2 = Number(document.getElementById("num2").value);
    let total = number1 + number2;
    document.getElementById("Result").innerHTML = " Result Addition : "+ total;
}
function Sub(){
    let number1 = Number(document.getElementById("num1").value);
    let number2 = Number(document.getElementById("num2").value);
    let total = number1 - number2;
    document.getElementById("Result").innerHTML = " Result Subtraction : "+ total; 
}
function Mul(){
    let number1 = Number(document.getElementById("num1").value);
    let number2 = Number(document.getElementById("num2").value);
    let total = number1 * number2;
    document.getElementById("Result").innerHTML = " Result Multiplication : "+ total; 
}
function Div(){
    let number1 = Number(document.getElementById("num1").value);
    let number2 = Number(document.getElementById("num2").value);
    let total = number1 / number2;
    document.getElementById("Result").innerHTML = " Result Division : "+ total; 
}