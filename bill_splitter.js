// Bill Splitter Application

//Task 1- Calculate the Tip
let bill= 50;
let tip= (bill>=50&& bill <=300) ? bill * 0.15: bill* 0.20;
// The ternary operator checks if the bill is between $50 and $300, applying a 15% tip if true, and 20% if false.

// This outputs the result of the tip based off the bill 
console.log('The bill was $' + bill + ', the tip was $' + tip + ', and the total value is $' + (bill + tip));

//Task 2- Creating calculateTip Function
function calculateTip(bill) {
    return (bill>=50&& bill <=300) ? bill * 0.15: bill* 0.20;
}
// Testing the calculateTip function based off a bill value of $100
console.log('For a bill of $100, the tip is $' + calculateTip(100));

//Task 3- Utilizing Arrays
// Single ray of bill amounts based off data set 1
let bills= [275, 40, 430];
let tips = bills.map(bill => calculateTip(bill));

//creating an array of totals thst will output (bill + tip for each bill)
let totals = bills.map(bill => bill + calculateTip(bill));

//Outputs Data Set 1
console.log('Bills:'+bills); //Outputs Bills for Data Set 1
console.log('Tips:'+tips); //Outputs Tips for Data Set 1
console.log('Totals:'+totals); //Outputs Totals for Data Set 1

// Single ray of bill amounts based off Data Set 2
bills= [125, 555, 44];
tips = bills.map(bill => calculateTip(bill));

//creating an array of totals thst will output (bill + tip for each bill)
 totals = bills.map(bill => bill + calculateTip(bill));

//Outputs Data Set 1
console.log('Bills:'+bills); //Outputs Bills for Data Set 2
console.log('Tips:'+tips); //Outputs Tips for Data Set 2
console.log('Totals:'+totals); //Outputs Totals for Data Set 2