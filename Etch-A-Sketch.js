// let container = document.querySelector('#gridContainer');
// function gridCreate(num) {
//   let gridNum = num;
//   document.documentElement.style.setProperty('--columnNum', gridNum);
//   document.documentElement.style.setProperty('--rowNum', gridNum);

//   for (let i = 0; i < gridNum * gridNum; i++) {
//     let gridDiv = document.createElement('div');
//     gridDiv.classList.add('cell');
//     container.appendChild(gridDiv);
//   }
// }

// let cells = document.querySelectorAll('.cell');
// const gridSize = document.getElementById('gridSize');

// gridCreate(16);

// //make rainbow
// function rainbow(){
//     let letters = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color
// }
// //add mouseover event that makes use of rainbow
// container.addEventListener("mouseover", function(e){
//     console.log(e);
//     console.log(e.target.className)
//     if(e.target.className === 'cell'){
//         e.target.style.background = rainbow();
//     }
// });
//your way

// container.addEventListener('mouseover', (e) => {
//     if (e.target.classList.contains('cell')) {
//       e.target.style.background = rainbow();
//     }
//   });
// this was his way

// implement this into your code and have it work when pressing thr RGB button

//look at phone to see changes u need to make (in safari)
//fix bug where u can change color after rgb
//maybe change hover function/how grid is made and hover is done similar to how the guy helped u (code is above)
//see if u can make code more efficient (kind of done already)
//might need to make abutton/state for color mode (see michaelalosmans project in the project page in odin)


//old code
let container = document.querySelector("#gridContainer");
function gridCreate(){
    let gridNum = parseInt(prompt("How many grids do you want?"));
    document.documentElement.style
            .setProperty("--columnNum", gridNum);
    document.documentElement.style
            .setProperty("--rowNum", gridNum);
 
    for(let i = 0; i < gridNum*gridNum; i++){
        let gridDiv = document.createElement('div');
        gridDiv.classList.add("cell");
        container.appendChild(gridDiv);  
    }
    function gridChanger(e){
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        gridSize.removeEventListener("click", gridChanger);
        gridCreate();
    }
    gridSize.addEventListener("click", gridChanger);
}


let cells = document.querySelectorAll(".cell"); 
const gridSize = document.getElementById("gridSize");
function colorMode(e){
    // if(e.returnValue === true){
    //     e.target.style.background = "red"; 
    // }
    //console.log(e);
    container.addEventListener("mouseover", hover);
    function hover(e){
        if (e.target = "div.cell"){ //color chooser
            // console.log(e.target.outerHTML);
            // console.log(document.getElementById("colorPicker").value);
            e.target.style.background = document.getElementById("colorPicker").value;   
        }
        function clear(){ //clears the grid
            e.target.style.background = "white";
        }
        document.getElementById("clear").addEventListener("click",clear);
    }
}

document.getElementById("colorMode").addEventListener("click", colorMode);
document.getElementById("RGB").addEventListener("click", mainrainbow);
document.getElementById("erase").addEventListener("click", eraserMode);

function mainrainbow(){ //random color on hover
    function rainbow(){
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color
    }
        //add mouseover event that makes use of rainbow
        container.addEventListener("mouseover", function(e){
            //console.log(e);
            //console.log(e.target.className)
            if(e.target.className === 'cell'){
                e.target.style.background = rainbow();
            }
            // else if(e.target.className === 'cell' && eraser === "[button#erase, div#sideButtons, body, html, document, Window]"){
            //     e.target.style.background = "#FFFFFF";
            // }
        });
}

function eraserMode(){
    container.addEventListener("mouseover", eraser);
    function eraser(e){ //toggles eraser
        if (e.target = "div.cell"){ //color chooser
            // console.log(e.target.outerHTML);
            // console.log(document.getElementById("colorPicker").value);
            e.target.style.background = "#FFFFFF";   
        }
        // document.getElementById("colorPicker").value = "#FFFFFF";
        // return e.path //have return value be if button was clicked or not
        //remember that = is for assigning a variable to something and === is 
        //to make sure something IS equal to something (returns true or false)
    }
}
gridCreate();
colorMode(); //make it so when a function is running the corresponding button lights up
//also add slider for grid size

//be sure to add comments when ur done with this to ALL pages

//make an eraser work with someway of having the button click mean the 
//target style background is white

//make a slider for the grid size

//maybe use modal instead of prompt and possibly have the 
//dimensions preset when loaded so it shows automatically instead of popping up
//WORK ON RGB SETTING AND GETTING THE GRID TO LOAD 16X16 AUTOMATICALLY
//HAVE THE GRID RESET PROMPT THE USER OR MAKE A SLIDER


//have it show how big grid is using spans either when chooing in the modal 
//or on the webpage or both

//maybe make a slider if u can but show dimensions there too

//maybe have a thing where the title and grid and buttons pop up
//after a delay when you choose your size intially?