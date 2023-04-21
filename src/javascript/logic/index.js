import "bootstrap";
import "jquery"
import 'popper.js'
import "../../css/styles.css";
import { buildPage } from "../page";
import {collapse} from "../sidebar/collapse"
import { sidebar } from "../sidebar/sidebar";
import { content } from "../content/content";
import { group } from "../sidebar/group";

document.addEventListener("DOMContentLoaded", () => {
    buildPage()
})


