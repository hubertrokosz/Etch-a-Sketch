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
            let randomRed = Math.floor(Math.random() * 256);
            let randomGreen = Math.floor(Math.random() * 256);
            let randomBlue = Math.floor(Math.random() * 256);
            let alpha = 0;

            

            arg.addEventListener("mouseenter", () => {

            if (alpha < 1) {
                alpha += 0.1;
            }

            arg.style.backgroundColor = `rgba(${randomRed}, ${randomGreen}, ${randomBlue}, ${alpha})`

            });
            //arg.addEventListener("mouseleave", () => arg.style.backgroundColor = "white");
            
    
        }

    }

}

    
    




