// hide other navbar items when user clicks into search bar
function navSearchFocus() {
    var navItems = document.getElementById("hide-navbar-items");
    // var brandLogo = document.getElementById("hide-brand-logo");
    // var navBar = document.getElementById("navbar-two-custom");

    navItems.style.display = "none";
    // brandLogo.style.display = "none";
    // navBar.style.height = "64.8px";
}

// show other navbar items when user clicks out of search bar
function navSearchBlur() {
    var navItems = document.getElementById("hide-navbar-items");
    // var brandLogo = document.getElementById("hide-brand-logo");

    navItems.style.display = "";
    // brandLogo.style.display = "";
}
