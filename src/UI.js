export default class UI {
    constructor() {
        this.GameBoard();
    }
    
    GameBoard() {
        const container = document.querySelector("#container");
        container.style.gridTemplateColumns = "repeat(8, 1fr)";
        container.style.gridTemplateRows = "repeat(8, 1fr)";
        
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        for(let i = 0; i < 64; i++) {
            const div = document.createElement("div");
            if (i < 8) { div.setAttribute("id", `A${(i + 1)}`); }
            if (i <= 16 && i > 7) { div.setAttribute("id", `B${(i - 7)}`); }
            if (i <= 24 && i > 15) { div.setAttribute("id", `C${(i - 15)}`); }
            if (i <= 32 && i > 23) { div.setAttribute("id", `D${(i - 23)}`); }
            if (i <= 40 && i > 31) { div.setAttribute("id", `E${(i - 31)}`); }
            if (i <= 48 && i > 39) { div.setAttribute("id", `F${(i - 39)}`); }
            if (i <= 56 && i > 47) { div.setAttribute("id", `G${(i - 47)}`); }
            if (i <= 64 && i > 55) { div.setAttribute("id", `H${(i - 55)}`); }
            div.setAttribute("class", "board-cell");

            container.appendChild(div)
        }
    }
}