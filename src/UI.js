export default class UI {
    constructor() {
        this.GameBoard();
    }

    GameBoard() {
        const letterArray = ['H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
        const container = document.querySelector("#container");

        let table = document.createElement('table');
        for (let i = 1; i < 9; i++) {
            let tr = document.createElement('tr');
            tr.dataset.rowname = letterArray[i - 1];
            for (let j = 1; j < 9; j++) {
                let td = document.createElement('td');
                td.dataset.number = `${j}`
                if (i % 2 == j % 2) {
                    td.className = 'white';
                } else {
                    td.classname = 'black';
                }
                if (tr.dataset.rowname == 'G') {
                    td.dataset.currentPiece = 'pawn';
                    td.innerHTML = "<img src='../dist/img/pawn_black.png'>";
                }
                if (tr.dataset.rowname == 'B') {
                    td.dataset.currentPiece = 'pawn';
                    td.innerHTML = "<img src='../dist/img/pawn_white.png'>";
                }
                if (tr.dataset.rowname == 'A') {
                    if (td.dataset.number == 1 || td.dataset.number == 8) {
                        td.dataset.currentPiece = 'rook';
                        td.innerHTML = "<img src='../dist/img/rook_white.png'>";
                    }
                    if (td.dataset.number == 2 || td.dataset.number == 7) {
                        td.dataset.currentPiece = 'knight';
                        td.innerHTML = "<img src='../dist/img/knight_white.png'>";
                    }
                    if (td.dataset.number == 3 || td.dataset.number == 6) {
                        td.dataset.currentPiece = 'bishop';
                        td.innerHTML = "<img src='../dist/img/bishop_white.png'>";
                    }
                    if (td.dataset.number == 4) {
                        td.dataset.currentPiece = 'queen';
                        td.innerHTML = "<img src='../dist/img/queen_white.png'>";
                    }
                    if (td.dataset.number == 5) {
                        td.dataset.currentPiece = 'king';
                        td.innerHTML = "<img src='../dist/img/king_white.png'>";
                    }
                }
                if (tr.dataset.rowname == 'H') {
                    if (td.dataset.number == 1 || td.dataset.number == 8) {
                        td.dataset.currentPiece = 'rook';
                        td.innerHTML = "<img src='../dist/img/rook_black.png'>"
                    }
                    if (td.dataset.number == 2 || td.dataset.number == 7) {
                        td.dataset.currentPiece = 'knight';
                        td.innerHTML = "<img src='../dist/img/knight_black.png'>";
                    }
                    if (td.dataset.number == 3 || td.dataset.number == 6) {
                        td.dataset.currentPiece = 'bishop';
                        td.innerHTML = "<img src='../dist/img/bishop_black.png'>";
                    }
                    if (td.dataset.number == 4) {
                        td.dataset.currentPiece = 'queen';
                        td.innerHTML = "<img src='../dist/img/queen_black.png'>";
                    }
                    if (td.dataset.number == 5) {
                        td.dataset.currentPiece = 'king';
                        td.innerHTML = "<img src='../dist/img/king_black.png'>";
                    }
                }
                tr.appendChild(td)
            }
            table.appendChild(tr);
        }
        container.appendChild(table)
    }
}