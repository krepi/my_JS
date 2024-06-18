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


