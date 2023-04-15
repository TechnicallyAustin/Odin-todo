export function content() {
    const main = document.querySelector(".main")
    const page = {
        nav: function(){
            const container = main.appendChild(document.createElement("div"))
            container.setAttribute("class", "w-100 bg-dark d-flex justify-content-between align-items-center")
            const elements = {
                menu: function(){
                    const menu = container.appendChild(document.createElement("div"));
                    menu.setAttribute("class", "w-50 bg-light rounded-pill p-2")
                    menu.textContent = "MENU"
                },
                profile: function(){
                    const profile = container.appendChild(document.createElement("div"))
                    profile.setAttribute("class", "w-25 bg-light rounded-pill p-2")
                    profile.textContent = "PROFILE"
                }
            }
            elements.menu()
            elements.profile()
            },
        taskSections: function(){
            const labels = ["Doing","Upcoming","Done"];
            for (let label of labels){
                let value = label.toLowerCase()
                let section = {
                    container: null,
                    newContainer: function(){
                        let container = main.appendChild(document.createElement("div"));
                        container.setAttribute("class", "w-100 h-25 bg-warning rounded px-2");
                        this.container = container
                    },
                    title: function(){
                        let title = this.container.appendChild(document.createElement("p"))
                        title.setAttribute("class", "")
                        title.textContent = label;

                    },
                    taskContainer: function(){
                        let taskContainer = this.container.appendChild(document.createElement("div"));
                        taskContainer.setAttribute("class", " w-100 h-75 bg-secondary");
                    }
                };
                section.newContainer()
                section.title()
                section.taskContainer()
            };
        }
    }
    page.nav()
    page.taskSections()
}