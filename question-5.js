// Question 5: Calculating Total Price in User's Cart

function calculateTotalPrice() {
  let totalCost = 0;
  for (let item of cart) {
    totalCost += item.price * item.quantity;
  }
  return totalCost;
}
// ตัวอย่างการใช้งาน

const cart = [
  { name: "apple", price: 10, quantity: 2 },
  { name: "banana", price: 15, quantity: 1 },
  { name: "orange", price: 5, quantity: 3 },
];

console.log(calculateTotalPrice(cart));