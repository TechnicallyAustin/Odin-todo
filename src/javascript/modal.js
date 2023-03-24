import { buildTaskForm } from "./tasks/form";

const createModal = {
    page: document.querySelector(".page-content"),
    modal: null,
    newModal: function(){},
    header: function(){},
    body: function(){
        const modalBody = document.querySelector(".modal-body");
        buildTaskForm()
    },
    footer: function(){}
}