


//   Deck Variables
const dealer  = document.getElementById('dealer');
const deck    = document.getElementById('deck');
const user    = document.getElementById('user');

//Button Variables
const deal  = document.getElementById('deal');
const hold  = document.getElementById('hold');
const hit   = document.getElementById('hit');

//Deck Array
const suites = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', 'ace', 'J', 'Q', 'K']
let deck = [];
//Random number to dealer and user Function
const userHand = [];
const dealerHand= [];
//Create Deck
// creates a card deck with 52 objects
// create for loops (loops through code each time with a different value)
//added weight for special characters
const  createDeck = () => {
  let i;
  for (i = 0, i < suites.length, i++){
    for (x = 0, x < values.length, x++){
      let weight = values[x];
      if(values[x] = 'J' || values[x] = 'Q' || values[x] = 'K'){
        weight = 10;
        if(values[x] = 'ace')
        weight = 11;
      let card = {Value: values[x], Suites: suites[i], Weight = weight};
      deck.push(card);
      }
    }
  }
}


//Shuffle Function
//makes a shuffle function and shuffles the values and suites array
const Shuffle = () => {
  let shuffleValues = math.floor(math.random(values[x]) * 1000);
  let shuffleSuites = math.floor(math.random(values[i]) * 1000);
}

//Card Picker Function
const cardPicker = (parameter) => {
  if(userHandSum < 21 && dealerHandSum < 21){
  let randomNum = Math.floor(Math.random() * 13);
  function removeIndex(deck) {
var cardIndex = deck.indexOf(randomNum);
if (cardIndex > -1) {
    deck.splice(cardIndex, 1);
}
return cardIndex;
}
return parameter.push(cardIndex);
}
};
    //pushs randomly chosen number to user and dealer


console.log(cardPicker(userHand));

    /*let userHandSum = userHand.reduce(function(a, b){
            return a + b;
        }, 0);
    let dealerHandSum = dealerHand.reduce(function(a, b){
                return a + b;
            }, 0);*/

//Start Game function

const start = () => {
 cardPicker();

//Hold Function
const holdFunc = () => {

}





//End Game function
const end = () => {
  if(userHand > dealerHand || dealerHand > userHand || userHand === 21 || dealerHand === 21 ||) {

  }
}





//On click events
deal.addEventListener("click", start());
