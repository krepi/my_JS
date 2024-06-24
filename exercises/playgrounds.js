function createCounter() {
    let counter = 0;
    return function () {
        return ++counter;
    };
}

function filterArray(arr, clb) {
    const arr2 = [];
    arr.forEach(a => {
        if (clb(a)) arr2.push(a);
    });
    return arr2
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arr2 = filterArray(array, (a) => a % 2 === 0);

console.log(arr2);
const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


function isPrime(num) {
    if (num <= 1) return false; // Liczby <= 1 nie są pierwsze
    if (num <= 3) return true; // 2 i 3 są pierwsze
    if (num % 2 === 0 || num % 3 === 0) return false; // Odrzucenie liczb podzielnych przez 2 lub 3

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false; // Sprawdzanie podzielności przez i oraz i+2
        }
    }
    return true;
}

// Przykład użycia
console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(17)); // true
console.log(isPrime(18)); // false
console.log(isPrime(19)); // true
