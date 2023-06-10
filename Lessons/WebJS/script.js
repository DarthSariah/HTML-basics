const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
  },
  {
    title: "1984",
    author: "George Orwell",
  },
];

const booksDiv = document.querySelector("#book-titles"); // <div id="book-titles"></div>

for (let i = 0; i < books.length; i++) {
  const p = document.createElement("p"); // <p></p>
  p.textContent = books[i].title + " by " + books[i].author; // <p>The Great Gatsby by F. Scott Fitzgerald</p>
  booksDiv.appendChild(p); // <div id="book-titles"><p>The Great Gatsby by F. Scott Fitzgerald</p></div>
}

// ------------------------------

const colorSelect = document.querySelector("#color-select");

colorSelect.addEventListener("change", function (event) {
  const color = event.target.value; // The value of the selected option
  booksDiv.style.backgroundColor = color; // Change the background color of the div
});
