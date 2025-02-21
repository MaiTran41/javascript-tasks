let teamMembers = ["John", "Emily", "Mike", "Sarah"];

// 1. Loop through the `teamMembers` array and log each name to the console.

teamMembers.forEach((member) => console.log(member));

// 2. Remove the first member of the array.

teamMembers.shift();

console.log(teamMembers);

// 3. Remove the last member of the array.
teamMembers.pop();
console.log(teamMembers);

// 4. Add a new member "Alex" to the front of the array.
teamMembers.unshift("Alex");
console.log(teamMembers);

// 5. Append a new member "Linda" to the end of the array.
teamMembers.push("Linda");
console.log(teamMembers);

// 6. Create a new array that excludes the first two members, keeping the original array unchanged.
const newArr = teamMembers.slice(2);
console.log(newArr);
console.log(teamMembers);

// 7. Find the index of "Mike" in the array.
console.log(teamMembers.indexOf("Mike"));

// 8. Try to find the index of "Jake" (who is not in the array).
console.log(teamMembers.indexOf("Jake"));

// 9. Replace "Mike" with "Carol" and "Bruce" in the same position./
// `2` is the index of Mike, `1` is the delete count
const newArr2 = teamMembers.splice(2, 1, "Carol", "Bruce");
console.log(teamMembers);

// 10. Concatenate "Bob" to the array and create a new array, keeping the original array unchanged.
const newArr3 = teamMembers.concat("Bob");
console.log(newArr3);
console.log(teamMembers);

// 11. Copy the entire `teamMembers` array using `slice` and store it in a new variable.
const newArr4 = teamMembers.slice(0);
console.log(newArr4);

// 12. Create a `newMembers` array with `"Tina"` and `"Dean"`, then merge it with `teamMembers` into a new array.
const newMembers = ["Tina", "Dean"];
const mergeArr = teamMembers.concat(newMembers);
console.log(mergeArr);
console.log(teamMembers, newMembers);

// 13. Find all occurrences of "John" in the array and store their positions in a new array.

// 14. Transform all names in the array to be uppercase while keeping the original array unchanged.

const upperCaseArr = teamMembers.map((member) => member.toLocaleUpperCase());
console.log(upperCaseArr, teamMembers);

// 15. Sort `teamMembers` in alphabetical order.
const sortedArr = teamMembers.sort();
console.log(sortedArr);

// 16. Reverse the `teamMembers` array.
const reversedArr = teamMembers.reverse();
console.log(reversedArr);

// 17. Check if at least one member in the array is named "John".
console.log(teamMembers.includes("John"));

// 18. Check if all names in the array have more than three letters.
const nameCheckResult = teamMembers.every(
  (memberName) => memberName.length >= 3
);
console.log(nameCheckResult);
