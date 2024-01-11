let button = document.createElement("button");
button.id = "btn";
button.textContent = "Change the grid size";
button.style.margin = "10px";
document.body.appendChild(button);
btn.addEventListener("click", selectSize);


let gridContainer = document.createElement("div");

gridContainer.id = "grid";

document.body.appendChild(gridContainer);


function selectSize () {
    gridContainer.innerHTML = "";

    let gridSize = prompt("Select the grid size: (Max 100)", 16);

    if (gridSize > 100) {
        alert("Select a lower size than 100");
    }

    else {

        let widthValue = (1/gridSize)*100;

        let newWidth = `calc(${widthValue}%)`;
    
        for (let i = 1; i <= gridSize*gridSize; i++) {
            let newDiv = document.createElement("div");
            newDiv.className = "customDiv";
            newDiv.style.backgroundColor = "grey";
            //newDiv.textContent = i;
            newDiv.style.width = newWidth;
        
            gridContainer.appendChild(newDiv);
        }
    
        let customDiv = document.querySelectorAll(".customDiv");
    
        for (let arg of customDiv) {
            arg.addEventListener("mouseenter", () => arg.style.backgroundColor = "black");
            //arg.addEventListener("mouseleave", () => arg.style.backgroundColor = "white");
    
        }

    }

}



