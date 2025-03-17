"use strict";

/* Task 1: Fix the User Data Processing  
Correct the method chaining so it filters active users and returns uppercase names.  
*/

const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 3, name: "Charlie", active: true },
];

// Fix this
const activeUsers = users
  .filter((user) => user.active)
  .map((user) => user.name.toUpperCase());

console.log(activeUsers); // Expected: ["ALICE", "CHARLIE"]

/* Task 2: Fix Optional Chaining  
Safely access `email` inside `user.details`.  
*/

const userData = { details: { contact: { email: "jane@example.com" } } };

// Fix this
console.log(userData.details?.contact?.email); // Expected: "jane@example.com"

/* Task 3: Fix Optional Chaining with Arrays  
Safely access the second element in `orders` if it exists.  
*/

const customer = { orders: [1001, 1002] };

// Fix this
console.log(customer.orders?.[2]); // Expected: undefined

/* Task 4: Fix Chained String Manipulation  
Extract initials from a full name using chaining.  
*/

const fullName = "John Doe";

// Fix this
// const initials = fullName.map((word) => word[0].toUpperCase()).join(" ");

const initials = fullName
  .split(" ", 2)
  .map((word) => word[0].toUpperCase())
  .join(" ");
console.log(initials); // Expected: "J D"

/* Task 5: Create Your Own
Write a function that receives a `products` array and returns a
comma-separated string of **only in-stock** product names, **uppercase**.
Test with:
`[{ name: "Laptop", stock: 10 }, { name: "Phone", stock: 0 }]`
Expected output: `"LAPTOP"`
*/

// Write your code here

const checkProducts = (products) => {
  const uppercaseProductInstock = products
    .filter((product) => product.stock > 0)
    ?.map((product) => product?.name.toUpperCase());

  console.log(uppercaseProductInstock);
};
checkProducts([
  { name: "Laptop", stock: 10 },
  { name: "Phone", stock: 0 },
  { name: "Tablet", stock: 5 },
  { name: "Headphones", stock: 15 },
]);
