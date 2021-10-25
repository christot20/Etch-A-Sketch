gridNum = parseInt(prompt("How many grids do you want?"));
container = document.querySelector("#gridContainer");
for(let i = 0; i < gridNum; i++){
    console.log(gridNum, i)
    gridDiv = document.createElement('div');
    gridDiv.textContent = "Hi";
    container.appendChild(gridDiv);
}