

function newTaskForm(){
const body = document.querySelector("modal-body")
    const formElements = {
        form: null,
        createForm: function(){},
        legend: function(){},
        fieldset: function(){
            const elements = {
                label: function(){},
                inputs: function(){
                    switch (input) {
                        case text:
                            break;
                        case checkbox:
                            break;
                        case date:
                            break;
                        case color:
                            break;
                    }
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