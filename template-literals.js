// template literals

let word1 = "Julian";
let word2 = "Kataleko";

// const fullName = word1 + " " + word2
const fullName = `${word1} ${word2}`;

console.log(fullName);

let example = 'Hello \n' + 'world';
let example2 = `${word1}
${word2}`;

document.getElementById("example").innerText = example2