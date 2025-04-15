//main logic for boulder, parchment, shears game

let wins = 0;
let ties = 0;
let losses = 0; 



function boulder() {
    let cpuChoice = Math.floor(Math.random() * 3) + 1;
    if (cpuChoice === 1) { //Boulder, tie
        document.getElementById('cpu-img').src = "svg/rock.svg";
        document.getElementById('outcome').innerHTML = "Its a tie!";
        ties++;
    } else if (cpuChoice === 2) { //Parchment, loss
        document.getElementById('cpu-img').src = "svg/paper.svg";
        document.getElementById('outcome').innerHTML = "Its a loss!";
        losses++;
    } else { //Shears, win
        document.getElementById('cpu-img').src = "svg/scissors.svg";
        document.getElementById('outcome').innerHTML = "Its a win!";
        wins++;
    }
    set();
}

function parchment() {
    let cpuChoice = Math.floor(Math.random() * 3) + 1;
}

function shears() {
    let cpuChoice = Math.floor(Math.random() * 3) + 1;

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
    sessionStorage.setItem("winCount", 0);
    sessionStorage.setItem("tieCount", 0);
    sessionStorage.setItem("lossCount", 0);
    
    document.getElementById('wins').innerHTML = sessionStorage.getItem("winCount");
    document.getElementById('ties').innerHTML = sessionStorage.getItem("tieCount");
    document.getElementById('losses').innerHTML = sessionStorage.getItem("lossCount");
    document.getElementById('cpu-img').src = "";
    document.getElementById('outcome') = "outcome"; 
}