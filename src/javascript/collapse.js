export function collapse(){
    const main = document.querySelector("main");
    const collapseContainer = main.appendChild(document.createElement("div"));
    collapseContainer.setAttribute("class", "collapsed bg-secondary w-25")

    const image = collapseContainer.appendChild(document.createElement("img"));
    image.setAttribute("class", "icon collapse-menu d-flex justify-content-center align-items-start m-0 p-0 w-100");
    image.setAttribute("src", "../src/assets/menu.svg")
    image.setAttribute("alt", "menu collapse icon");

    function toggle(){
        
        
    };
    image.addEventListener("click", () =>{
        if (image.getAttribute("class") )
        collapseContainer.setAttribute("class", "expanded bg-secondary w-100")
        image.setAttribute("src", "../src/assets/side-nav.svg")
        image.setAttribute("class", "icon collapse-menu d-flex justify-content-center align-items-start m-0 p-0 w-25");

    });

    expand()


};
