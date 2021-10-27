let gridNum = parseInt(prompt("How many grids do you want?"));
let container = document.querySelector("#gridContainer");
document.documentElement.style
        .setProperty("--columnNum", gridNum);
document.documentElement.style
        .setProperty("--rowNum", gridNum);
//maybe set the column num and grid num
// equal to the gridnum and have the amount of grids equal
//grid num x gridnum
for(let i = 0; i < gridNum*gridNum; i++){
    console.log(gridNum, i)
    let gridDiv = document.createElement('div');
    gridDiv.classList.add("cell");
    container.appendChild(gridDiv);  
    gridDiv.addEventListener("mouseover", hover);  
}

function hover(e){
    if (e.target.outerHTML === "<div class=\"cell\"></div>"){
        console.log(e);
        e.target.style.background = "red";
    }
}

