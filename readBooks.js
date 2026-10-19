
const fs = require("fs");

const data = fs.readFileSync("books.json", "utf8");
const books = JSON.parse(data);

console.log(`Total books: ${books.length}`);
console.log("------------------------------");

books.forEach((book) => {
  console.log(
    `ID: ${book.id} | Title: ${book.title} | Author: ${book.author} | Year: ${book.year} | Genre: ${book.genre}`
  );
});
