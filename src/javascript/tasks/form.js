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
            // class
            // id
            let label = fieldset.appendChild(document.createElement("label"))
            // class
            // id
            // text content
            let input = fieldset.appendChild(document.createElement("input"))
            // switch to create specific types
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
