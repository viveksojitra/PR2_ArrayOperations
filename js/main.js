// Q1
var myColor = ["Red", "Green", "White", "Black"];

document.getElementById("q1-op1").innerHTML = "Output 1: " + myColor;
document.getElementById("q1-op2").innerHTML = "Output 2: " + myColor.join('+');

myColor.pop();
document.getElementById("q1-op3").innerHTML = "Output 3: " + myColor;

myColor.push();
document.getElementById("q1-op4").innerHTML = "Output 4: " + myColor.shift(0);

myColor.unshift();
document.getElementById("q1-op5").innerHTML = "Output 5: " + myColor;
myColor.unshift('Red');

myColor.push('Orange');
document.getElementById("q1-op6").innerHTML = "Output 6: " + myColor;

// Q2
// For Loop
var arrSum = [11, 22, 33, 44, 55];
var sum = 0;

for (var i = 0; i < arrSum.length; i++) {
    sum = sum + arrSum[i];
};
document.getElementById('sum_1').innerHTML = (`For Loop : sum of [ ${arrSum} ] is ${sum}`);

// Q3
var arr = [11, 22, 33, 444, 55];

const minMax = (array) => {

    var max = array[0];
    var min = array[0];

    for (var i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
        if (array[i] < min) {
            min = array[i];
        }
    }

    document.getElementById('min_value').innerHTML = (`Minimum value : ${min}`);
    document.getElementById('max_value').innerHTML = (`Maximum value : ${max}`);
}
minMax(arr);

// Q4
var arr = ["S", "C", "R", "I", "P", "T"];

function convertToAscii(array) {

    var asciiArray = [];

    for (var i = 0; i < array.length; i++) {

        var asciiValue = array[i].charCodeAt(0);
        asciiArray.push(asciiValue);

    }

    return asciiArray;
}
var asciiValue = convertToAscii(arr);
document.getElementById('values').innerHTML = (arr);
document.getElementById('ascii_values').innerHTML = (asciiValue);

// Q5
var number = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];

var negative = number.filter(function (number) {

    return number >= 0;

});
document.getElementById('negative').innerHTML = (negative);

// Q6
var arr = [2, 5, 6, 3, 8, 9];

var sq = arr.map(function (element) {

    return arr = element * element;

});
document.getElementById('square').innerHTML = (sq);

// Q7
// Values
var arr = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];

var aesOrder = arr.slice().sort(function (a, b) {

    return a - b;

});
document.getElementById('ascending_values').innerHTML = (aesOrder);

var desOrder = arr.slice().sort(function (a, b) {

    return b - a;

});
document.getElementById('descending_values').innerHTML = (desOrder);

// Elements
var arr = ["Red", "Green", "White", "Black"];

var aesOrder1 = arr.slice().sort();
document.getElementById('ascending_element').innerHTML = (aesOrder1);

var desOrder2 = arr.slice().sort(function (a, b) {

    return b.localeCompare(a);

});
document.getElementById('descending_element').innerHTML = (desOrder2);

// Q8
var arr = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];

var char = arr.filter(function (arr) {

    return arr.length >= 8;

});
document.getElementById('string').innerHTML = (char);

// Q9
// [ r ]
var x = "airplane";

var word = x[2];
document.getElementById('character').innerHTML = (word);

// [ oXoXoXoX ]
var x = "oxoxoxox";
var arr = " ";

for (i = 0; i < x.length; i++) {

    if (i % 2 == 0) {
        arr += x[i].toLowerCase();
    }
    else {
        arr += x[i].toUpperCase();
    }

};
document.getElementById('upplow').innerHTML = (arr);

// [ A NEW JAVA BOOK ]
var x = "A New Java Book";

var no1 = x.toUpperCase();
document.getElementById('uppercase').innerHTML = (no1);

// Q10
var arr = [1, 2, 3, 4, 5];
arr.reverse();
document.getElementById('reverse').innerHTML = (arr);

// Q11
var arr = ['Hello','Greetings','Have','a','Nice','Day'];

var Value = arr.includes('Greetings');

if (Value) {
    document.getElementById('true').innerHTML = ('Array has the value.');
}
else {
    document.getElementById('false').innerHTML = ('Array does not have the value.');
}

// Q12
var name = "Hello, Good Morning";
var length = name.length;

document.getElementById('length').innerHTML = (length);

// Q13
var dogStr = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";

var stringJoin = dogStr.replace(/dog/g, 'cat');
document.getElementById('catStr').innerHTML = (stringJoin);

// Q14
var string = "Hire the top 1% freelance developers";

var arrayString = string.split(" ");
document.getElementById('to_array').innerHTML = (arrayString);

// Q15
var array = ['5', 32, 'Daniel'];

var multiType = array.join(',');
document.getElementById('dynamic').innerHTML = (multiType);