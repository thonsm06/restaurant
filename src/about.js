const about_content = document.createElement("div");
about_content.setAttribute("id", "about-content");

const h2 = document.createElement("h2");
h2.textContent = "Food is what we do";

about_content.appendChild(h2);

export {about_content};