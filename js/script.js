 turn = true;
 box = [];
//---------------------------------//
function gamePlay(id){
    var clickBox = document.getElementById(id);
    if(turn && clickBox.innerHTML =="") {
        clickBox.innerHTML = "X";
        turn = !turn;
    } else if (!turn && clickBox.innerHTML =="") {
        clickBox.innerHTML = "O";
        turn = !turn;
    }
    winner();
};
//---------------------------------//
function winner() {
    var result = document.getElementById("result");
    for(i=1; i <=9; i++) {
        box[i] = document.getElementById('A'+i).innerHTML;
    }
    // Horizontal
    if (box[1] == box[2] && box[2] == box[3] && box[1] != ""){
        result.innerHTML = "Player " + box[1] + " is winner the game!";
        reset(1,2,3);
    } else if (box[4] == box[5] && box[5] == box[6] && box[4] != ""){
        result.innerHTML = "Player " + box[4] + " is winner the game!";
        reset(4,5,6);
    } else if (box[7] == box[8] && box[8] == box[9] && box[7] != ""){
        result.innerHTML = "Player " + box[7] + " is winner the game!";
        reset(7,8,9);
    }
    // Vertical
    else if (box[1] == box[4] && box[4] == box[7] && box[1] != ""){
        result.innerHTML = "Player " + box[1] + " is winner the game!";
        reset(1,4,7);
    } else if (box[2] == box[5] && box[5] == box[8] && box[2] != ""){
        result.innerHTML = "Player " + box[2] + " is winner the game!";
        reset(2,5,8);
    } else if (box[3] == box[6] && box[6] == box[9] && box[3] != ""){
        result.innerHTML = "Player " + box[3] + " is winner the game!";
        reset(3,6,9);
    }
    // Diagonal
    else if (box[1] == box[5] && box[5] == box[9] && box[1] != ""){
        result.innerHTML = "Player " + box[1] + " is winner the game!";
        reset(1,5,9);
    } else if (box[3] == box[5] && box[5] == box[7] && box[3] != ""){
        result.innerHTML = "Player " + box[3] + " is winner the game!";
        reset(3,5,7);
    } 
};
//---------------------------------//
function reset(A,B,C) {
    document.getElementById("A"+A).style.color = "green";
    document.getElementById("A"+B).style.color = "green";
    document.getElementById("A"+C).style.color = "green";
    setTimeout(() => {
        location.reload();
    }, 2000);
};
//---------------------------------//
function resetEgual() {
    setTimeout(() => {
        location.reload();
    }, 2);
};