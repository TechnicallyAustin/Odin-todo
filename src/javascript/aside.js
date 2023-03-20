export function sidebar(){
    const main = document.querySelector(".main");

    const sideMenu = {
        menu: null,
        createMenu: function(){
            const createMenu = main.appendChild(document.createElement("aside"))
            createMenu.setAttribute("class", "");
        },
        today: function(){},
        week: function(){},
        month: function(){},
        completed: function(){},
    };

}