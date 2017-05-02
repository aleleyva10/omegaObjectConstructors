// constructor for card
function card( myNumber, mySuit ){
  console.log( 'in card constructor:', myNumber, mySuit );
  this.number = myNumber;
  this.suit = mySuit;
  return this;
} // end card constructor
