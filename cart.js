/*
const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i <= cartItems.length; i++) { // Bug: <= should be <
      total += cartItems[i].price; // Bug: cartItems[i] is undefined on the last iteration
  }
  return total;
}

function applyDiscount(total, discountRate) {
  return total - total * discountRate; // Bug: Missing validation for discountRate
}

function generateReceipt(cartItems, total) {
  let receipt = "Items:\n";
  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}\n`;
  });
  receipt += `Total: $${total.toFixed(2)}`; // Bug: total may not be a number
  return receipt;
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;
*/

//-----------------------------Solution-----------


// Debugging method I have used-------
// -  first open the Inspect in browser and open  Developer Tools in the browser
// - clicked on Console, it was showing  errors and warnings
// - then used the  Sources tab to add breakpoints and carefully analzed  the code


const cart = [
  { name: "Television", price: 1000 },
  { name: "laptop", price: 700 },
  { name: "printer", price: 500 }
];

// Function to calculate total price of items in the cart
function calculateTotal(cartItems) {
  let total = 0;
  //what was the bug- cartItems[i] is undefined on the last iteration because = was written in the code with < which was making it looping one extra time.
  //  how I Fixed: Changed from i <= cartItems.length to i < cartItems.length 
  for (let i = 0; i < cartItems.length; i++) {
    total += cartItems[i].price;
  }
  return total;
}

// Function to apply discount to the total amount

  //Bug- there were no edgecases written for invalid values for discount like -1, 2, or NaN, which could break the calculation  so the function was letting it pass.
  // How I fixed it : I included  edge cases using if condition ensuring discountRate is between 0 and 1
  function applyDiscount(total, discountRate) {
  if (discountRate < 0 || discountRate > 1 || isNaN(discountRate)) {
    discountRate = 0;
  }
  return total - total * discountRate;
}

/// Function to generate a receipt showing item list and total
function generateReceipt(cartItems, total) {
  let receipt = "Items:\n";

  cartItems.forEach(item => {
    receipt += `${item.name}: $${item.price}\n`;
  });

 
  receipt += `Total: $${isNaN(total) ? '0.00' : total.toFixed(2)}`;
  return receipt;
}

// what was the bug: The function used total.toFixed(2) without checking if total was a valid number or not.This can caused an error if total was undefined or NaN.
// how I fixed it: I added conditions  using isNaN(total) to make sure total is a valid number before it gets fixed.


// Run the shopping cart logic and display the results
console.log("Starting shopping cart calculation...");

const total = calculateTotal(cart);                // Calculating total price
const discountedTotal = applyDiscount(total, 0.2); // Appling 20% discount
const receipt = generateReceipt(cart, discountedTotal); // Generating receipt


// Display the output in the HTML
document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;


