/* Task 9
Create an array `users` where each user has `name` and `score`.
Add a button in HTML that sorts the users by score in descending order and updates the displayed list.
*/

// Your code here
const users = [
  {
    name: "Mei",
    score: 8,
  },
  {
    name: "Heidi",
    score: 6,
  },
  {
    name: "Shane",
    score: 5,
  },
  {
    name: "Jane",
    score: 7,
  },
];

const sortingScore = () => {
  users.sort((a, b) => b.score - a.score);
  console.log(users);

  const updatedUsers = users.map((user) => {
    const li = document.createElement("li");

    li.textContent = `${user.name} : ${user.score}`;

    document.body.appendChild(li);
  });
};

const sortingBtn = document.getElementById("sortingBtn");

sortingBtn.addEventListener("click", sortingScore);
