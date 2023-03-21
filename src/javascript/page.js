// creates the Page and calls abstracted functions to create section info
const Page = {
  page: document.querySelector(".page-content"),
  content: null,
  header: function () {
    const header = this.page.appendChild(document.createElement("header"));
    header.setAttribute("class", "header bg-black");

    // creates a navBar and appends it to the header
    const navbar = {
      content: null,
      nav: function () {
        console.log(header);
        const nav = header.appendChild(document.createElement("nav"));
        nav.setAttribute("class", "d-flex justify-content-between align-items-center mx-2 h-100")
        this.content = nav;
      },
      logo: function () {
        const logo = this.content.appendChild(document.createElement("p"));
        logo.setAttribute("class", "page-logo text-white fs-2 mb-0")
        logo.textContent = "Tech Todo"
      },
      links: function () {
        const linksList = []
        const list = this.content.appendChild(document.createElement("ul"));
        list.setAttribute("class", "pb-0 mb-0")
        const item = list.appendChild(document.createElement("li"));
        const image = item.appendChild(document.createElement("img"));
        image.setAttribute("src", "../src/assets/add2.svg");
        image.setAttribute("alt", "")
        image.setAttribute("class", "nav-add");


      },
      build: function () {
        this.nav();
        this.logo();
        this.links();
      },
    };

    navbar.build();
  },
  main: function () {
    const main = this.page.appendChild(document.createElement("main"));
    main.setAttribute("class", "main bg-light");
  },
  footer: function () {
    const footer = this.page.appendChild(document.createElement("footer"));
    footer.setAttribute("class", "footer bg-black");

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

export function buildPage() {
  Page.header();
  Page.main();
  Page.footer();
}
