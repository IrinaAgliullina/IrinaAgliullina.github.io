
                                       // Практикум: игра "Угадай число"


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
