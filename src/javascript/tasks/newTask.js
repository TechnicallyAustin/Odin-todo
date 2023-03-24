function newTask(){
    // creates a modal containing a form

    // Modal
        // div class modal
            // div class modal dialouge
                // div class modal content
                    // div class modal header
                        // div class modal title
                            // button class btn close
        
        // div class modal body
            // form
                // inputs
                    // title
                    // info
                    // tags
                    // date
                    // completed
                    // color
                // submit

        //div class modal footer
            // button class btn close
            // button class btn save
                // submits form and calls a function to create Tasks that also creates cards.

    // on submit create a task with the inputs of the modal
}

const modal = {
    page: document.querySelector(".page-content"),
    modal: null,
    createModal: function(){
        const modal = document.createElement("div");
        modal.setAttribute("class", "modal w-25 h-25 bg-dark")
        this.page.appendChild(modal);
        this.modal = modal
    },
    header: function (){

        const dialouge = this.modal.appendChild(document.createElement("div"));
        dialouge.setAttribute("class", "modal-dialouge ");

        const content = dialouge.appendChild(document.createElement("div"));
        content.setAttribute("class", "modal-content");

        const header = content.appendChild(document.createElement("div"));
        header.setAttribute("class", "modal-header");

        const title = header.appendChild(document.createElement("div"));
        title.setAttribute("class", "modal-title");
        title.textContent = "What do you need to do?"

        const button = title.appendChild(document.createElement("button"));
        button.setAttribute("class", "btn-close");

    },

    body: function (){
        const body = this.modal.appendChild(document.createElement("div"));
        body.setAttribute("class", "modal-body")

        const form = body.appendChild(document.createElement("form"))

        const legend = form.appendChild(document.createElement("p"));
        legend.setAttribute("class", "legend")
        legend.textContent = "Add a New Task"

        const inputs = ["Title", "Info", "Tags", "Date", "Completed", "Color"]
        for (let input of inputs){
            let value = input.toLowerCase()

            let fieldset = document.createElement("fieldset");
            fieldset.setAttribute("class", "d-flex flex-column justify-content-around align-items-center w-75")
            fieldset.setAttribute("class", `${value}-field`)

            let label = fieldset.appendChild(document.createElement("label"))
            label.setAttribute("class", "text-white")
            label.setAttribute("for", `${value}`);
            label.textContent = value

            let formInput = fieldset.appendChild(document.createElement("input"))
            formInput.setAttribute("type", "text");
            formInput.setAttribute("id", "")

            form.appendChild(fieldset)

        }
        //const submit = form.appendChild(document.createElement("button"))
        //submit.setAttribute("value", "submit")
        //submit.textContent = "Add Task"
    },
    footer: function(){}
}





export function newTaskModal() {
    modal.createModal()
    modal.header()
    modal.body()
    modal.footer()
    console.log("modal created")
}