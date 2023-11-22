let burger_menu = document.querySelector(".burger-menu"); //элемент с классом burger-menu
let menu = document.querySelector(".nav-ul"); //элемент с классом nav-ul

burger_menu.addEventListener("click", () => { //по клику на burger-menu
    burger_menu.classList.toggle("burger-menu-close");
    menu.classList.toggle("nav-ul-show"); //добавить к элементу nav-ul класс nav-ul-show, если его нет и убрать класс, если он есть
    document.querySelector("body").classList.toggle("no-scroll");
})
