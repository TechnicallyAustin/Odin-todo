export function content() {
const main = document.querySelector(".main")
const page = {
        nav: function(){
            const container = main.appendChild(document.createElement("div"))
            container.setAttribute("class", "")
            elements = {
                menu: function(){},
                profile: function(){}
            }
            elements.menu()
            elements.profile()
        },
        todo: function(){
            elements = {
                label: function(){},
                container: function(){}
            }
        },
        doing: function(){},
        done: function(){}
    }
    page.nav()
    page.todo()
    page.doing()
    page.done()


}