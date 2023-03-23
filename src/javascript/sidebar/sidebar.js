export function sidebar(){
    const main = document.querySelector(".main");

    const sideMenu = {
        menu: null,
        createMenu: function(){
            const createMenu = main.appendChild(document.createElement("div"))
            createMenu.setAttribute("class", "side-bar d-flex flex-column justify-content-start align-items-center bg-secondary text-black pt-2");
            this. menu = createMenu
        },
        links: function(){
            const today = main.appendChild(document.createElement("p"));
            today.setAttribute("class", "list-unstyled");
            const titles = ["Today", "Week", "Month", "Groups"]

            for (let title of titles){
                let menuItem = this.menu.appendChild(document.createElement("p"))
                menuItem.setAttribute("class", "menu-links mb-0 w-75")
                menuItem.textContent = title
            }
        },
        completed: function(){},
    };

    sideMenu.createMenu()
    sideMenu.links()

}