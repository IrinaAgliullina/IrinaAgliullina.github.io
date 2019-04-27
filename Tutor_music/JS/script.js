window.onload = function () {


    //                                  Модальное окно "Свяжитесь со мной"


    var modalWindow = document.getElementById('modalWindow');
    var contactButton = document.getElementById('contactButton');
    var cross = document.getElementById('cross');

    function show_hide_ModalWindow() {

        modalWindow.classList.toggle('active');
    }

    contactButton.addEventListener('click', show_hide_ModalWindow);

    cross.addEventListener('click', show_hide_ModalWindow);




    //                                           Кнопка "Вверх"


    var upButton = document.getElementById('upButton');


    // показать-скрыть кнопку:

    function showUpButton(e) {

        if(e === 'yes') {

            upButton.classList.add('active');
        }

        if(e === 'no') {

            upButton.classList.remove('active');
        }
    }



    //                                      скролл к началу страницы:

    function scrollTopPage() {

        document.documentElement.scrollTop = 0;
    }

    upButton.addEventListener('click', scrollTopPage);


    //                                              Параллакс

    var block1 = document.getElementById('container_1');

    onscroll = () => {

        if (window.matchMedia("(min-width: 999px)").matches) {

            block1.style.transform = `translateY( ${pageYOffset / 2}px )`;

            block1.style.filter = `blur( ${pageYOffset / 250}px )`;

            // ****кнопка "Вверх"****

            if(pageYOffset >= 400) {

                showUpButton('yes');

            } else {

                showUpButton('no');
            }

            // ****кнопка "Вверх"****
        }
    }

//window.onload
}