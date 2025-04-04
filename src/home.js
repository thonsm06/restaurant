const home_content = document.createElement("div");
home_content.setAttribute("id", "home-content");

const h1 = document.createElement("h1");
h1.textContent = "Welcome to Baratie.";
const p = document.createElement("p");
p.textContent = "The best restaurant in East Blue.";



home_content.appendChild(h1);
home_content.appendChild(p);
export {home_content};
