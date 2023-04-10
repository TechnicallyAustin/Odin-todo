

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
            const inputs = ["Title", "Info", "Tags", "Date", "Complete", "Color"]
            const elements = {
                fields: function(){
                    //for (let input of inputs){
                        let value = input.toLowerCase()
                        let fieldset = document.createElement("fieldset");
                        fieldset.setAttribute("class", "d-flex justify-content-around align-items-center w-100");
                        fieldset.setAttribute("class", `${value}-field d-flex justify-content-around align-items-center`);
                    //}
                },
                label: function(){
                    //for (let input of inputs){
                        let value = input.toLowerCase()
                        let label = fieldset.appendChild(document.createElement("label"));
                        label.setAttribute("class", "text-white w-25");
                        label.setAttribute("for", `${value}`);
                        label.textContent = value;
                    //}
                },
                inputs: function(){
                    //for (let input of inputs){
                        let value = input.toLowerCase()

                    //}
                }
            }
            for (let input of inputs) {
              elements.fields();
              elements.label();
              elements.inputs();
              console.log("Abstracted Form");
            }
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