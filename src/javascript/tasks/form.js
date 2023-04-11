export function newTaskForm() {
  const body = document.querySelector(".modal-body");

  const formElements = {
    form: null,
    createForm: function () {
      const form = body.appendChild(document.createElement("form"));
      form.setAttribute("class", "w-100 d-flex flex-column justify-content-around align-items-center task-form h-100 w-100");
      this.form = form;
    },
    legend: function () {
      const legend = this.form.appendChild(document.createElement("p"));
      legend.setAttribute("class", "legend text-white mb-0 fs-5");
      legend.textContent = "Add a New Task";
    },
    fieldset: function () {
        const inputs = ["Title", "Info", "Tags", "Date", "Complete", "Color"];
        for (let title of inputs) {
            let value = title.toLowerCase()

            let fieldset = this.form.appendChild(document.createElement("fieldset"))
            fieldset.setAttribute("class", " w-100 d-flex flex-column justify-content-around align-items-start")
            fieldset.setAttribute("id", "")

            let label = fieldset.appendChild(document.createElement("label"))
            label.setAttribute("class", "form-label text-white")
            label.setAttribute("id", "")
            label.textContent = value

            // let input = fieldset.appendChild(document.createElement("input"))
            //input.setAttribute("class", "")

            switch (value){
                case "title":
                    let title = fieldset.appendChild(document.createElement("input"))
                    title.setAttribute("class", "form-control")
                    title.setAttribute("type", "")
                    title.setAttribute("placeholder", "")

                    break;
                
                case "info":
                    let info = fieldset.appendChild(document.createElement("textarea"))
                    info.setAttribute("class", "form-control")
                    info.setAttribute("type", "textarea")
                    info.setAttribute("rows", "5")
                    info.setAttribute("cols", "35")
                    break;
                
                case "tags":
                      let tags = fieldset.appendChild(document.createElement("input"));
                      tags.setAttribute("class", "form-control")
                    break;

                case "date":
                    let date = fieldset.appendChild(document.createElement("input"))
                    date.setAttribute("class", "form-control");
                    date.setAttribute("type", "date")

                break;

                case "complete":
                    let complete = fieldset.appendChild(document.createElement("input"))
                    //fieldset.setAttribute("class", "p-0 w-75 d-flex justify-content-between align-items-center form-check form-switch")
                    complete.setAttribute("class", "form-control form-check-input")
                    complete.setAttribute("type", "checkbox")
                    complete.setAttribute("value", "")
                    complete.setAttribute("unchecked","")
                break;

                case "color":
                    let color = fieldset.appendChild(document.createElement("input"))
                    color.setAttribute("class", "form-control form-control-color");
                    color.setAttribute("type", "color")
                    color.setAttribute("value", "#FFFFFF")
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
