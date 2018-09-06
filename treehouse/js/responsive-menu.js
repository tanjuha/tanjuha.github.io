function responsiveFunctionNavBar() {
    var menu = document.getElementById("m-menu");
    var mainMenu =document.getElementById("m-menu-block");
    if(menu.className === "m-menu"){
        menu.className += " menu-open";
       mainMenu.className  += " m-menu-block-open";
    }else {
        menu.className = "m-menu";
        mainMenu.className = "m-menu-block";
    }
}
function responsiveLink() {
    var menu = document.getElementById("m-menu");
    var mainMenu =document.getElementById("m-menu-block");
    if(menu.className === "m-menu"){
        menu.className += " menu-open";
        mainMenu.className  += " m-menu-block-open";
    }else {
        menu.className = "m-menu";
        mainMenu.className = "m-menu-block";
    }
}