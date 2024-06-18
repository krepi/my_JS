function delayedMessage(message) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(message);
        }, 2000);
    })
}

// Przykład użycia
delayedMessage("Hello, world!").then((msg) => console.log(msg));

function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            // const data = "data received";
            resolve("data received")
        }, 3000)
    });
}

// Przykład użycia
fetchData().then((data) => {
    console.log(data); // Wyświetla "data received" po 1 sekundzie
})

function fetchDataWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("error occurred")
        }, 1000)
    });
}

// Przykład użycia
fetchDataWithError()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error); // Wyświetla "error occurred" po 1 sekundzie
    });


function fetchMultipleData(promises) {

    return Promise.all(promises)
}

// Przykład użycia
const promise1 = delayedMessage("Message 1");
const promise2 = delayedMessage("Message 2");

fetchMultipleData([promise1, promise2]).then((messages) => {
    console.log(messages); // Wyświetla ["Message 1", "Message 2"] po 2 sekundach
});
