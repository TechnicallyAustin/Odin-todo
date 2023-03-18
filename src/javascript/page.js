// creates the Page and calls abstracted functions to create section info
const Page = {
    page: document.querySelector(".page-content"),
    content: null,
    header: function () {
        const header = this.page.appendChild(document.createElement("header"));
        header.setAttribute("class", "header")
        navbar.nav()
        navbar.logo()
        navbar.links()
    },
    main: function () {
        const main = this.page.appendChild(document.createElement("main"));
        main.setAttribute("class", "main")
        mainElements.newSection()
        mainElements.article()
        },
    footer: function () {
        const footer = this.page.appendChild(document.createElement("footer"));
        footer.setAttribute("class", "footer")
        footerElements.info()
        footerElements.text()
    }
};

// creates a navBar and appends it to the header
const navbar = {
    header: document.querySelector("header"),
    content: null,
    nav: function(){
        const nav = this.header.appendChild(document.createElement("nav"))
        this.content = nav
    },
    logo: function(){
        const img = this.content.appendChild(document.createElement("img"))
        img.setAttribute("class","")
        img.setAttribute("alt","")
        img.setAttribute("src", "")
    },
    links: function(){
        const list = this.content.appendChild(document.createElement("ul"))
        const iteems = ["","",""]
    }
}

// creates a section and article within the Main section
const mainElements = {
    main: document.querySelector("main"),
    content: null,
    newSection: function(){
        const section = this.header.appendChild(document.createElement("section"))
    }, // new section is set to Content -- Task Folder
    article: function(){} // appends an article to content. -- Task
}

// creates the footer elements 
const footerElements = {
    content: null,
    footer: document.querySelector("footer"),
    info: function(){
        const info = this.footer.appendChild(document.createElement("p"))
    },
    text: function(){
        const text = this.footer.appendChild(document.createElement("p"));
    }
}

export function buildPage(){
    Page.header()
    Page.main()
    Page.footer()
}

