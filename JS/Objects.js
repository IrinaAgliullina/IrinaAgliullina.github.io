// Объекты

/* ДЗ 1:
   Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы
   должны получить на выходе объект, в котором в соответствующих свойствах описаны
   единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект:
   {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать
   соответствующее сообщение с помощью console.log и вернуть пустой объект.*/

var theNumber = 1000;

var theObject = {};

function expandNumber(theNumber) {

    if(theNumber > 999) {
        console.log("Число больше 999");
        return theObject;
    }

    var x = theNumber / 100;
    var hundreds = Math.trunc(x);

    var y = (x - hundreds) * 10;
    var tens = Math.trunc(y);

    var z = (y - tens) * 10;
    var units = Math.round(z);

    theObject.hundreds = hundreds;
    theObject.tens = tens;
    theObject.units = units;

    return theObject;
}

console.log(expandNumber(theNumber) );



/* ДЗ 2:
   Копирование и изменение объектов: bodypositive. */

var menu = [
    {
        fruits: "mango",
        vegetables: "tomato",
        cheese: "Chedder"
    },

    {
        fruits: "mango",
        vegetables: "tomato",
        cheese: "Chedder"
    },

    {
        fruits: "mango",
        vegetables: "tomato",
        cheese: "Chedder"
    }
];

var menu2 = JSON.parse(JSON.stringify(menu) );

menu2[0].bodypositive = true;

console.log(menu);
console.log(menu2);
