
                                            // DOM - Шахматы

/*
    1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые
    html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е.
    чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы
    – латинскими буквами A, B, C, D, E, F, G, H.

    2. Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К-
    король, Ф – ферзь и тп., причем все фигуры должны стоять на своих местах и быть
    соответственно черными и белыми.

    3. * Заменить буквы, обозначающие фигуры картинками.*/


window.onload = function funChess() {

    var Chess = document . getElementById ( "Chess" );

    function Empty() {

        var Empty = document . createElement ( "div" );
        Empty . className = "Empty";
        Chess.appendChild(Empty);
    }

    function Letters () {

        var Bykvy = ["A", "B", "C", "D", "E", "F", "G", "H"];
        var Letters = document . createElement ( "div" );
        Letters . className = "Letters";
        Chess.appendChild(Letters);
        Letters . innerHTML = Bykvy[o];
    }

    Empty();

    for (var o = 0; o <= 7; o += 1) {
        Letters();
    }

    Empty();



    function divs (divsClassName, picsClassName) {

        var divs = document . createElement ( "div" );
        divs . className = divsClassName;

        var pics = document . createElement ( "div" );
        pics . className = picsClassName;

        Chess.appendChild(divs);
        divs.appendChild(pics);
    }

    function Numbers (cyfra) {

        var Numbers = document . createElement ( "div" );
        Numbers . className = "Numbers";
        Numbers.innerHTML = cyfra;
        Chess.appendChild(Numbers);
    }

    for (var i = 8; i >= 1; i -= 1) {

        if(i % 2 === 0){

            if(i === 2) {

                Numbers(i);

                for (var m = 1; m <= 4; m += 1) {

                    divs("Black", "WhitePeshka");
                    divs("White", "WhitePeshka");

                }

                Numbers(i);

            } else if(i === 8){

                Numbers(i);

                divs("Black", "BlackLadya");
                divs("White", "BlackHorse");
                divs("Black", "BlackElephant");
                divs("White", "BlackKing");
                divs("Black", "BlackFerz");
                divs("White", "BlackElephant");
                divs("Black", "BlackHorse");
                divs("White", "BlackLadya");

                Numbers(i);

            } else {

                Numbers(i);

                for (m = 1; m <= 4; m += 1) {

                    divs("Black");
                    divs("White");
                }

                Numbers(i);
            }

        } else {


            if(i === 7) {

                Numbers(i);

                for (m = 1; m <= 4; m += 1) {

                    divs("White", "BlackPeshka");
                    divs("Black", "BlackPeshka");
                }

                Numbers(i);

            } else if(i === 1) {

                Numbers(i);

                divs("White", "WhiteLadya");
                divs("Black", "WhiteHorse");
                divs("White", "WhiteElephant");
                divs("Black", "WhiteKing");
                divs("White", "WhiteFerz");
                divs("Black", "WhiteElephant");
                divs("White", "WhiteHorse");
                divs("Black", "WhiteLadya");

                Numbers(i);

            } else {

                Numbers(i);

                for (m = 1; m <= 4; m += 1) {

                    divs("White");
                    divs("Black");
                }

                Numbers(i);
            }
        }
    }

    Empty();

    for (o = 0; o <= 7; o += 1) {
        Letters();
    }

    Empty();
}


