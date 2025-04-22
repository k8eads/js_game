//main logic for boulder, parchment, shears game

let wins = 0;
let ties = 0;
let losses = 0; 

function boulder() {
    let cpuChoice = Math.floor(Math.random() * 3) + 1;
    if (cpuChoice === 1) { //Boulder, tie
        document.getElementById('cpu-img').src = "svg/boulder.svg";
        document.getElementById('outcome').innerHTML = "Its a tie!";
        ties++;
    } else if (cpuChoice === 2) { //Parchment, loss
        document.getElementById('cpu-img').src = "svg/parchment.svg";
        document.getElementById('outcome').innerHTML = "Its a loss!";
        losses++;
    } else { //Shears, win
        document.getElementById('cpu-img').src = "svg/shears.svg";
        document.getElementById('outcome').innerHTML = "Its a win!";
        wins++;
    }
    set();
}

function parchment() {
    let cpuChoice = Math.floor(Math.random() * 3) + 1;
    if (cpuChoice === 1) { //Boulder, win
        document.getElementById('cpu-img').src = "svg/shears.svg";
        document.getElementById('outcome').innerHTML = "Its a win!";
        wins++;
    } else if (cpuChoice === 2) { //Parchment, tie
        document.getElementById('cpu-img').src = "svg/boulder.svg";
        document.getElementById('outcome').innerHTML = "Its a tie!";
        ties++;
    } else { //Shears, loss
        document.getElementById('cpu-img').src = "svg/parchment.svg";
        document.getElementById('outcome').innerHTML = "Its a loss!";
        losses++;
    }
    set();
}

function shears() {
    let cpuChoice = Math.floor(Math.random() * 3) + 1;
    if (cpuChoice === 1) { //Boulder, loss
        document.getElementById('cpu-img').src = "svg/parchment.svg";
        document.getElementById('outcome').innerHTML = "Its a loss!";
        losses++;
    } else if (cpuChoice === 2) { //Parchment, win
        document.getElementById('cpu-img').src = "svg/shears.svg";
        document.getElementById('outcome').innerHTML = "Its a win!";
        wins++;
    } else { //Shears, tie
        document.getElementById('cpu-img').src = "svg/boulder.svg";
        document.getElementById('outcome').innerHTML = "Its a tie!";
        ties++;
    }
    set();
}

function set() {
    sessionStorage.setItem("winCount", wins);
    sessionStorage.setItem("tieCount", ties);
    sessionStorage.setItem("lossCount", losses);
    document.getElementById('wins').innerHTML = sessionStorage.getItem("winCount");
    document.getElementById('ties').innerHTML = sessionStorage.getItem("tieCount");
    document.getElementById('losses').innerHTML = sessionStorage.getItem("lossCount");
}
function reset() {
    wins = 0;
    ties = 0;
    losses = 0;

    sessionStorage.setItem("winCount", wins);
    sessionStorage.setItem("tieCount", ties);
    sessionStorage.setItem("lossCount", losses);
    
    document.getElementById('wins').innerHTML = sessionStorage.getItem("winCount");
    document.getElementById('ties').innerHTML = sessionStorage.getItem("tieCount");
    document.getElementById('losses').innerHTML = sessionStorage.getItem("lossCount");
    document.getElementById('cpu-img').src = "svg/question.svg";
    document.getElementById('outcome') = "outcome"; 
}