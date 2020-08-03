"use strict";

const obj = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

// obj.makeTest();

// const {border, bg} = obj.colors;
// console.log(border, bg);

// delete obj.name;
// console.log(obj);

// for (let key in obj) {
//     if (typeof(obj[key]) === 'object') {
//         for (let i in obj[key]) {
//             console.log(`Ключ ${i} має значення ${obj[key][i]}`);        
//         }
//     } else {
//         console.log(`Ключ ${key} має значення ${obj[key]}`);
//     }
// }

// console.log(Object.keys(obj).length);

