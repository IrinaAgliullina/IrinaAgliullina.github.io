
                              // Урок 3. Циклы, массивы, структуры данных

console.log("ДЗ_3: Циклы, массивы, структуры данных.");
console.log("\n");
console.log("\n");

console.log("Задача 1: Простые числа");
console.log("\n");

function simple(simpleNumber) {

    if(simpleNumber < 2) { // Проверка нужна, чтобы число было не меньше 2.
        return false;
    }

    var i = 2;

    while(i < simpleNumber) {

        if(simpleNumber % i === 0) {
            return false;
        }

        i += 1;
    }

    return true;
}

function getNumber(max) {

    var i = 0;
    var list = [];

    while( i <= max) {

        if(simple(i) ) {
            list.push(i);
        }

        i += 1;
    }

    return list;
}

console.log(getNumber(100) );


console.log("\n");
console.log("\n");

console.log("Задача 2: С помощью цикла do…while написать функцию для вывода чисел от 0 до 10.");
console.log("\n");
                                               //Задача 2.

//С помощью цикла do…while написать функцию для вывода чисел от 0 до 10, чтобы результат выглядел так:

//0 – это ноль
//1 – нечетное число
//2 – четное число
//3 – нечетное число
//…
//10 – четное число



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
console.log("\n");

console.log("Задача 3: Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла.");
console.log("\n");


                                                    //Задача 3*.

//Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла. То есть выглядеть должно вот так:

//for(…){// здесь пусто}



for (var i = 0; i <= 9; console.log(i++) ) {};


console.log("\n");
console.log("\n");

console.log("Задача 4: Пирамида.");
console.log("\n");

                                                   //Задача 4*.

//Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

//x
//xx
//xxx
//xxxx
//xxxxx



var pyramid = "x";

for(var i = 1; i <= 20; i += 1) {

    console.log(pyramid);

    pyramid += "x";
}


console.log("\n");
console.log("\n");

console.log("Задача 5: добавить элемент в середину массива");
console.log("\n");


                                 //Задача с добавлением элемента в середину массива.


var array = [1, 1, 1, 1];

if(array.length % 2 === 0) {
    array.splice(array.length / 2, 0, "середина массива");

} else {
    array.splice( (array.length / 2) + 0.5, 0, "середина массива");
}

console.log(array);


console.log("\n");