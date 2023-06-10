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
  const root = document.querySelector(":root");
  root.style.setProperty("--color2", event.target.value);
});

// ------------------------------
// 1. Select the div of the chess board
// 2. Create a loop that runs 64 times (8 rows, 8 columns)
// 3. Create a new div element
// 4. Add the class "box" to the div and "black" or "white" depending on the row and column
// 5. Append the div to the chess board

// ex. element.classList.add("class-name");

const chessBoardDiv = document.querySelector("#chess-board");

let isRowEven = true;
let boxNumber = 9;
for (let i = 0; i < 64; i++) {
  if (i % 8 === 0) {
    isRowEven = !isRowEven;
    boxNumber--;
  }

  const div = document.createElement("div");
  div.classList.add("box");
  const letter = String.fromCharCode(65 + (i % 8));
  div.textContent = letter + String(boxNumber);

  // div.classList.add(isRowEven ^ (i % 2 !== 0) ? "black" : "white");
  if ((i % 2 === 0) ^ isRowEven) {
    // XOR
    //(if both conditions are false then the result is true)
    //(if both conditions are true then the result is false)

    div.classList.add("white");
  } else {
    div.classList.add("black");
  }

  chessBoardDiv.appendChild(div);
}
