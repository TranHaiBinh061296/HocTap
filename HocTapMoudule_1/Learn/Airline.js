const leftKey = 37;
const upKey = 38;
const rightKey = 39;
const downKey = 40;
const aKey = 65;
const wKey = 87;
const dKey = 68;
const sKey = 83;
const step = 5;
const airplane_width = 150;
const airplane_height = 143;

document.addEventListener("keydown", controlAirplane);

function controlAirplane (event){
    switch(event.keyCode){
        case leftKey:
        case aKey: {
            let airplane = document.querySelector('#airplane');
            airplane.src = "left.png";
            airplane.style.width = "150px";
            airplane.style.height = "143px";
            if(parseInt(airplane.style.left) > 0){
                airplane.style.left = parseInt(airplane.style.left) - step + "px";
            }
            break;
        }
        case upKey:
        case wKey: {
            let airplane = document.querySelector('#airplane');
            airplane.src = "top.png";
            airplane.style.width = "143px";
            airplane.style.height = "150px";
            if(parseInt(airplane.style.top) > 0){
                airplane.style.top = parseInt(airplane.style.top) - step + "px";
            }
            break;
        }
        case rightKey :
        case dKey : {
            let airplane = document.querySelector('#airplane');
            airplane.src = "right.png";
            airplane.style.width = "150px";
            airplane.style.height = "143px";
            if(parseInt(airplane.style.left) + airplane_width + step <= window.innerWidth){
                airplane.style.left = parseInt(airplane.style.left) + step + "px";
            }
            break;
        }
        case downKey:
        case sKey: {
            let airplane = document.querySelector('#airplane');
            airplane.src = "down.png";
            airplane.style.width = "143px";
            airplane.style.height = "150px";
            if(parseInt(airplane.style.top) + airplane_height + step <= window.innerHeight){
                airplane.style.top = parseInt(airplane.style.top) + step + "px";
            }
            break;
        }
        default:{
            alert("please use arrow keys!");
            break;
        }
    }
}