function addElementToArray(arr, element) {
    return [...arr, element]
}

// Przykład użycia
const originalArray = [1, 2, 3];
const newArray = addElementToArray(originalArray, 4);
console.log(originalArray); // [1, 2, 3]
console.log(newArray);      // [1, 2, 3, 4]

function createMultiplier(multiplier) {
    return (x) => x * multiplier;
}

// Przykład użycia
const double = createMultiplier(2);
console.log(double(5)); // 10

function compose(f, g) {
    return (x) => f(g(x));
}

// Przykład użycia
const addOne = x => x + 1;
const doubled = x => x * 2;
const addOneThenDouble = compose(doubled, addOne);

console.log(addOneThenDouble(5)); // 12


function curry(f) {
    return function curried(...args) {
        if (args.length >= f.length) {
            return f(...args);
        } else {
            return function (...nextArgs) {
                return curried(...args, ...nextArgs);
            };
        }
    };
}

// Przykład użycia
function add(a, b, c) {
    return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(4)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6


const curryAdd = a => b => a + b;
const curryMultiply = a => b => a * b;
const compo = (f, g) => x => f(g(x));

const add5 = curryAdd(5);
const multiply2 = curryMultiply(2);

const addThenMultiply = compo(multiply2, add5)
console.log(addThenMultiply(3))


console.log(curryAdd(1)(3));

function gcd(a, b) {
    if (a % b === 0) return b;
    return gcd(b, a % b);
}

console.log(gcd(322, 85));

function isPrime(a) {
    if (a % b === 0) return b;
    return gcd(b, a % b);
}


function throttle(fn, delay) {
    let flag = true;
    return function (...args) {
        if (flag) {
            fn(...args);
            flag = false;
            setTimeout(() => flag = true, delay);
        }

    }
}

function debounce(fn, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
    }
}