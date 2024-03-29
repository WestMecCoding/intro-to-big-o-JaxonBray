const someStr = "the string of my choice";

function namedFunction(str) {

    str = str.split("").reverse().join("");
    return str;
}

console.log(namedFunction(someStr));