let incomes = [62000, 67000, 75000]
let total = 0;

for (const income of incomes) {
    console.log(income)
    total += income;
}

let fullName = "Julian JFK Kataleko";

for (char of fullName) {
    console.log(char);
}

//  for of challenge
for (let income of incomes) {
    income += 5000;
    // console.log(income);
}