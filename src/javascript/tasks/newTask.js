const modal = {
  page: document.querySelector(".page-content"),
  modal: null,
  createModal: function () {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal w-50 h-50 bg-dark p-2");
    this.page.appendChild(modal);
    this.modal = modal;
  },
  header: function () {
    const dialouge = this.modal.appendChild(document.createElement("div"));
    dialouge.setAttribute("class", "modal-dialouge w-100 d-flex justify-content-between align-items-center");

    const content = dialouge.appendChild(document.createElement("div"));
    content.setAttribute("class", "modal-content");

    const header = content.appendChild(document.createElement("div"));
    header.setAttribute("class", "modal-header w-100 d-flex justify-content-between align-items-center");

    const title = header.appendChild(document.createElement("div"));
    title.setAttribute("class", "modal-title fs-2 w-100 d-flex justify-content-between align-items-center");
    title.textContent = "What do you need to do?";

    const button = title.appendChild(document.createElement("button"));
    button.setAttribute("class", "btn-close");
  },

  body: function () {
    const body = this.modal.appendChild(document.createElement("div"));
    body.setAttribute(
      "class",
      "modal-body h-100 d-flex flex-column justify-content-around align-items-start"
    );

    //const form = body.appendChild(document.createElement("form"));
    //form.setAttribute("class", "task-form h-100 w-100")
//
    //const legend = form.appendChild(document.createElement("p"));
    //legend.setAttribute("class", "legend text-white mb-0 fs-3");
    //legend.textContent = "Add a New Task";
//
    //const inputs = ["Title", "Info", "Tags", "Date", "Complete", "Color"];
    //for (let input of inputs) {
    //  let value = input.toLowerCase();
//
    //  let fieldset = document.createElement("fieldset");
    //  fieldset.setAttribute(
    //    "class",
    //    "d-flex justify-content-around align-items-center w-100"
    //  );
    //  fieldset.setAttribute("class", `${value}-field d-flex justify-content-around align-items-center`);
//
    //  let label = fieldset.appendChild(document.createElement("label"));
    //  label.setAttribute("class", "text-white w-25");
    //  label.setAttribute("for", `${value}`);
    //  label.textContent = value;
//
    //  let formInput = fieldset.appendChild(document.createElement("input"));
    //  formInput.setAttribute("class", " h-75 w-50")
    //  formInput.setAttribute("type", "text");
    //  formInput.setAttribute("id", "");
//
    //  form.appendChild(fieldset);
    //}
    //const submit = form.appendChild(document.createElement("button"))
    //submit.setAttribute("value", "submit")
    //submit.textContent = "Add Task"
  },
  footer: function () {
    //const form = document.querySelector("form");
    const footer = document.createElement("footer");
    footer.setAttribute("class", "modal-footer  h-50 w-100");
    // end form here

    //const submit = footer.appendChild(document.createElement("button"));
    //submit.setAttribute("value", "submit");
    //submit.setAttribute("class", "modal-btn btn h-100 w-100 btn-success")
    //submit.textContent = "Add Task";
//
    //const cancel = footer.appendChild(document.createElement("button"));
    //cancel.setAttribute("value", "Cancel")
    //cancel.setAttribute("class", "modal-btn btn btn-danger h-100 w-100")
    //cancel.textContent = "Cancel"

    this.modal.appendChild(footer);
  },
};

export function newTaskModal() {
  modal.createModal();
  modal.header();
  modal.body();
  modal.footer();
  console.log("modal created");
  
}
