const person = {
    name: 'John',
    age: 24,
};

const hobbies = ['hiking', 'reading'];

let name = 'John'; // allocates memory for a string
const age = 24; // allocates memory for a number
name = 'John Doe'; // allocates memory for a new string
const firstName = name.slice(0,4); // allocates memory for a new string

//slide 9
let son = {
    name: 'John',
};
let dad = {
    name: 'Johnson',
}
son.dad = dad;
dad.son = son;

son = null;
dad = null;

// Memory leaks
// user = getUser();
// var secondUser = getUser();
// function getUser() {
//   return 'user';
// }
//
// //Forgotten timers and callbacks
// const object = {};
// const intervalId = setInterval(function() {
//   // everything used in here can't be collected
//   // until the interval is cleared
//   // doSomething(object);
// }, 2000);
// clearInterval(intervalId);

//Forgotten callbacks
// const element = document.getElementById('button');
// const onClick = () => alert('hi');
//
// element.addEventListener('click', onClick);
//
// element.removeEventListener('click', onClick);
// element.parentNode.removeChild(element);

//Map
// const map = new Map();
// map.set('1', 'str1');   // a string key
// map.set(1, 'num1');     // a numeric key
// map.set(true, 'bool1'); // a boolean key
// console.log( map.get(1)   ); // 'num1'
// console.log( map.get('1') ); // 'str1'
// console.log( map.size ); // 3

//map[key] = 2, this is treating map as a plain JavaScript object, so it implies all corresponding limitations (only string/symbol keys and so on).

// let john = { name: "John" };
// let visitsCountMap = new Map();
// visitsCountMap.set(john, 123);
//
// console.log( visitsCountMap.get(john) ); // 123

//example for object
// let john = { name: "John" };
// let ben = { name: "Ben" };
//
// let visitsCountObj = {}; // try to use an object
//
// visitsCountObj[ben] = 234; // try to use ben object as the key
// visitsCountObj[john] = 123; // try to use john object as the key, ben object will get replaced
//
// console.log( visitsCountObj[ben] ); // 123
// console.log( visitsCountObj[john] ); // 123
// console.log( visitsCountObj["[object Object]"] ); // 123

//chaining
// const map = new Map();
// map.set('1', 'str1')
//   .set(1, 'num1')
//   .set(true, 'bool1');
// console.log(map); //Map(3) { '1' => 'str1', 1 => 'num1', true => 'bool1' }

//Iteration over Map
const recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
    console.log(entry); // cucumber,500 (and so on)
}

// runs the function for each
recipeMap.forEach( (value, key, map) => {
    console.log(`${key}: ${value} and map is ${JSON.stringify(Array.from(map))}`); // cucumber: 500 etc
});
//
// const map = new Map([
//   ['1',  'str1'],
//   [1,    'num1'],
//   [true, 'bool1']
// ]);
//
// console.log( map.get('1') ); // str1

//create a map from an object
// const obj = {
//   name: "John",
//   age: 30
// };
// const map = new Map(Object.entries(obj));
//
// console.log( map.get('name') ); // John

//create an object from map
// const prices = Object.fromEntries([ //Object.fromEntries(map.entries()); //Object.fromEntries(map);
//   ['banana', 1],
//   ['orange', 2],
//   ['meat', 4]
// ]);// prices = { banana: 1, orange: 2, meat: 4 }
//
// console.log(prices.orange); // 2

//Set
let set = new Set();

// const john = { name: "John" };
// const pete = { name: "Pete" };
// const mary = { name: "Mary" };
//
// // visits, some users come multiple times
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// set keeps only unique values
// console.log( set.size ); // 3
//
// for (let user of set) {
//   console.log(user.name); // John, Pete and Mary
// }
// set.forEach((value, valueAgain, set) => {
//   console.log(`value is ${JSON.stringify(value)}, valueAgain is ${JSON.stringify(valueAgain)}, and set is ${JSON.stringify(Array.from(set))}`);
// });

//WeakMap
// let john = { name: "John" };
//
// const array = [ john ];
//
// john = null;
// console.log(JSON.stringify(array))// ?

// let john = { name: "John" };
//
// const map = new Map();
// map.set(john, "...");
//
// john = null;
// console.log(map.keys())
// console.log(JSON.stringify(Array.from(map)))

//keys must be objects
// const weakMap = new WeakMap();
// const obj = {};
// weakMap.set(obj, "ok");
// weakMap.set("test", "Whoops");

// let john = { name: "John" };
//
// const weakMap = new WeakMap();
// weakMap.set(john, "...");
//
// john = null;
// console.log(JSON.stringify(weakMap))
// console.log(JSON.stringify(Array.from(weakMap)))
// console.log(weakMap.get(john))
// console.log(weakMap.has(john))

//Use case
const visitsCountMap = new Map(); // let visitsCountMap = new WeakMap();
function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}
let john = { name: "John" };
countUser(john); // count his visits
// later john leaves us
john = null;

//caching
// const cache = new Map();
// const cache = new WeakMap();
// function process(obj) {
//   if (!cache.has(obj)) {
//     let result = /* calculations of the result for */ obj;
//
//     cache.set(obj, result);
//     return result;
//   }
//
//   return cache.get(obj);
// }
//
// let obj = {/* let's say we have an object */};
//
// let result1 = process(obj);
// // obj = null;
// console.log(cache.has(obj))
// // console.log(cache.size);

//weakSet
// let visitedSet = new WeakSet();
// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };
//
// visitedSet.add(john); // John visited us
// visitedSet.add(pete); // Then Pete
// visitedSet.add(john); // John again
// // visitedSet has 2 users now
// // check if John visited?
// alert(visitedSet.has(john)); // true
// // check if Mary visited?
// alert(visitedSet.has(mary)); // false
// john = null;
// // visitedSet will be cleaned automatically

//JSON
// const student = {
//   name: 'John',
//   age: 30,
//   isAdmin: false,
//   courses: ['html', 'css', 'js'],
//   spouse: null
// };
// const json = JSON.stringify(student);
// console.log(typeof json); //string
//
// console.log(json);
// console.log(student);

// console.log( JSON.stringify(1) ) // 1
// console.log( JSON.stringify('test') ) // "test"
// console.log( JSON.stringify(true) ); // true
// console.log( JSON.stringify([1, 2, 3]) ); // [1,2,3]

// const user = {
//   sayHi() { // ignored
//     alert("Hello");
//   },
//   [Symbol("id")]: 123, // ignored
//   something: undefined // ignored
// };
//
// console.log( JSON.stringify(user) );

// const meetup = {
//   title: "Conference",
//   room: {
//     number: 23,
//     participants: ["john", "ann"]
//   }
// };
//
// console.log( JSON.stringify(meetup) );

// const room = {
//   number: 23
// };
// //
// const meetup = {
//   title: "Conference",
//   participants: ["john", "ann"]
// };
//
// meetup.place = room;       // meetup references room
// room.occupiedBy = meetup; // room references meetup

//
// JSON.stringify(meetup); //Converting circular structure to JSON
// --> starting at object with constructor 'Object'
// |     property 'place' -> object with constructor 'Object'
// --- property 'occupiedBy' closes the circle
// at JSON.stringify (<anonymous>)

// const json = JSON.stringify(value, [replacer, space])

// const room = {
//   number: 23
// };
// const meetup = {
//   title: "Conference",
//   participants: [{name: "John"}, {name: "Alice"}],
//   place: room // meetup references room
// };
// room.occupiedBy = meetup; // room references meetup
// console.log( JSON.stringify(meetup, ['title', 'participants']) );// {"title":"Conference","participants":[{},{}]}
// console.log(JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']));// {"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}

// const user = {
//   name: "John",
//   age: 25,
//   roles: {
//     isAdmin: false,
//     isEditor: true
//   }
// };
// console.log(JSON.stringify(user, null, 6));

// const room = {
//   number: 23
// };
// const meetup = {
//   title: "Conference",
//   date: new Date(Date.UTC(2017, 0, 1)),
//   room
// };
// console.log( JSON.stringify(meetup) );//{"title":"Conference","date":"2017-01-01T00:00:00.000Z","room":{"number":23}}

// const room = {
//   number: 23,
//   toJSON() {
//     return this.number;
//   }
// };
// const meetup = {
//   title: "Conference",
//   room,
//   toJSON() {
//     return this.title;
//   }
// };
// console.log( JSON.stringify(room) ); // 23
// console.log( JSON.stringify(meetup) ); //{"title":"Conference","room":23}

//parse
// const parse = JSON.parse(str, [ reviver]);

// let numbers = "[0, 1, 2, 3]";
// numbers = JSON.parse(numbers);
// console.log( numbers[1] ); // 1

// let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
// const user = JSON.parse(userData);
// console.log( user.friends[1] ); // 1

// let json = `{
//   name: "John",                     // mistake: property name without quotes
//   "surname": 'Smith',               // mistake: single quotes in value (must be double)
//   'isAdmin': false                  // mistake: single quotes in key (must be double)
//   "birthday": new Date(2000, 2, 3), // mistake: no "new" is allowed, only bare values
//   "friends": [0,1,2,3]              // here all fine
// }`;

//Using reviver
// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
// let meetup = JSON.parse(str);
// alert( meetup.date.getDate() ); // Error!

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
// let meetup = JSON.parse(str, function(key, value) {
//   if (key === 'date') return new Date(value);
//   return value;
// });
// console.log( meetup.date.getDate() ); //

// let schedule = `{
//   "meetups": [
//     {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
//     {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
//   ]
// }`;
//
// schedule = JSON.parse(schedule, function(key, value) {
//   if (key === 'date') return new Date(value);
//   return value;
// });
//
// console.log( schedule.meetups[1].date.getDate() ); // works!
