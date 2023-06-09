export function group(){
    const sidebar = document.querySelector(".sidebar")
    const container = sidebar.appendChild(document.createElement("div"));
    container.setAttribute("class", "task-filter container d-flex justify-content-around align-items-center");

    const titles = ["Today", "Upcoming", "Due", "Eventually"]
    const options = ["Groups","Tags","Filter"]


    for (let title of titles){
            let titleContainer = container.appendChild(document.createElement("div"));
            titleContainer.setAttribute("class", "title-container d-flex flex-column justify-content-start align-items-center")

            let item = titleContainer.appendChild(document.createElement("p"));
            item.setAttribute("class", "task-filter-title row m-0 ms-2 fs-4 border-bottom border-3 border-dark")
            item.textContent = title

            let image = titleContainer.appendChild(document.createElement("img"));
            image.setAttribute("class", "sub-icon down-svg")
            image.setAttribute("src", "../src/assets/down.svg")
            image.setAttribute("alt", "expand down")

            titleContainer.addEventListener("click", () => {
                console.log("clicked")
                const name = titleContainer.firstChild.textContent
                const items = titleContainer.appendChild(document.createElement("div"))
                items.setAttribute("class", "group-container h-100 w-100 bg-dark")
                let list = items.appendChild(document.createElement("p"));
                list.textContent = "Test List"
            })
        }


    for (let option of options){
         let optionContainer = container.appendChild(document.createElement("div"));
         optionContainer.setAttribute("class","option-container d-flex flex-column justify-content-start align-items-center");

         let item = optionContainer.appendChild(document.createElement("p"));
         item.setAttribute("class","task-option-title row m-0 ms-2 fs-4 border-bottom border-3 border-dark");
         item.textContent = option;

         let image = optionContainer.appendChild(document.createElement("img"));
         image.setAttribute("class", "sub-icon down-svg");
         image.setAttribute("src", "../src/assets/down.svg");
         image.setAttribute("alt", "expand down");

         optionContainer.addEventListener("click", () => {
           console.log("clicked");
           const name = optionContainer.firstChild.textContent;
           const items = optionContainer.appendChild(
             document.createElement("div")
           );
           items.setAttribute("class", "group-container h-100 w-100 bg-dark");
           let list = items.appendChild(document.createElement("p"));
           list.textContent = "Test List";
         });
    }
}
    

// you need to add another container for title container to rest in
// need to display list as 2 divs
 // Parent div is flex- column
    // child div is flex-row

// title -- image
 // appenddiv

 // work on creating smooth responses