// hide other navbar items when user clicks into search bar
function navSearchFocus() {
    var navItems = document.getElementById("navbar-items");
    navItems.style.display = "none";
}

// show other navbar items when user clicks out of search bar
function navSearchBlur() {
    var navItems = document.getElementById("navbar-items");
    navItems.style.display = "";
}