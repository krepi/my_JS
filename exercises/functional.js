
function addElementToArray(arr, element) {
    return [...arr,element]
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
    return (x)=> f(g(x));
}

// Przykład użycia
const addOne = x => x + 1;
const doubled = x => x * 2;
const addOneThenDouble = compose(doubled, addOne);

console.log(addOneThenDouble(5)); // 12
