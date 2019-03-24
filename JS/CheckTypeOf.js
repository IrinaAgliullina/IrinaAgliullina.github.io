
// Урок 3. Циклы, массивы, структуры данных

/*
    Задача 1.
*/



/*
    Задача 2.

    С помощью цикла do…while написать функцию для вывода чисел от 0 до 10, чтобы результат выглядел так:

    0 – это ноль
    1 – нечетное число
    2 – четное число
    3 – нечетное число
    …
    10 – четное число
*/

var the_number = 0;

do {

    if(the_number === 0) {
        console.log(the_number + " - это ноль");

    } else if(the_number % 2 === 0) {
        console.log(the_number + " - это четное число");

    } else {
        console.log(the_number + " - это нечетное число");
    }

    the_number += 1;

} while(the_number <= 10);



console.log("\n");

/*  Задача 3*.

    Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла. То есть выглядеть должно вот так:

    for(…){// здесь пусто}
*/

for (var i = 0; i <= 9; console.log(i++) ) {};



console.log("\n");

/*
    Задача 4*.

    Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

    x
    xx
    xxx
    xxxx
    xxxxx
*/

var pyramid = "x";

for(var i = 1; i <= 20; i += 1) {

    console.log(pyramid);

    pyramid += "x";
}



console.log("\n");

/*
    Задача с добавлением элемента в середину массива.
*/

var array = [1, 1, 1, 1];

if(array.length % 2 === 0) {
    array.splice(array.length / 2, 0, "середина массива");

} else {
    array.splice( (array.length / 2) + 0.5, 0, "середина массива");
}

console.log(array);



// Типы данных

/*

var a = 7;
alert("var a = 7, тип данных : " + typeof a); // number

var b = "Строка";
alert("var b = \"Строка\", тип данных : " + typeof b); // string

var c = {color1: "red", color2: "white"};
alert("var c = {color1: red, color2: white}, тип данных : " + typeof c); // object

var d = null;
alert("var d = null, результат alert (d) : " + d); // alert(d) - null
alert("var d = null, результат alert (typeof d) : " + typeof d); // alert(typeof d) - object

var e = true;
alert("var e = true, тип данных : " + typeof e); // boolean

var f;
alert("var f, тип данных : " + typeof f); //undefined

*/



// Практикум: игра "Угадай число"

/*
function getRandom(min, max) {
    return Math.floor(Math.random()*11);
}

var secretNumber = getRandom(0, 10);
var i = 0;
var usersAnswer = prompt("Угадайте число: ", "Целое число от 0 до 10");

while(usersAnswer != secretNumber) {
    if(usersAnswer > secretNumber) {
        usersAnswer = prompt("Загадайте число поменьше:", "Целое число");
        i = i + 1;
    } else if (usersAnswer < secretNumber) {
        usersAnswer = prompt("Загадайте число побольше:", "Целое число");
        i = i + 1;
    }
}
i = i + 1;

alert("Вы угадали с " + i + " попыток, это число " + usersAnswer);
*/