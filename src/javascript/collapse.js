import { group } from "./group.js";

export function collapse(){
    const main = document.querySelector("main");
    const collapseContainer = main.appendChild(document.createElement("div"));
    collapseContainer.setAttribute("class", "sidebar collapsed bg-light w-25")

    const image = collapseContainer.appendChild(document.createElement("img"));
    image.setAttribute("class", "icon collapse-menu d-flex justify-content-center align-items-start m-0 ms-2 p-0");
    image.setAttribute("src", "../src/assets/side-nav.svg")
    image.setAttribute("alt", "menu collapse icon");


    function toggle(){
        const expand = "sidebar expanded bg-dark bg-opacity-25 w-75"
        const collapse = "sidebar collapsed bg-light w-25"
        const menuSrc = "../src/assets/side-nav.svg";
        const sideMenuSrc = "../src/assets/menu.svg";
        const taskFilter = document.querySelector(".task-filter")

        if (collapseContainer.getAttribute("class") === collapse){
            console.log(" was small")
            collapseContainer.setAttribute("class", `${expand}`);
            image.setAttribute("src", `${sideMenuSrc}`);
            group()
        } else if (collapseContainer.getAttribute("class") === expand ) {
            console.log("was wide")
            collapseContainer.setAttribute("class", `${collapse}`);
            image.setAttribute("src", `${menuSrc}`);
            collapseContainer.removeChild(taskFilter)

        }
    };

    image.addEventListener("click", () => {
        toggle()
    });
};
