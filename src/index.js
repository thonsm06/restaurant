import "./style.css";
import {home_content} from "./home.js";
import {menu_content} from "./menu.js";
import {about_content} from "./about.js";



const content = document.querySelector("#content");
content.appendChild(home_content);

const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", (event) => {
    const target = event.target;
    
    content.textContent = "";
    switch(target.classList.value) {
        case "home":
            content.appendChild(home_content);
            break;
        case "menu":
            content.appendChild(menu_content);
            break;
        case "about":
            content.appendChild(about_content);
            break;
    }
})

