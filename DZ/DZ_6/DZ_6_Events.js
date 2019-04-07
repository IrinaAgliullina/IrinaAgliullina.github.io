// ДЗ 6 -- События



window.onload = function funEvents() {



    //                                          Открытие-закрытие меню



    var menuButton = document.getElementById("menu-btn");
    var menuActive = document.getElementById("menu");
    var divContent = document.getElementById("content");

    function Menu() {

        menuActive.classList.toggle("active");

    }

    function closeMenu() {

        menuActive.classList.remove("active");
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
}