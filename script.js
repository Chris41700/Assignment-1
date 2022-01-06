//Christopher Hui
//TTP Assignment 1

//myEach Function
let arr = [3, 5, 8, 3, 6, 7]

let myEach = (arr, callback) => {
    for (let i = 0; i < arr.length; i++)
        callback(arr[i], i);
}

let printElements = (item, index, arr) => console.log("arr[" + index + "] = " + item);

myEach(arr, printElements);

//myMap Function
let music = [{genre: "rock", ranking: 1}, {genre: "pop", ranking: 2}, {genre: "country", ranking: 3}];
let music2 = [];

let myMap = (arr, callback) => {
    for(let i = 0; i < arr.length; i++)
        music2[i] = callback(arr[i].genre);
}

let printMap = (item, index, arr) => {return item};

myMap(music, printMap);
console.log(music2);

//myFilter Function
let words = ["pain", "suffering", "123456", "computer", "mouse", "data_structures"];
let words2 = [];

let counter = 0;

let myFilter = (arr, callback) => {
    for (let i = 0; i < words.length; i++) { 
        if (words[i].length >= words.length) {
            words2[counter] = callback(arr[i]);
            counter++;
        }
    }
}

let filterWords = (item, index, arr) => {return item};

myFilter(words, filterWords);
console.log(words2);

//mySome Function
let num = [1, 7, 3, 8, 9]

let mySome = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i]) % 2 == 0)
            return true;
    }

    return false;
} 

let evenNum = (item, index, arr) => {return item};

console.log(mySome(num, evenNum));

//myEvery Function
let num2 = [4, 6, 8, 1, 2];

let isEvery= (arr, callback) => {
    for(let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }

    return false;
}

let big = (element, index, arr) => {
    if(element < 10)
        return true;
}

console.log(isEvery(num2, big));

//myReduce Function
const numbers = [2, 2, 1, 2, 3];
let sum = 0;

let myReduce = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) 
        sum += callback(arr[i]);

    return sum;
}

let reducer = (element, index, arr) => {return element};

console.log(myReduce(numbers, reducer));

//myIncludes Function
const values = [5, 45, 23, 87, 64];
target = 87;

let myIncludes = (arr, callback) => {
    for (let i = 0; i < arr.length; i++)
        if (callback(arr[i]) == target)
            return true;

    return false;
}

let included = (element, index, arr) => {return element};

console.log(myIncludes(values, included));

//myIndexOf Function
const insects = ["ants", "spiders", "beetle", "fly", "ants"];

let myIndexOf = (target, index, arr) => {
    for (let i = index; i < arr.length; i++) {
        if(arr[i] == target)
            return i
    }

    return -1;
}

console.log(myIndexOf("ants", 1, insects));

//myPush Function
const numbers2 = [3, 6, 23, 65, 22];

let myPush = (elementToAdd, arr) => {
    numbers2[numbers2.length] = elementToAdd;
    return numbers2;
}

console.log(myPush(4));
console.log(myPush(27));

//myUnshift Function
let sentence = "This assignment caused me pain and suffering";

let myUnshift = (target, arr) => {
    for (let i = arr.length; i > 0; i--) {
        if (arr[i] == target)
            return i;
    }

    return -1;
}

console.log(myUnshift('s', sentence));

//grabKeys Function
const obj= {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd'
}

let keys = [];
let counter2 = 0;

let grabKeys = () => {
    for (let x in obj) {
        keys[counter2] = x;
        counter2++;
    }

    return keys
}

console.log(grabKeys(keys));

//grabValues function
const obj2 = {
    0: '6',
    1: '3',
    2: '9',
    3: '0'
};

let values2 = [];
let counter3 = 0;

let grabValues = () => {
    for (let x in obj2) {
        values2[counter3] = obj2[x];
        counter3++;
    }

    return values2;
}

console.log(grabValues(values2));