// ARRAYS
// Arrays in JavaScript are a special type of object that store multiple values in a single variable.

// There are two main ways to create an array in JavaScript: array literals and the Array constructor.

// Array Literals
/*
    Array literals are the most common way to create arrays in JavaScript. They are defined using square brackets [] and contain a comma-separated list of values. 
    The values can be of any data type, and you can mix different data types in the same array. You can declare and initialize an array in a single line or over multiple lines. 
    You can use any of the (var), (let), or (const) keywords to declare an array.
*/

const fruits = ['apple', 'banana', 'cherry', 'date'];
console.log(fruits);

// Array Constructor
/*
    The Array constructor is a built-in function in JavaScript that creates an array. You can use the new keyword to create a new array using the Array constructor. 
    You can also pass values to the Array constructor to initialize the array.
*/

const fruits2 = new Array('apple', 'banana', 'cherry', 'date');
console.log(fruits2);

// Accessing Array Elements
/*
    You can access array elements using square brackets [] and the index of the element. Array indexes are zero-based, meaning the first element has an index of 0, 
    the second element has an index of 1, and so on. You can also use negative indexes to access elements from the end of the array.
*/

console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[fruits.length - 1]); // date
console.log(fruits[-1]); // undefined

// Adding and Updating Array Elements
/*
    You can add new elements to an array or update existing elements by assigning a value to the array index. If you assign a value to an index that is greater than the length of the array, 
    the array will be automatically resized to accommodate the new element.
*/

fruits[4] = 'elderberry';
console.log(fruits);

fruits[1] = 'blueberry';
console.log(fruits);

// Deleting Array Elements
/*
    You can delete elements from an array using the delete keyword. When you delete an element from an array, the array length does not change, but the element is replaced with undefined.
*/

delete fruits[2];
console.log(fruits);

// Array Methods
/*
    Arrays have several built-in methods that allow you to manipulate and work with arrays. Here are some commonly used array methods:
        - push(): Adds one or more elements to the end of an array
        - pop(): Removes the last element from an array and returns it
        - unshift(): Adds one or more elements to the beginning of an array
        - shift(): Removes the first element from an array and returns it
        - concat(): Joins two or more arrays and returns a new array
        - slice(): Extracts a part of an array and returns a new array
        - splice(): Adds or removes elements from an array
        - indexOf(): Returns the index of the first occurrence of a specified value in an array
        - lastIndexOf(): Returns the index of the last occurrence of a specified value in an array
        - includes(): Returns true if an array contains a specified value, otherwise false
        - reverse(): Reverses the order of the elements in an array
        - sort(): Sorts the elements of an array
        - filter(): Creates a new array with elements that pass a test
        - map(): Creates a new array by performing a function on each element
        - forEach(): Calls a function for each element in an array
        - reduce(): Reduces an array to a single value
*/

// Example of Array Methods
const numbers = [1, 2, 3, 4, 5];

numbers.push(6);
console.log(numbers); // [1, 2, 3, 4, 5, 6]

numbers.pop();
console.log(numbers); // [1, 2, 3, 4, 5]

numbers.unshift(0);
console.log(numbers); // [0, 1, 2, 3, 4, 5]

numbers.shift();
console.log(numbers); // [1, 2, 3, 4, 5]

const moreNumbers = [6, 7, 8, 9, 10];
const combined = numbers.concat(moreNumbers);

console.log(combined); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sliced = combined.slice(2, 7);
console.log(sliced); // [3, 4, 5, 6, 7]

const spliced = combined.splice(2, 3);
console.log(spliced); // [3, 4, 5]

console.log(combined); // [1, 2, 6, 7, 8, 9, 10]

console.log(combined.indexOf(7)); // 3

console.log(combined.lastIndexOf(7)); // 3

console.log(combined.includes(7)); // true

console.log(combined.reverse()); // [10, 9, 8, 7, 6, 2, 1]

console.log(combined.sort()); // [1, 10, 2, 6, 7, 8, 9]

const filtered = combined.filter(function(number) {
    return number > 5;
});

console.log(filtered); // [10, 6, 7, 8, 9]

const mapped = combined.map(function(number) {
    return number * 2;
});

console.log(mapped); // [2, 20, 4, 12, 14, 16, 18]

combined.forEach(function(number) {
    console.log(number);
});

const reduced = combined.reduce(function(total, number) {
    return total + number;
}, 0);

console.log(reduced); // 43

// Array Destructuring
/*
    Array destructuring is a feature in JavaScript that allows you to extract multiple elements from an array and assign them to variables in a single statement. 
    You can use array destructuring to extract elements from an array and assign them to variables with the same name as the element.
*/

const [first, second, ...rest] = combined;
console.log(first, second, rest);

// Array Spread Operator
/*
    The array spread operator (...) is a feature in JavaScript that allows you to copy the elements of one array to another array. The array spread operator is similar to the 
    concat() method, but it is more concise and easier to use.
*/

const combined2 = [...numbers, ...moreNumbers];
console.log(combined2);


// OBJECTS
// Objects in JavaScript are a collection of key-value pairs. The keys are strings (or symbols) and the values can be anything.
// They are non-primitive values, meaning they are mutable and can be changed after they are created.

// There are two main ways to create an object in JavaScript: object literals and the Object constructor.

// Object Literals
/*
    Object literals are the most common way to create objects in JavaScript. They are defined using curly braces {} and 
    contain a comma-separated list of key-value pairs. The key is usually a string (or symbol) and the value can be any data type. 
    They can be declared and initialized in a single line or over multiple lines. You can use any of the (var), (let), or (const)
    keywords to declare an object.
*/

const person = {
    name: 'John',
    age: 30,
    isStudent: false,
    'fav-color': 'blue'
};

console.log(person);

// Object Constructor
/*
    The Object constructor is a built-in function in JavaScript that creates an object. You can use the new keyword to 
    create a new object using the Object constructor. You can also add properties to the object using dot notation or 
    bracket notation.
*/

const person2 = new Object();
person2.name = 'Jane';
person2.age = 25;
person2.isStudent = true;
person2['fav-color'] = 'red';

console.log(person2);

// Accessing Object Properties
/*
    You can access object properties using dot notation or bracket notation. Dot notation is the most common way to 
    access object properties, but bracket notation is useful when the property name is dynamic or contains special 
    characters.
*/

console.log(person.name); // John
console.log(person['age']); // 30
console.log(person['fav-color']); // blue

// Adding and Updating Object Properties
/*
    You can add new properties to an object or update existing properties using dot notation or bracket notation.
*/

person.job = 'developer';
person['fav-color'] = 'green';

console.log(person);

// Deleting Object Properties
/*
    You can delete properties from an object using the delete keyword.
*/

delete person.isStudent;
console.log(person);

// Object Methods
/*
    Since Objects are non-primitive data types, they can also contain methods, which are functions that are stored as object properties. 
    You can define a method using a function expression or an arrow function. You can call the method using dot notation or bracket notation.
*/

const person3 = {
    name: 'Alice',
    age: 35,
    greet: function() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

person3.greet();

// Object.keys(), Object.values(), Object.entries()
/*
    You can use the Object.keys(), Object.values(), and Object.entries() methods to get an array of the keys, values, or key-value pairs of an object, respectively.
*/

console.log(Object.keys(person3)); // ['name', 'age', 'greet']
console.log(Object.values(person3)); // ['Alice', 35, [Function: greet]]
console.log(Object.entries(person3)); // [['name', 'Alice'], ['age', 35], ['greet', [Function: greet]]]

// Object Destructuring
/*
    Object destructuring is a feature in JavaScript that allows you to extract multiple properties from an object and assign them to variables in a single statement. 
    You can use object destructuring to extract properties from an object and assign them to variables with the same name as the property.
*/

const { name, age } = person3;
console.log(name, age);

// Object.assign()
/*
    You can use the Object.assign() method to copy the properties of one or more objects to a target object. The target object is the first argument, and the source 
    objects are the subsequent arguments. If the target object already has a property with the same name, it will be overwritten by the source object.
*/

const person4 = {
    name: 'Bob',
    age: 40
};

const person5 = {
    name: 'Charlie',
    age: 45
};

const person6 = Object.assign({}, person4, person5);
console.log(person6); // { name: 'Charlie', age: 45 }

// Object Spread Operator
/*
    The object spread operator (...) is a feature in JavaScript that allows you to copy the properties of one object to another object. The object spread operator 
    is similar to the Object.assign() method, but it is more concise and easier to use.
*/

const person7 = {
    ...person4,
    ...person5
};

console.log(person7); // { name: 'Charlie', age: 45 }

// Object.freeze(), Object.seal(), Object.preventExtensions()
/*
    The Object.freeze() method is used to freeze an object, which means that you cannot add, update, or delete properties from the object. 
    The Object.seal() method is used to seal an object, which means that you cannot add or delete properties from the object, but you can update existing properties.
    The Object.preventExtensions() method is used to prevent an object from having new properties added to it, but you can still update and delete existing properties.
*/

const person8 = {
    name: 'David',
    age: 50
};

Object.freeze(person8);
person8.name = 'Daniel'; // This will not work 

Object.seal(person8);
delete person8.age; // This will not work

Object.preventExtensions(person8);
person8.job = 'Teacher'; // This will not work

console.log(person8);

// Object.getOwnPropertyDescriptors()
/*
    You can use the Object.getOwnPropertyDescriptors() method to get the property descriptors of an object. The property descriptors contain information about the 
    properties of an object, such as whether they are writable, enumerable, or configurable.
*/

const descriptors = Object.getOwnPropertyDescriptors(person8);
console.log(descriptors);

// Object.create()
/*
    You can use the Object.create() method to create a new object with the specified prototype object. The prototype object is the object from which the new object 
    inherits its properties. You can also pass an optional second argument to define the properties of the new object.
*/

const person9 = Object.create(person7);
console.log(person9); // person9 is an empty object that inherits properties from person7

person9.name = 'Eve';
console.log(person9); // { name: 'Eve' }
console.log(person9.age); // 45 (inherited from person7)
