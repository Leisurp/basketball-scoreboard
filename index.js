//let home_Count = undefined
//document.getElementById("homeCount").textContent = home_Count

let home_Count = document.getElementById("homeCount");
let guest_Count = document.getElementById("guestCount");

function plusOneH() {
    home_Count.textContent = Number(home_Count.textContent) + 1
}

function plusTwoH() {
    home_Count.textContent = Number(home_Count.textContent) + 2
}

function plusThreeH() {
    home_Count.textContent = Number(home_Count.textContent) + 3
}

function plusOneG() {
    guest_Count.textContent = Number(guest_Count.textContent) + 1
}

function plusTwoG() {
    guest_Count.textContent = Number(guest_Count.textContent) + 2
}

function plusThreeG() {
    guest_Count.textContent = Number(guest_Count.textContent) + 3
}

//Make one working function then duplicate it. 6 times, one for 3 buttons on both sides.