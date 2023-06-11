var player = 0;
var squareId, box, game_ended = false;
const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('click', function () {
        squareId = this.id;
        if (game_ended == false) {
            draw(squareId);
            game_status();
        }
    });
});
function draw(squareId) {
    var box = document.getElementById(squareId);
    if (box.innerText == "") {
        if (player == 0) {
            box.innerText = "X";
            box.setAttribute("style", "background-color:#87CEFA;")
            player++;
        }
        else if (player == 1) {
            box.innerText = "O";
            box.setAttribute("style", "background-color:#FFE4E1;")
            player--;
        }
    }

}

function game_status() {
    var bx1 = squares[0].innerText;
    var bx2 = squares[1].innerText;
    var bx3 = squares[2].innerText;
    var bx4 = squares[3].innerText;
    var bx5 = squares[4].innerText;
    var bx6 = squares[5].innerText;
    var bx7 = squares[6].innerText;
    var bx8 = squares[7].innerText;
    var bx9 = squares[8].innerText;
    if (
        bx1 == bx2 && bx1 == bx3 && bx1 != ""
        ||
        bx4 == bx5 && bx4 == bx6 && bx4 != ""
        ||
        bx7 == bx8 && bx7 == bx9 && bx7 != ""

        ||

        bx1 == bx4 && bx1 == bx7 && bx1 != ""
        ||
        bx2 == bx5 && bx2 == bx8 && bx2 != ""
        ||
        bx3 == bx6 && bx3 == bx9 && bx3 != ""

        ||
        bx1 == bx5 && bx1 == bx9 && bx1 != ""
        ||
        bx3 == bx5 && bx3 == bx7 && bx3 != ""
    ) {
        if (player == 0) {
            document.getElementById("O_Won").setAttribute("style", "display:block;");
        }
        else if (player == 1) {
            document.getElementById("X_Won").setAttribute("style", "display:block;");
        }
        game_ended = true;
        return;
    }
    if (bx1 != ""&&bx2 != ""&&bx3 != ""&&bx4 != ""&&bx5 != ""&&bx6 != ""&&bx7 != ""&&bx8 != ""&&bx9 != "") {
        document.getElementById("GAME").setAttribute("style", "display:block;");
    }
}

function start_new_game() {
    squares.forEach(square => {
        square.innerText = "";
        square.setAttribute("style", "background-color:none;");
        game_ended = false;
        player = 0;
        document.getElementById("X_Won").setAttribute("style", "display:none;");
        document.getElementById("O_Won").setAttribute("style", "display:none;");
        document.getElementById("GAME").setAttribute("style", "display:none;");
    });
}