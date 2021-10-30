let container = document.querySelector("#gridContainer");

const rangeslider = document.getElementById("sliderRange");
const output = document.getElementById("demo");
output.innerHTML = rangeslider.value + "x" + rangeslider.value;
  
rangeslider.oninput = function() {
    output.innerHTML = rangeslider.value + "x" + rangeslider.value;
}
function gridCreate(){
    let gridNum = rangeslider.value;
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
        rangeslider.removeEventListener("click", gridChanger);
        gridCreate();
    }
    rangeslider.addEventListener("click", gridChanger);
}


let cells = document.querySelectorAll(".cell"); 
function colorMode(){
    container.addEventListener("mouseover", hover);
    function hover(e){
        if (e.target = "div.cell"){ //color chooser
            // console.log(e.target.outerHTML);
            // console.log(document.getElementById("colorPicker").value);
            e.target.style.background = document.getElementById("colorMode").value;   
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

