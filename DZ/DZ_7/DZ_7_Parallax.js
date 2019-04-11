window.onload = function() {

    //                                             parallax


    var pic = document.getElementById("picture");

    onscroll = () => {

        pic.style.transform = `translateY(${pageYOffset/2}px)`;
    };
}