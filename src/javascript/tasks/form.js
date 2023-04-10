

function newTaskForm(){
const body = document.querySelector(".modal-body")
    const formElements = {
        form: null,
        createForm: function(){
            const form = body.appendChild(document.createElement("form"));
            form.setAttribute("class", "task-form h-100 w-100");
            this.form = form 
        },
        legend: function(){
            const legend = this.form.appendChild(document.createElement("p"));
            legend.setAttribute("class", "legend text-white mb-0 fs-3");
            legend.textContent = "Add a New Task";
        },
        fieldset: function(){
            const elements = {
                inputs: ["Title", "Info", "Tags", "Date", "Complete", "Color"],
                label: function(){},
                inputs: function(){
                }
            }
            elements.label()
            elements.inputs()
        },
        cancel: function(){},
        submit: function(){}
    }
}

export function buildTaskForm(){
    newTaskForm.createForm()
    newTaskForm.legend()
    newTaskForm.fieldset()
    newTaskForm.cancel()
    newTaskForm.submit()

}