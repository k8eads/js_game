//main logic for boulder, parchment, shears game

let wins = 0;
let ties = 0;
let losses = 0; 

function random() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
}

function boulder() {
    let cpuChoice = random();
    if (cpuChoice === 1) { //Boulder
        document.getElementById('cpu-img').src = "";
        document.getElementById('outcome').innerHTML = "Its a tie!";
        ties++;
    } else if (cpuChoice === 2) { //Parchment

        losses++;
    } else { //Shears

        wins++;
    }
    set();
}

function parchment() {
    let cpuChoice = random();
}

function shears() {
    let cpuChoice = random();

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