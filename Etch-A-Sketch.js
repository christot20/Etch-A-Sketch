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
    gridDiv = document.createElement('div');
    gridDiv.textContent = "Hi";
    container.appendChild(gridDiv);    
}