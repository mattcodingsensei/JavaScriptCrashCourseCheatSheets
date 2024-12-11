// 1. Variable Declarations

// Pre-ES6
var name = "Matt";
var age = 30;
console.log(name, age);
// ES6
let name = "Matt";
const age = 30;
console.log(name, age);

// 2. Functions
// Pre-ES6
// Function Declaration
function greet(name) {
    return "Hello " + name;
}
console.log(greet("Matt"));
// // Function Expression
var add = function(a, b) {
    return a + b;
};
console.log(add(2, 3));
// ES6
// Arrow Functions
const greet = name => `Hello ${name}`;
console.log(greet("Matt"));

const add = (a, b) => a + b;
console.log(add(2, 3));

// 3. Template Literals
// Pre-ES6
var name = "Matt";
var greeting = "Hello, " + name + "! Welcome to JavaScript.";
console.log(greeting);
// ES6
const name = "Matt";
const greeting = `Hello, ${name}! Welcome to JavaScript.`;
console.log(greeting);

// 4. Object Literals
// Pre-ES6
var name = "Matt";
var age = 30;

var person = {
  name: name,
  age: age,
  greet: function() {
    return "Hello, " + this.name;
  }
};
console.log(person.greet());
// ES6
const name = "Matt";
const age = 30;

const person = {
  name,
  age,
  greet() {
    return `Hello, ${this.name}`;
  }
};
console.log(person.greet());

// 5. Classes
// Pre-ES6
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.greet = function() {
    return "Hello, " + this.name;
  };
  
  var Matt = new Person("Matt", 30);
  console.log(Matt.greet());
// ES6
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      return `Hello, ${this.name}`;
    }
  }
  
  const Matt = new Person("Matt", 30);
  console.log(Matt.greet());
  
  // 6. Promises vs. Callbacks
  // Pre-ES6 (Using callbacks)
  function fetchData(callback) {
    setTimeout(function() {
      callback("Data fetched");
    }, 1000);
  }
  
  fetchData(function(data) {
    console.log(data);
  });
// ES6 (Promise)
const fetchData = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Data fetched");
      }, 1000);
    });
  };
  
  fetchData().then(data => console.log(data));
  










