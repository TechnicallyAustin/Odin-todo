export const Page = {
    content: null,
    header: function () {},
    main: function () {},
    footer: function () {}
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

