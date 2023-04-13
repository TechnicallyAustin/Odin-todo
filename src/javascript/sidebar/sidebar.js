export function sidebar(){
    const header = document.querySelector(".header");

    const sideMenu = {
        menu: null,
        createMenu: function(){
            const createMenu = header.appendChild(document.createElement("div"))
            createMenu.setAttribute("class", "side-bar h-75 w-100 d-flex flex-column justify-content-start align-items-center bg-dark text-black pt-2");
            this.menu = createMenu
        },
        links: function(){
            const times = ["Today", "Upcoming", "Due", "Eventually"]
            const filters = []
            
            
            for (let time of times){
                let container = this.menu.appendChild(document.createElement("div"))
                container.setAttribute("class", "bg-info w-75 px-3")

                let menuItem = container.appendChild(document.createElement("p"))
                menuItem.setAttribute("class", "menu-links mb-0 w-100")
                menuItem.textContent = time

                let icon = container.appendChild(document.createElement("img"))
                //icon.setAttribute()
                //icon.setAttribute();
                //icon.setAttribute();
            }
        },
        completed: function(){},
    };

    sideMenu.createMenu()
    sideMenu.links()

}