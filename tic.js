let cells = document.querySelectorAll(".cell");
let turn = "X";

let a = document.getElementById("x");
let b = document.getElementById("o");

let x = [];
let o = [];

const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

function reset() {
    cells.forEach(cell => cell.innerText = "");
    turn = "X";
    x = [];
    o = [];

    a.style.visibility = "visible";
    b.style.visibility = "hidden";

    document.getElementById("result").classList.add("hidden");
}

function checkWinner(moves) {
    for (let i = 0; i < winPatterns.length; i++) {
        let [p1, p2, p3] = winPatterns[i];

        if (
            moves.includes(p1) &&
            moves.includes(p2) &&
            moves.includes(p3)
        ) {
            return true;
        }
    }
    return false;
}

const resultBox = document.getElementById("result");
const winnerText = document.getElementById("winnerText");

function showWinner(player) {
    winnerText.innerText = player + " Won!🎉";
    resultBox.classList.remove("hidden");
}
function newGame() {
    reset();
}
cells.forEach((cell, index) => { 
    cell.addEventListener("click", () => {

        if (cell.innerText !== "") return;

        

        if (turn === "X"&& x.length<3) {
            cell.innerText = turn;
            x.push(index);
            cell.style.color="#38BDF8";
            if (x.length === 3 ){
                if(checkWinner(x)) {
                    showWinner("X");   
                    return;           
                }
            }
            turn = "O";
            a.style.visibility = "hidden";
            b.style.visibility = "visible";

        } else if(turn === "O"&& o.length<3){
            cell.innerText = turn;
            o.push(index);
            cell.style.color="#F43F5E";
            if (o.length === 3 ){
                if( checkWinner(o)) {
                    showWinner("O");
                    return;
                }
               
            }
            turn = "X";
            b.style.visibility = "hidden";
            a.style.visibility = "visible";
        }
    });
});
let draggedindex = null;


cells.forEach(cell => {
    cell.setAttribute("draggable", true);
});

cells.forEach((cell, index) => {

    cell.addEventListener("dragstart", () => {
        if (turn === "X" && x.length === 3 && cell.innerText === "X") {
            draggedindex = index;
            // cells[draggedindex].style.opacity="0.1";
        } 
        else if (turn === "O" && o.length === 3 && cell.innerText === "O") {
            draggedindex = index;
            // cells[draggedindex].style.opacity="0.1";
        } 
        else {
            draggedindex = null;
        }
    });

    cell.addEventListener("dragover", (e) => {
        e.preventDefault(); 
    });

    cell.addEventListener("drop", () => {
        if (draggedindex === null) return;
        if (cell.innerText !== "") return;

        let value = cells[draggedindex].innerText;

        
        let validMove = false;

        if (
            draggedindex === index + 3 || 
            draggedindex === index - 3 || 
            (draggedindex === index + 1 && Math.floor(draggedindex / 3) === Math.floor(index / 3)) || // right
            (draggedindex === index - 1 && Math.floor(draggedindex / 3) === Math.floor(index / 3)) ||
            draggedindex===4  
            || index===4
        ) {
            validMove = true;
        }

        if (!validMove)return;

        
        cells[draggedindex].innerText = "";
        cell.innerText = value;

        if (value === "X") {
            let pos = x.indexOf(draggedindex);
            if (pos !== -1) x.splice(pos, 1);
            x.push(index);
            
            cell.style.color="#38BDF8";
            if (checkWinner(x)) {
                showWinner("X");
                return;
            }

            turn = "O";
            a.style.visibility = "hidden";
            b.style.visibility = "visible";

        } else if (value === "O") {
            let pos = o.indexOf(draggedindex);
            if (pos !== -1) o.splice(pos, 1);
            o.push(index);
            
            cell.style.color="#F43F5E";
            if (checkWinner(o)) {
                showWinner("O");
                return;
            }

            turn = "X";
            a.style.visibility = "visible";
            b.style.visibility = "hidden";
        }
        

        draggedindex = null;
    });
});
// cells.forEach(cell=>{
//  if(cell.innerText==="X"){
//      cell.style.color="#38BDF8";
// }
// else if(cell.innerText==="O"){
//     cell.style.color="#F43F5E"
// }})
document.querySelector(".reset").addEventListener("click", reset);
const rulesModal = document.getElementById("rulesModal");

function openRules() {
  rulesModal.classList.add("open");
}

function closeRules() {
  rulesModal.classList.remove("open");
}

document.getElementById("rulesBtn").addEventListener("click", openRules);
document.getElementById("closeRules").addEventListener("click", closeRules);
document.getElementById("startGame").addEventListener("click", closeRules);

rulesModal.addEventListener("click", (e) => {
  if (e.target === rulesModal) closeRules();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeRules();
});