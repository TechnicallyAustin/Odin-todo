export function sideMenu(){
    const main = document.querySelector("main");
    const collapseContainer = main.appendChild(document.createElement("div"));
    collapseContainer.setAttribute("class", "collapsed bg-secondary w-25")

    const image = collapseContainer.appendChild(document.createElement("img"));
    image.setAttribute("class", "icon collapse-menu d-flex justify-content-center align-items-start m-0 p-0 w-100");
    image.setAttribute("src", "../src/assets/menu.svg")
    image.setAttribute("alt", "menu collapse icon");


    function toggle(){
        const small = "icon collapse-menu d-flex justify-content-center align-items-start m-0 p-0 w-25"
        const wide = "icon collapse-menu d-flex justify-content-center align-items-start m-0 p-0 w-100"
        const expand = "expanded bg-secondary w-100"
        const collapse = "collapsed bg-secodnary w-25"
        const menuSrc = "../src/assets/side-nav.svg";
        const sideMenuSrc = "../src/assets/menu.svg";

        if (image.getAttribute("class") === small){
            collapseContainer.setAttribute("class", `${expand}`);
            image.setAttribute("src", `${sideMenuSrc}`);
            image.setAttribute("class", `${wide}`);
        } else if (image.getAttribute("class") === wide ) {
            collapseContainer.setAttribute("class", `${collapse}`);
            image.setAttribute("src", `${menuSrc}`);
            image.setAttribute("class", `${small}`);
        }
    };

    image.addEventListener("click", () => {
        toggle()
    });



};
