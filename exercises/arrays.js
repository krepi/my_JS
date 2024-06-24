function getCountedElements(arr) {
    return arr.reduce((counted, current) => {
        counted[current] ? counted[current] += 1 : counted[current] = 1;
        return counted;
    }, {})
}
function doubleArrayElements(arr) {
    return arr.map(element => element * 2)
}
const arrayToCount = [1, 2, 3, 4, 5, 6, 4, 3, 5, 4];
const doubled = arrayToCount.map(element => element * 2);


console.log(getCountedElements(arrayToCount));
console.log(doubleArrayElements(arrayToCount));
console.log(doubled);

