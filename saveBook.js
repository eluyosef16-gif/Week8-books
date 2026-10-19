const fs = require("fs");
const book = require("./book");

fs.writeFileSync("book.json", JSON.stringify(book, null, 2));

console.log("Book saved successfully!");
