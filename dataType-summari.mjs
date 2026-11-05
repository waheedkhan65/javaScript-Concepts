// JavaScript Data Types Summary for Beginners
// ------------------------------------------------
// JavaScript has two main categories of data types:
// 1) Primitive data types
// 2) Reference (non-primitive) data types

// 1) Primitive Data Types
// These are simple values and are stored directly in memory.
// There are 7 primitive types in JavaScript:

// String -> text values
const name = "John";
console.log(name); // Output: John

// Number -> whole numbers or decimals
const age = 25;
console.log(age); // Output: 25

// Boolean -> true or false
const isStudent = true;
console.log(isStudent); // Output: true

// Null -> empty value intentionally assigned
const emptyValue = null;
console.log(emptyValue); // Output: null

// Undefined -> value not assigned yet
let city;
console.log(city); // Output: undefined

// Symbol -> unique and immutable value
const uniqueId = Symbol("id");
console.log(uniqueId); // Output: Symbol(id)

// BigInt -> large integer values beyond Number limit
const bigNumber = 12345678901234567890n;
console.log(bigNumber); // Output: 12345678901234567890

// 2) Reference / Non-Primitive Data Types
// These are objects and can hold multiple values.
// They are stored by reference, not directly as a single value.

// Object -> key-value pairs
const person = {
    name: "Alice",
    age: 22,
    city: "Karachi"
};
console.log(person); // Output: { name: 'Alice', age: 22, city: 'Karachi' }

// Array -> ordered list of values
const fruits = ["Apple", "Mango", "Banana"];
console.log(fruits); // Output: ['Apple', 'Mango', 'Banana']

// Function -> reusable block of code
function greet() {
    return "Hello, welcome!";
}
console.log(greet()); // Output: Hello, welcome!

// Quick Summary
// Primitive types: String, Number, Boolean, Null, Undefined, Symbol, BigInt
// Non-primitive types: Object, Array, Function

// Important Note:
// Primitive values are copied by value.
// Non-primitive values are copied by reference.

let a = 10;
let b = a;
b = 20;
console.log(a); // Output: 10
console.log(b); // Output: 20

const obj1 = { name: "Ali" };
const obj2 = obj1;
obj2.name = "Hassan";
console.log(obj1.name); // Output: Hassan
console.log(obj2.name); // Output: Hassan

// Explanation:
// For primitive values, changing b does not change a.
// For objects, obj2 points to the same object as obj1, so both change together.

// End of lesson