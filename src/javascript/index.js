import "bootstrap";
import "jquery"
import 'popper.js'
import "../css/styles.css";
import { buildPage } from "./page.js";
import { sidebar } from "./sidebar.js";
import {sideMenu } from "./collapse.js";

document.addEventListener("DOMContentLoaded", () => {
    buildPage()
    sideMenu()
    //sidebar()
})


