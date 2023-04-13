import "bootstrap";
import "jquery"
import 'popper.js'
import "../../css/styles.css";
import { buildPage } from "../page";
import {collapse} from "../sidebar/collapse"
import { sidebar } from "../sidebar/sidebar";

document.addEventListener("DOMContentLoaded", () => {
    buildPage()
    sidebar()
})


