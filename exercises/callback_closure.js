function counter() {
    let counter = 0;
    return () => counter++;
}

// const count = counter();
// console.log(count())
// console.log(count())
// console.log(count())
// console.log(count())
// console.log(count())

function filterArray(arr, clb) {
    const array = [];
    arr.forEach(item => {
        if (clb(item)) {
            array.push(item);
        }
    })
    return array;
}

const arrayToFilter = [1, 2, 3, 4, 5, 6];
const filteredArray = filterArray(arrayToFilter, (x) => x % 2 === 0);

console.log(filteredArray);

function memoize(fn){
    const memo = {};
    return function(...args) {
      const  key= JSON.stringify(args);
      console.log(key)
      if(memo[key]){
          console.log("from cache (closure memory)");
          return memo[key];
      } else {
          const result = fn(...args);
          console.log("from callback function invoke");
          memo[key] = result;
          return result;
      }
    }
}
// const add = memoize((a,b) => a + b);
// console.log(add(1,2));
// console.log(add(2,2));
// console.log(add(1,2));
// console.log(add(2,1));

function advancedCounter(){
    const counter = {
        value: 0,
        increment: function (){
            return ++counter.value;
        },
        decrement: function (){
            return --counter.value;
        },
        reset: function (){
            counter.value = 0;
            return counter.value;
        }

    }
    return counter;
}
const counterA = advancedCounter();
console.log(counterA.increment()); // 1
console.log(counterA.increment()); // 2
console.log(counterA.decrement()); // 2
console.log(counterA.reset()); // 2

function customMap(arr, callback) {
   // const array = Array.from({ length: arr.length }).fill(undefined);
   const array = [];
    for(let i = 0; i < arr.length; i++){
        array.push(callback(arr[i]));
        // array[i] = callback(arr[i]);
    }
    return array;
}

// Przykład użycia
const numbers = [1, 2, 3, 4, 5];
const doubled = customMap(numbers, num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Napisz funkcję createFunctionArray, która zwraca tablicę 5 funkcji. Każda z tych
// funkcji powinna zwracać swój indeks z tablicy.

function createFunctionArray() {
    const array = [];
    for(let i = 0; i < 10; i++){
        array.push(()=> i);
    }
    return array;
}

// Przykład użycia
const functions = createFunctionArray();
console.log(functions[0]()); // 0
console.log(functions[1]()); // 1
console.log(functions[2]()); // 2
console.log(functions[3]()); // 3
console.log(functions[4]()); // 4
// Zadanie 7: Ulepszony filtr z callbackiem
// Napisz funkcję filterWithIndex, która działa jak filterArray,
// ale callback otrzymuje również indeks jako drugi argument.

function filterWithIndex(arr, clb) {
    const array = [];
    arr.forEach((item,index) => {
        if (clb(item,index)) {
            array.push(item );
        }
    })
    return array;
}

// Przykład użycia
const numbers2 = [10, 20, 30, 40, 50];
const result = filterWithIndex(numbers2, (value, index) => index % 2 === 0);
console.log(result); // [10, 30, 50]