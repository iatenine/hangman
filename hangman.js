const ANSWER_BANK = ["WHEEL OF FORTUNE", 'GO',
'Death Stranding', 'God of War', 'Spider', 'Farcry',
'Roblox', 'Farsiders', 'Bayonetta', 'Tetris', "Mario",
'PacMan', 'Galaga', 'Space Invaders', 'Galaxian',
'ET', 'The Witness', 'Portal', 'Braid', 'Little Nightmares',
'Star Fox', 'Tomb Raider', 'Crash Bandicoot', 'Uncharted',
'The Last of Us', 'Jak and Daxter', 'Ratchet and Clank',
'Burnout', 'Grand Theft Auto', 'Red Dead Redemption', 'Gun',
'Gone Home', 'Hatred', 'Doom', 'Quake', 'Wolfenstein']
const ANSWER = ANSWER_BANK[Math.floor(Math.random() * ANSWER_BANK.length)].toUpperCase()
const LOSE = 6;
const CHOICES = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const GUESSES = [' '];
const prompt = require('prompt-sync')({sigint: true});

const TEST_GUESSES = 'aeiourstlnewhf'.split('');

let strikes = 0;
let won = false;

function getBoard(){
    let retStr ="";
    for (var x = 0; x < ANSWER.length; x++){
        if(GUESSES.includes(ANSWER[x]))
           retStr += ANSWER[x]
        else
            retStr += "_";
    }
    return retStr;
}

function guessLetter(letter){
    letter = letter.toUpperCase()
    if(!GUESSES.includes(letter))
        GUESSES.push(letter)
    else{
        return null
    }
    if(!ANSWER.includes(letter))
        {strikes++;
        return false;}
    else if(!getBoard().includes("_"))
        won = true;
    
    return true
}


//main game loop
let letter;
console.log(getBoard()+'\n')

do{
    do{
        letter = prompt("Guess a letter: ");
    } while(!CHOICES.includes(letter.toUpperCase()))
        
    let response = guessLetter(letter)
    switch(response){
        case true:
            console.log("New letter revealed!\n")
            break;
        case false:
            console.log("Strike " + strikes + " of " + LOSE + "\n")
            break;
        case null:
            console.log("Please select a letter you haven't already tried\n")
    }
    console.log(getBoard()+'\n')
} while(strikes < LOSE && won == false)

//After game message
switch(won){
    case true:
        console.log("Congratulations")
        break;
    case false:
        console.log("Sorry, you've lost")
}