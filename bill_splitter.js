// Bill Splitter Application

//Task 1- Calculate the Tip
let bill= 50;
let tip= (bill>=50&& bill <=300) ? bill * 0.15: bill* 0.20;
// The ternary operator checks if the bill is between $50 and $300, applying a 15% tip if true, and 20% if false.

// This outputs the result of the tip based off the bill 
console.log('The bill was $' + bill + ', the tip was $' + tip + ', and the total value is $' + (bill + tip));
