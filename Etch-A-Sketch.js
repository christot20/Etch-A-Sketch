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
    function clearGrid(e){
        console.log(e);
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        clear.removeEventListener("click", clearGrid);
        gridCreate();
    }
    clear.addEventListener("click", clearGrid);
}

function hover(e){
    if (e.target.outerHTML === "<div class=\"cell\"></div>"){
        //console.log(e);
        //console.log(e.target);
        e.target.style.background = "red";
    }
}
 
const clear = document.getElementById("clear");
// const erase = document.getElementById("erase");
// const changeColor = document.getElementById("changeColor");
let cells = document.querySelectorAll(".cell");
 

// function eraseGrid(e){
 
// }
// function change(e){
 
// }
 

// erase.addEventListener("click", eraseGrid);
// changeColor.addEventListener("click", change);

gridCreate();