const ANSWER = "WHEEL OF FORTUNE"
const LOSE = 6;
const CHOICES = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const GUESSES = [' '];

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
let guess = 0;

do{
    let response = guessLetter(TEST_GUESSES[guess])
    switch(response){
        case true:
            console.log("New letter revealed!")
            break;
        case false:
            console.log("Strike " + strikes + " of " + LOSE)
            break;
        case null:
            console.log("Please select a letter you haven't already tried")
    }
    console.log(getBoard()+'\n')
    guess++;
} while(strikes < LOSE && won == false)

//After game message
switch(won){
    case true:
        console.log("Congratulations")
        break;
    case false:
        console.log("Sorry, you've lost")
}