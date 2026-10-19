const express = require("express");

const app = express();
const PORT = 3000;

const books = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988,
    genre: "Adventure"
  },
  {
    id: 2,
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    year: 1958,
    genre: "Historical Fiction"
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Dystopian"
  },
  {
    id: 4,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genre: "Fantasy"
  },
  {
    id: 5,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Romance"
  },
  {
    id: 6,
    title: "Animal Farm",
    author: "George Orwell",
    year: 1945,
    genre: "Satire"
  }
];

// GET /
app.get("/", (req, res) => {
  res.send("Welcome to the Books API");
});

// GET /books/count
// Keep this route before /books/:id.
app.get("/books/count", (req, res) => {
  res.json({ count: books.length });
});

// GET /books
// Optional filter: /books?genre=Fantasy
app.get("/books", (req, res) => {
  const { genre } = req.query;

  if (genre) {
    const filteredBooks = books.filter(
      (book) => book.genre.toLowerCase() === genre.toLowerCase()
    );

    return res.json(filteredBooks);
  }

  res.json(books);
});

// GET /books/:id
app.get("/books/:id", (req, res) => {
  const id = Number(req.params.id);

  const book = books.find((book) => book.id === id);

  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }

  res.json(book);
});

app.listen(PORT, () => {
  console.log(`Books API running at http://localhost:${PORT}`);
});
