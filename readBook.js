const fs = require("fs");

const data = fs.readFileSync("book.json", "utf8");
const book = JSON.parse(data);

console.log(
  `ID: ${book.id} | Title: ${book.title} | Author: ${book.author} | Year: ${book.publishedYear} | Genre: ${book.genre}`
);
