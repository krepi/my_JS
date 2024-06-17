//Promises
// function boilWater() {
//     console.log('Boil Water..');
//     return new Promise(resolve => setTimeout(resolve, 1000));
//
// }
//
// function makeATea() {
//     console.log('Preparing A Tea!..');
//     return new Promise(resolve => setTimeout(resolve, 2000));
//
// }
// function waitForATemp() {
//     console.log('Wait For ATemp...');
//     return new Promise(resolve => setTimeout(resolve, 3000));
//
// }
//
// boilWater()
//     .then(() => {
//         console.log('Water boiled');
//         return makeATea();
//     })
//     .then(() => {
//         console.log('Tea is made');
//         return waitForATemp();
//     })
//     .then(() => {
//         console.log('Temperatue is perfect - time to drink');
//     })

//Async Await


function boilWater() {
    console.log('Boil Water..');
    return new Promise(resolve => setTimeout(resolve, 1000));

}

function makeATea() {
    console.log('Preparing A Tea!..');
    return new Promise(resolve => setTimeout(resolve, 2000));

}

function waitForATemp() {
    console.log('Wait For ATemp...');
    return new Promise(resolve => setTimeout(resolve, 3000));

}

// (async () => {
//     await boilWater();
//     console.log('Water boiled');
//     await makeATea();
//     console.log('Tea is made');
//     await waitForATemp();
//     console.log('Temperature is perfect - time to drink');
// })();


function doMyjob(hours) {
    return new Promise((resolve, reject) => {
        if (hours > 6) {
            reject(new Error('zadlugie godziny pracy'));
        } else {
            setTimeout(() => {
                resolve();
            }, hours * 1000);
        }
    })

}

function pay() {
    return new Promise(resolve => resolve())
}

//
// doMyjob(3)
//     .then(() => {
//         console.log("all is good, ");
//         return pay()
//     })
//     .then(() => console.log('wyplata poszla'))
//     .catch(error => console.log("Blad!", error));


(async () => {
    try {
        await doMyjob(5);
        console.log('Done!');
        await pay();
        console.log('Wyplata poszla!');

    } catch (e) {
        console.log("Blad! ", e);
    }
})();