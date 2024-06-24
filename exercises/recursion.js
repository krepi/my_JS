function factorial(val) {
    if (val <= 1) return 1;

    return val * factorial(val - 1);
}

console.log(factorial(5));

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 1);
}

console.log(fibonacci(4));

function sumArray(arr) {
    function summing(index) {
        if (index >= arr.length) {
            return 0;
        }
        return arr[index] + summing(index + 1);
    }

    return summing(0);
}

// Przykład użycia
const numbers2 = [1, 2, 3, 4, 5];
console.log(sumArray(numbers2)); // 15


// Przykład użycia
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // 15

function reverseString(str) {
    // if (str === "") return str;
    // return str.at(str.length - 1) + reverseString(str.slice(0, -1));
    return str.split('').reverse().join('');
}

// Przykład użycia
console.log(reverseString("hello")); // "olleh"

function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str.at(0) !== str.at(-1)) return false;
    return isPalindrome(str.slice(1, -1));
}

// Przykład użycia
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false

function power(base, exponent) {
    if (exponent === 0) return 1
    return base * power(base, exponent - 1);
}

// Przykład użycia
console.log(power(4, 3)); // 8
console.log(power(5, 0)); // 1

function countDigits(number) {
    if (number / 10 < 1) return 1;
    return 1 + countDigits(number / 10);
}

// Przykład użycia
console.log(countDigits(12345)); // 5
console.log(countDigits(7)); // 1

// function gcd(a, b) {
//     let divider = 1;
//     ( function rec(val){
//        if(a%val === 0 && b%val === 0) divider = val;
//        if(val === a || val === b) return divider;
//        rec(val+1)
//     })(1);
//     return divider;
// }
function gcd(a, b) {
    if (a % b === 0) return b;

    return gcd(b, a % b);
}

// function mother(){
//     let counter = 0;
//     return function gcd (a,b){
//         counter++;
//         console.log("wywolanie nr ", counter);
//         if (a % b === 0) return b;
//         return gcd(b, a % b);
//     };
// }
// const gcdWithCounter = mother();
//
// // Przykład użycia
// console.log(gcd(48, 18)); // 6
// console.log(gcdWithCounter(48, 18));
// console.log(gcd(7, 3)); // 1
function mother(callback) {
    let counter = 0;

    function wrappedCallback(...args) {
        counter++;
        console.log("Wywołanie nr", counter);
        return callback(...args);
    }

    return wrappedCallback;
}

const originalGcd = function gcd(a, b) {
    if (a % b === 0) return b;
    return gcd(b, a % b);
};

const gcdWithCounter = mother(originalGcd);

// Przykład użycia
console.log("GCD(48, 18):", gcdWithCounter(48, 18)); // Wywołanie nr X, wynik 6
console.log("GCD(7, 3):", gcdWithCounter(7, 3)); // Wywołanie nr X, wynik 1

const arrayFilled = Array.from({length: 5}).fill(0);

console.log("Array Filled:", arrayFilled);