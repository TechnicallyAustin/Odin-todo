export function group(){
    const sidebar = document.querySelector(".sidebar")
    const containerSelector = document.querySelector(".task-filter");
    
    const container = sidebar.appendChild(document.createElement("div"));
    container.setAttribute("class", "task-filter container justify-content-around align-items-center");

    const titles = ["Lists", "Groups", "Filter", "Priority"]

    for (let title of titles){
        let titleContainer = container.appendChild(document.createElement("div"));
        titleContainer.setAttribute("class", "title-container d-flex justify-content-start align-items-center")

        let item = titleContainer.appendChild(document.createElement("p"));
        item.setAttribute("class", "task-filter-title row m-0 ms-2 fs-4 border-bottom border-3 border-dark")
        item.textContent = title

        let image = titleContainer.appendChild(document.createElement("img"));
        image.setAttribute("class", "sub-icon down-svg")
        image.setAttribute("src", "../src/assets/down.svg")
        image.setAttribute("alt", "expand down")

    }
}