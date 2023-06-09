import { content } from "./content/content";
import { sidebar } from "./sidebar/sidebar";
import { newTaskModal } from "./tasks/newTask";

// creates the Page and calls abstracted functions to create section info
const Page = {
  page: document.querySelector(".page-content"),
  content: null,
  header: function () {
    const header = this.page.appendChild(document.createElement("header"));
    header.setAttribute("class", "header h-100 w-100 d-flex justify-content-center align-items-start bg-secondary");
    sidebar()
  },
  main: function () {
    const main = this.page.appendChild(document.createElement("main"));
    main.setAttribute("class", "main h-100  bg-light d-flex flex-column justify-content-around align-items-center mx-3");
    content()
  },
  footer: function () {
    const footer = this.page.appendChild(document.createElement("footer"));
    footer.setAttribute("class", " h-100 w-100 footer bg-black");

    const footerElements = {
      content: null,
      footer: document.querySelector("footer"),
      info: function () {
        const info = this.footer.appendChild(document.createElement("p"));
      },
      text: function () {
        const text = this.footer.appendChild(document.createElement("p"));
      },
    };
    footerElements.info();
    footerElements.text();
  },
};

function newTask(){
  const add = document.querySelector(".nav-add")
  add.addEventListener("click",()=>{
    console.log("add button clicked")
    newTaskModal() // replace with modal.js

  })
}

export function buildPage() {
  Page.header();
  Page.main();
  Page.footer();
}
