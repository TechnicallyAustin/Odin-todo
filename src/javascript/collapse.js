export function collapse(){
    const main = document.querySelector("main");
    const collapseContainer = main.appendChild(document.createElement("div"));
    collapseContainer.setAttribute("class", "collapsed bg-light w-25")

    const image = collapseContainer.appendChild(document.createElement("img"));
    image.setAttribute("class", "icon collapse-menu d-flex justify-content-center align-items-start m-0 ms-2 p-0");
    image.setAttribute("src", "../src/assets/side-nav.svg")
    image.setAttribute("alt", "menu collapse icon");


    function toggle(){
        const expand = "expanded bg-secondary w-100"
        const collapse = "collapsed bg-light w-25"
        const menuSrc = "../src/assets/side-nav.svg";
        const sideMenuSrc = "../src/assets/menu.svg";

        if (collapseContainer.getAttribute("class") === collapse){
            console.log(" was small")
            collapseContainer.setAttribute("class", `${expand}`);
            image.setAttribute("src", `${sideMenuSrc}`);
        } else if (collapseContainer.getAttribute("class") === expand ) {
            console.log(" was wide")
            collapseContainer.setAttribute("class", `${collapse}`);
            image.setAttribute("src", `${menuSrc}`);
        }
    };

    image.addEventListener("click", () => {
        toggle()
    });
};
