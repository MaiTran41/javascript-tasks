/* Task 14
Create a constructor function `Book` that takes `title`, `author`, and `pages`.
Create a simple book library that allows users to add books via an HTML form and displays them dynamically.
*/

// Your code here

const submitFormBtn = document.getElementById("submitForm");
const bookDisplayList = document.getElementById("bookDisplay");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

const addBook = () => {
  const li = document.createElement("li");

  bookDisplayList.appendChild(li);

  li.textContent = `Book: ${title.value} - Author: ${authorInput.value} - Number of pageS: ${pagesInput.value}`;
};

submitFormBtn.addEventListener("click", addBook);
