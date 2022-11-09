var isMenuOpened = false;

function showHideMenu(x)
{
    var menu = document.getElementById('menu');

    isMenuOpened = !isMenuOpened;

    if (isMenuOpened)
    {
        x.classList.toggle("change");
        menu.classList.toggle("menu-list-active");
    }
    else
    {
        x.classList.toggle("change");
        menu.classList.toggle("menu-list-active");
    }
}