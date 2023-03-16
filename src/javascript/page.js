// creates the Page and calls abstracted functions to create section info
export const Page = {
    page: document.querySelector(".page-content"),
    content: null,
    header: function () {
        const header = this.page.appendChild(document.createElement("header"));
        header.setAttribute("class", "")
        navbar.logo()
        navbar.links()
    },
    main: function () {
        const main = this.page.appendChild(document.createElement("main"));
        main.setAttribute("class", "")
        mainElements.newSection()
        mainElements.article()
        },
    footer: function () {
        const footer = this.page.appendChild(document.createElement("footer"));
        footer.setAttribute("class", "")
        footerElements.footer()
        footerElements.info()
        footerElements.text()
    }
};

// creates a navBar and appends it to the header
const navbar = {
    content: null,
    logo: function(){},
    links: function(){}
}

// creates a section and article within the Main section
const mainElements = {
    main: document.querySelector("main"),
    content: null,
    newSection: function(){}, // new section is set to Content -- Task Folder
    article: function(){} // appends an article to content. -- Tasks
}

// creates the footer elements 
const footerElements = {
    content: null,
    footer: function(){},
    info: function(){},
    text: function(){}
}

