const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

function createRow(rowNum) {
    for (let i = 0; i < rowNum; i++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    }
}

function createColumn(cellNum) {
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j <cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        }
    }
}

// Create a 9x9 grid
function grid() {
    createRow(9);
    createColumn(9);
}

grid();
