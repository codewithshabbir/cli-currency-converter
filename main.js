import inquirer from "inquirer";
let currencyConversion = {
    PKR: {
        USD: 0.0036,
        GBP: 0.0029,
        PKR: 1,
        CAD: 0.005,
    },
    USD: {
        USD: 1,
        GBP: 0.8,
        PKR: 277.3,
        CAD: 1.38,
    },
    GBP: {
        USD: 1.25,
        GBP: 1,
        PKR: 345.44,
        CAD: 1.72,
    },
    CAD: {
        USD: 0.73,
        GBP: 0.58,
        PKR: 201.29,
        CAD: 1,
    },
};
const answers = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        message: "Select your Currency:",
        choices: ["USD", "GBP", "PKR", "CAD"],
    },
    {
        type: "list",
        name: "to",
        message: "Select your Conversion Currency:",
        choices: ["USD", "GBP", "PKR", "CAD"],
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your conversion amount:",
        choices: ["USD", "GBP", "PKR", "CAD"],
    },
]);
const { from, to, amount } = answers;
if (from && to && amount) {
    console.log(`Your conversion from ${from} to ${to} is ${currencyConversion[from][to] * amount}`);
}
else {
    console.log("Invalid Inputs");
}
