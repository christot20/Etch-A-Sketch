function gridCreate(){
    let gridNum = parseInt(prompt("How many grids do you want?"));
    let container = document.querySelector("#gridContainer");
    document.documentElement.style
            .setProperty("--columnNum", gridNum);
    document.documentElement.style
            .setProperty("--rowNum", gridNum);
 
    for(let i = 0; i < gridNum*gridNum; i++){
        console.log(gridNum, i)
        let gridDiv = document.createElement('div');
        gridDiv.classList.add("cell");
        container.appendChild(gridDiv);  
        gridDiv.addEventListener("mouseover", hover); 
    }
    function gridChanger(e){
        console.log(e);
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

function hover(e){
    if (e.target = "div.cell"){ //color chooser
        /* if (something about eraser button being pushed){
        e.target.style.background = "#fff"; 
    }
    */ //make and else for the thing under me and try it
        // console.log(e.target.outerHTML);
        // console.log(document.getElementById("colorPicker").value);
        e.target.style.background = document.getElementById("colorPicker").value; 
    }
    function clear(){ //clears the grid
        e.target.style.background = "white";
        }
    document.getElementById("clear").addEventListener("click",clear);
}

//const erase = document.getElementById("erase");


//erase.addEventListener("click", hover);
// function eraseGrid(e){
//     function hoverwhite(){

//     }
//     console.log(e);
//     // if (e.target = "div.cell"){
//     //     e.target.style.background = "white";
//     // }
// }




// const changeColor = document.getElementById("changeColor");

 

// const colorPicker = document.getElementById("colorPicker");
// colorPicker.addEventListener("input", updateFirst, false);
// colorPicker.addEventListener("change", watchColorPicker, false);

// function watchColorPicker(event) {
//   document.querySelectorAll("p").forEach(function(p) {
//     p.style.color = event.target.value;
//   });
// }

gridCreate();
//be sure to add comments when ur done with this to ALL pages

//make an eraser work with someway of having the button click mean the 
//target style background is white

//make a slider for the grid size

//maybe use modal instead of prompt and possibly have the 
//dimensions preset when loaded so it shows automatically instead of popping up

//have it show how big grid is using spans either when chooing in the modal 
//or on the webpage or both

//maybe make a slider if u can but show dimensions there too

//maybe have a thing where the title and grid and buttons pop up
//after a delay when you choose your size intially?