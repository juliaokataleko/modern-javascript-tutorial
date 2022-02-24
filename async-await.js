const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

async function getTop100Campers() {
    const response = await fetch(apiUrl);
    const json = await response.json();

    console.log(json[0]);
}

// function getTop100Campers() {
//     fetch(apiUrl)
//         .then((r) => r.json())
//         .then((json) => {
//             console.log(json[0]);
//         })
//         .catch((err) => {
//             console.log("failed...");
//         })
// }

getTop100Campers()

// challenge

function resolveAfter3Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Resolved');
        }, 3000)
    })
}

// resolveAfter3Seconds().then((data) => {
//     console.log(data);
// })

async function getAsyncData() {
    console.log("Calma ainda...");
    const result = await resolveAfter3Seconds();
    console.log(result);
}

getAsyncData();