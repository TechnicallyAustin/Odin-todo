import "bootstrap";
import "jquery"
import 'popper.js'
import "../../css/styles.css";
import { buildPage } from "../page";
import {collapse} from "../sidebar/collapse"

document.addEventListener("DOMContentLoaded", () => {
    buildPage()
    collapse()
})


