//  function adding(x, y){
//      return x+y;
//  }

//  let result = adding(10, 2);
//  console.log(result);

///////////////////////////////////////////////////////////

//  function concat(str1, str2){
//     return str1+str2;
// }

// let result = concat("hi ", "hello");
// console.log(result);

//////////////////////////////////////////////////////////////

// function twostrings(s1, s2){
//      return `some ${s1} strings ${s2}`;
// }
// console.log(twostrings ("other", "strings"));

/////////////////////////////////////////////////////////////

// let myobj ={
//     first:1,
//     second:2,
//     third:3,
// };

// let accessname = "second";

// console.log(myobj[accessname]);

////////////////////////////////////////////////////////////

// let app = document.querySelector("#app");

// app.innerHTML "something else";

//////////////////////////////////////////////////////////////
let obj=[
    {
        name:"dog",
        legs:4,
    },
    {
        name:"human",
        legs:2,
    },
    {
        name:"spider",
        legs:8,
    },
];

function addobj(localobject){
    localobject.forEach((element) => {
        element.head =1;
    });
    return localobject;
}

 let result = addobj(obj);
 console.log(result);

function less (localobject){
    let arr = [];
    localobject.forEach((element) => {
        if (element.legs >5)
            arr.push(element);
    });
    return arr;
}
let result2 = less(obj);
console.log(result2);
