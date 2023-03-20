export function sidebar(){
    const main = document.querySelector(".main");

    const sideMenu = {
        menu: null,
        createMenu: function(){
            const createMenu = main.appendChild(document.createElement("div"))
            createMenu.setAttribute("class", "");
            this. menu = createMenu
        },
        links: function(){
            const today = main.appendChild(document.createElement("p"));
            today.setAttribute("class", "");
            const titles = ["Today", "Week", "Month", "Groups"]

            for (let title of titles){
                let menuItem = this.menu.appendChild(document.createElement("p"))
                menuItem.setAttribute("class", "menu-links text-white")
                menuItem.textContent = title
            }
        },
        completed: function(){},
    };

    sideMenu.createMenu()
    sideMenu.links()

}