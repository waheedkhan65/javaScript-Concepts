// Lesson 1: Strings in JavaScript
// A string is a sequence of characters used to store text.
// We can write strings using single quotes, double quotes, or backticks.

// 1. Create some strings
const firstName = "Waheed";
const lastName = 'Ali';
const fullName = `${firstName} ${lastName}`;

console.log("Full name:", fullName);

// 2. Escape sequences allow special characters inside strings
const multiLineText = "Hello, World!\nThis is a new line.\tThis is a tab.";
console.log("Multiline text:");
console.log(multiLineText);

// 3. String methods
const name = "waheed";
console.log("Uppercase:", name.toUpperCase());
console.log("Lowercase:", name.toLowerCase());
console.log("Length:", name.length);
console.log("Ends with 'd'?:", name.endsWith("d"));
console.log("Includes 'hee'?:", name.includes("hee"));
console.log("Slice from index 1 to 5:", name.slice(1, 5));

// 4. String concatenation
const greeting = "Hello " + firstName + "!";
console.log("Greeting:", greeting);
console.log("Template literal:", `Hello ${firstName}!`);

