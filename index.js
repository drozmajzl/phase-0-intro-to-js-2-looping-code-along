// Code your solutions in this file

//Assignment 1

let guestList = [];

function writeCards(guests, occasion) {
    for (let i = 0; i < guests.length; i++) {
        console.log(`Thank you, ${guests[i]}, for the wonderful ${occasion} gift!`);
        guestList.push(`Thank you, ${guests[i]}, for the wonderful ${occasion} gift!`)
    }
    return guestList;
}

guestlist(["Bob", "Jummy", "Horton"])

//Assignment 2

function countDown(x) {
    while (x > -1) {
        console.log(x);
        x--;
    } 
}