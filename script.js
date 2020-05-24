
//   Deck Variables
const dealer  = document.getElementById("dealer");
const deck =  document.getElementById('deck');
const user    = document.getElementById('user');
//Button Variables
const deal  = document.getElementById('deal');
const hold  = document.getElementById('hold');
const hit   = document.getElementById('hit');

//Deck Array
const suites = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
const values = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
const deckb = [];

//Player Hands
let userHand = [];
let dealerHand= [];

//Create Deck with 52 objects with added weight for special characters
const createDeck = () => {
  for (let i = 0; i < suites.length; i++){
    for (let x = 0; x < values.length; x++){
      let name = values[x];
      let weight = values[x];
      let suit = suites[i];
      if(values[x] === 'Jack' || values[x] === 'Queen' || values[x] === 'King'){
        weight = 10;
      } else if (values[x] === 'Ace'){
        weight = 11;
      }
      let card = {
        name: name,
        suit: suit,
        weight: weight
      };
      deck.push(card);
    }
  }
};

//Card Picker Function
//pushs randomly chosen Deck Object
const cardPicker = (arr1, arr2) => {
    let randomNum = Math.floor(Math.random() * 52);
    let card = arr2[randomNum];
    arr1.push(card);
    arr2.splice(randomNum, 1);
};

//getSum function adds up the value of the weights of the cards in user and dealer hands.
let getSum = function(array){
  let sum = array.reduce(function(a,b){
    return a + b.weight;
  }, 0);
  return sum;
};


//Start Game function

const start = () => {
 cardPicker();
}
//Hold Function
const holdFunc = () => {

}



// Game Reset Function
const gameOver = (str) => {
  if(str === 'win'){
    deal.innerHTML = 'You win! Play again?';
  } else {
    deal.innerHTML = 'Game over! Play again?'
  }
    currentlyPlaying = false;
}






//On click events
//onclick runs the start function
deal.onclick = () => {
start();
}
//the hold button is a conditional and uses the gameOver Function
//the game wining if uses the if statement for game wining and else if if the first if is false
hold.onclick = () => {
  if(userHand > dealerHand || userHand === 21){
    gameOver('win');
  } else if (dealerHand > userHand || dealerHand === 21) {
    gameOver('lose');
  }
}
