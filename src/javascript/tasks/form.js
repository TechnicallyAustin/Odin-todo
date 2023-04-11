export function newTaskForm() {
  const body = document.querySelector(".modal-body");

  const formElements = {
    form: null,
    createForm: function () {
      const form = body.appendChild(document.createElement("form"));
      form.setAttribute("class", "task-form h-100 w-100");
      this.form = form;
    },
    legend: function () {
      const legend = this.form.appendChild(document.createElement("p"));
      legend.setAttribute("class", "legend text-white mb-0 fs-3");
      legend.textContent = "Add a New Task";
    },
    fieldset: function () {
        const inputs = ["Title", "Info", "Tags", "Date", "Complete", "Color"];
        for (let title of inputs) {
            let value = title.toLowerCase()

            let fieldset = this.form.appendChild(document.createElement("fieldset"))
            fieldset.setAttribute("class", "")
            fieldset.setAttribute("id", "")

            let label = fieldset.appendChild(document.createElement("label"))
            label.setAttribute("class", "text-white")
            label.setAttribute("id", "")
            label.textContent = value

            let input = fieldset.appendChild(document.createElement("input"))
            input.setAttribute("class", "")

            switch (value){
                case "title":

                    break;
                
                case "info":

                    break;
                
                case "tags":

                    break;

                case "date":
                    input.setAttribute("class", "");
                    input.setAttribute("type", "date")

                break;

                case "complete":
                    fieldset.setAttribute("class", "form-check form-switch")
                    input.setAttribute("class", "form-check-input")
                    input.setAttribute("type", "checkbox")
                    input.setAttribute("value", "")
                    input.setAttribute("unchecked","")
                break;

                case "color":
                    input.setAttribute("class", "form-control form-control-color");
                    input.setAttribute("type", "color")
                    input.setAttribute("value", "#FFFFFF")
                break;

                default:
            }
        }

    },
    cancel: function () {},
    submit: function () {},
  };

    formElements.createForm();
    formElements.legend();
    formElements.fieldset();
    formElements.cancel();
    formElements.submit();
  
}
