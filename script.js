
const apiPromise = fetch("https://grandcircusco.github.io/demo-apis/donuts.json")
    .then((res) => res.json());

//1
apiPromise.then(data => {
    console.log(data);
});

//2
apiPromise.then(data => {
    console.log(data.count);
});

//3
const countPromise = apiPromise.then(data => {
    return data.count;
});

countPromise.then(data => {
    console.log(data);
});

//4
const top4Promise = apiPromise.then(data => {
    let top4 = [];
    for ( let i = 0; i <= 3; i++) {
        top4.push(data.results[i]);
    }
    return top4;
});

top4Promise.then(data => {
    console.log(data);
})

//5
const namesPromise = apiPromise.then(data => {
    let names = [];
    for ( i = 0; i < data.results.length; i++) {
        names.push(data.results[i].name);
    }
    return names;
});

namesPromise.then(data => {
    console.log(data);
});

//6
const capNamesPromise = namesPromise.then(data =>{
    let upper = [];
    for ( let i = 0; i < data.length; i++) {
        upper.push(data[i].toUpperCase());
    }
    return upper;
})
capNamesPromise.then(data => {
    console.log(data);
})

//7
let badPromise = fetch("https://grandcircusco.github.io/demo-apis/wrong.json")
.then(res => res.json())
.then(data => {
    console.log("hello")
}) 
.catch(error => {
    console.log("FAILED", error);
});



