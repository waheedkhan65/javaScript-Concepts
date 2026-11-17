// Lesson 3: Loops
// A loop repeats a block of code again and again.
// Loops are useful when we need to work with many values.

// 1. For loop
console.log("For loop:");
for (let i = 0; i < 5; i++) {
    console.log("Current value of i:", i);
}

// 2. While loop
// A while loop runs while a condition is true.
console.log("\nWhile loop:");
let count = 0;
while (count < 3) {
    console.log("Count is:", count);
    count++;
}

// 3. For...of loop
// This loop is used to iterate through array values.
console.log("\nFor...of loop:");
const colors = ["Red", "Green", "Blue"];
for (const color of colors) {
    console.log("Color:", color);
}

// 4. For...in loop
// This loop is used to iterate through object keys.
console.log("\nFor...in loop:");
const student = {
    name: "John",
    age: 21,
    rollNo: 231300,
};

for (const key in student) {
    console.log(key + ": " + student[key]);
}

