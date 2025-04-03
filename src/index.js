import {home_content} from "./home";
import {menu_content} from "./menu";
import {about_content} from "./about";

const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", (event) => {
    const target = event.target;
    switch(target.classList.value) {
        case "home":
            //go to home
            console.log("home");

            break;
        case "menu":
            //go to menu
            console.log("menu");
            break;
        case "about":
            //go to about
            console.log("about");
            break;
    }
})

