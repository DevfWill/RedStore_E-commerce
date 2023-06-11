
var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = '0px';

function clickMenu(){
    if(MenuItems.style.maxHeight == '0px'){
        MenuItems.style.maxHeight = '300px'
    }
    else{
        MenuItems.style.maxHeight = '0px'
    }
}

