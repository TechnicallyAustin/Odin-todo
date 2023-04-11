import { newTaskForm } from "./form";

const modal = {
  page: document.querySelector(".page-content"),
  modal: null,
  createModal: function () {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal w-25 h-50 bg-dark p-2");
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
    title.setAttribute("class", "modal-title fs-4 w-100 d-flex justify-content-between align-items-center");
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
    newTaskForm()
  },
  footer: function () {
    const footer = document.createElement("footer");
    footer.setAttribute("class", "modal-footer  h-50 w-100");
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
