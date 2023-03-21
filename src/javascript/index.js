import "bootstrap";
import "jquery"
import 'popper.js'
import "../css/styles.css";
import { buildPage } from "./page.js";
import { sidebar } from "./sidebar.js";
import { collapse } from "./collapse.js";

document.addEventListener("DOMContentLoaded", () => {
    buildPage()
    collapse()
    //sidebar()
})


