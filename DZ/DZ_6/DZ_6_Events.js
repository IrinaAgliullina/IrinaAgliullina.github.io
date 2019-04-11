// ДЗ 6 -- События



window.onload = function funEvents() {



    //                                          Открытие-закрытие меню



    var menuButton = document.getElementById("menu-btn");
    var menuActive = document.getElementById("menu");
    var divContent = document.getElementById("content");
    var shadow = document.getElementById("shadow");

    function Menu() {

        menuActive.classList.toggle("active");
        shadow.classList.toggle("active");
    }

    function closeMenu() {

        menuActive.classList.remove("active");
        shadow.classList.remove("active");
    }

    menuButton.addEventListener("click", Menu);
    divContent.addEventListener("click", closeMenu);





    //                                              Модальное окно



    var modalW = document.getElementById("modalW");
    var closeModalButton = document.getElementById("closeModalW");

    function closeMW() {
        modalW.classList.remove("active");
    }

    closeModalButton.addEventListener("click", closeMW);

    onscroll = () => {

        if(pageYOffset >= 400 && pageYOffset <= 430) {

            modalW.classList.add("active");
        }
    }



    //                                                Крестики-Нолики


    var a = [];
    var block = document.getElementById("Square");
    var i = 0;

    for(var k = 1; k<=9; k+=1) {
        a[k] = document . createElement ( "div" );
        a[k].className = "ggg";
        block.appendChild(a[k]);
    }

    block.addEventListener("click", function(event){

        function checkWinner() {

            var all = document.getElementsByClassName("ggg");

            if(all[0].innerHTML === "x" && all[1].innerHTML === "x" && all[2].innerHTML === "x") {return alert("X wins");}
            if(all[3].innerHTML === "x" && all[4].innerHTML === "x" && all[5].innerHTML === "x") {return alert("X wins");}
            if(all[6].innerHTML === "x" && all[7].innerHTML === "x" && all[8].innerHTML === "x") {return alert("X wins");}
            if(all[0].innerHTML === "x" && all[4].innerHTML === "x" && all[8].innerHTML === "x") {return alert("X wins");}
            if(all[2].innerHTML === "x" && all[4].innerHTML === "x" && all[6].innerHTML === "x") {return alert("X wins");}

            if(all[0].innerHTML === "o" && all[1].innerHTML === "o" && all[2].innerHTML === "o") {return alert("O wins");}
            if(all[3].innerHTML === "o" && all[4].innerHTML === "o" && all[5].innerHTML === "o") {return alert("O wins");}
            if(all[6].innerHTML === "o" && all[7].innerHTML === "o" && all[8].innerHTML === "o") {return alert("O wins");}
            if(all[0].innerHTML === "o" && all[4].innerHTML === "o" && all[8].innerHTML === "o") {return alert("O wins");}
            if(all[2].innerHTML === "o" && all[4].innerHTML === "o" && all[6].innerHTML === "o") {return alert("O wins");}
        }

        i += 1;

        if(event.target.className === "ggg") {

            if(i % 2 !== 0) {

                event.target.innerHTML = "x";

            } else if(i % 2 === 0) {

                event.target.innerHTML = "o";
            }

        }
        checkWinner();
    });


} // onload









