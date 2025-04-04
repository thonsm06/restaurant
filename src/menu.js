import "./menu.css"

const menu_content = document.createElement("div");
menu_content.setAttribute("id", "menu-content");

//Appetizers
const appetizer_div = document.createElement("section");
const appetizer_h = document.createElement("h2");
appetizer_h.textContent = "Appetizers";
const appetizer_ul = document.createElement("ul");
//Fish Bites
const appetizer_div_fish_bites = document.createElement("div");
const appetizer_li_fish_bites = document.createElement("li");
appetizer_li_fish_bites.textContent = "Fish Bites";
const appetizer_p_fish_bites = document.createElement("p");
appetizer_p_fish_bites.textContent = "Six crispy ball of fish."
appetizer_div_fish_bites.appendChild(appetizer_li_fish_bites);
appetizer_div_fish_bites.appendChild(appetizer_p_fish_bites);
//Sunny Delight
const appetizer_div_sunny_delight = document.createElement("div");
const appetizer_li_sunny_delight = document.createElement("li");
appetizer_li_sunny_delight.textContent = "Sunny Delight";
const appetizer_p_sunny_delight = document.createElement("p");
appetizer_p_sunny_delight.textContent = "Six battered pieces of Sunny.";
appetizer_div_sunny_delight.appendChild(appetizer_li_sunny_delight);
appetizer_div_sunny_delight.appendChild(appetizer_p_sunny_delight);
//Oyster
const appetizer_div_oyster = document.createElement("div");
const appetizer_li_oyster = document.createElement("li");
appetizer_li_oyster.textContent = "Oyster";
const appetizer_p_oyster = document.createElement("p");
appetizer_p_oyster.textContent = "Half dozen fresh oyster from the depth.";
appetizer_div_oyster.appendChild(appetizer_li_oyster);
appetizer_div_oyster.appendChild(appetizer_p_oyster);
//append
appetizer_ul.appendChild(appetizer_div_fish_bites);
appetizer_ul.appendChild(appetizer_div_sunny_delight);
appetizer_ul.appendChild(appetizer_div_oyster);
appetizer_div.appendChild(appetizer_h);
appetizer_div.appendChild(appetizer_ul)

//Entrees
const entree_div = document.createElement("section");
const entree_h = document.createElement("h2");
entree_h.textContent = "Entrees";
const entree_ul = document.createElement("ul");
//Tuna Steak
const entree_div_tuna_steak = document.createElement("div");
const entree_li_tuna_steak = document.createElement("li");
entree_li_tuna_steak.textContent = "Tune Steak";
const entree_p_tuna_steak = document.createElement("p");
entree_p_tuna_steak.textContent = "A big slab of fresh tuna cook to order.";
entree_div_tuna_steak.appendChild(entree_li_tuna_steak);
entree_div_tuna_steak.appendChild(entree_p_tuna_steak);
//Grilled Halibut
const entree_div_grilled_halibut = document.createElement("div");
const entree_li_grilled_halibut = document.createElement("li");
entree_li_grilled_halibut.textContent = "Grilled Halibut";
const entree_p_grilled_halibut = document.createElement("p");
entree_p_grilled_halibut.textContent = "Fresh Halibut grilled to perfection on charcoal.";
entree_div_grilled_halibut.appendChild(entree_li_grilled_halibut);
entree_div_grilled_halibut.appendChild(entree_p_grilled_halibut);
//Ocean Plate
const entree_div_ocean_plate = document.createElement("div");
const entree_li_ocean_plate = document.createElement("li");
entree_li_ocean_plate.textContent = "Ocean Plate";
const entree_p_ocean_plate = document.createElement("p");
entree_p_ocean_plate.textContent = "A big plate of freshly caught fish of various types.";
entree_div_ocean_plate.appendChild(entree_li_ocean_plate);
entree_div_ocean_plate.appendChild(entree_p_ocean_plate);
//Crab-n-Shrimp
const entree_div_crab_n_shrimp = document.createElement("div");
const entree_li_crab_n_shrimp = document.createElement("li");
entree_li_crab_n_shrimp.textContent = "Crab-n-Shrimp";
const entree_p_crab_n_shrimp = document.createElement("p");
entree_p_crab_n_shrimp.textContent = "Combo of boiled crab and shrimp with inhouse made seasonings.";
entree_div_crab_n_shrimp.appendChild(entree_li_crab_n_shrimp);
entree_div_crab_n_shrimp.appendChild(entree_p_crab_n_shrimp);
//append
entree_ul.appendChild(entree_div_tuna_steak);
entree_ul.appendChild(entree_div_grilled_halibut);
entree_ul.appendChild(entree_div_ocean_plate);
entree_ul.appendChild(entree_div_crab_n_shrimp);
entree_div.appendChild(entree_h);
entree_div.appendChild(entree_ul);


//Desserts
const dessert_div = document.createElement("section");
const dessert_h = document.createElement("h2");
dessert_h.textContent = "Desserts";
const dessert_ul = document.createElement("ul");
//Seaweed Ice Cream
const dessert_div_seaweed_ice_cream = document.createElement("div");
const dessert_li_seaweed_ice_cream = document.createElement("li");
dessert_li_seaweed_ice_cream.textContent = "Seaweed Ice Cream";
const dessert_p_seaweed_ice_cream = document.createElement("p");
dessert_p_seaweed_ice_cream.textContent = "Two scoops of delicate seaweed infused ice cream.";
dessert_div_seaweed_ice_cream.appendChild(dessert_li_seaweed_ice_cream);
dessert_div_seaweed_ice_cream.appendChild(dessert_p_seaweed_ice_cream);
//Jellyfish Jelly
const dessert_div_jellyfish_jelly = document.createElement("div");
const dessert_li_jellyfish_jelly = document.createElement("li");
dessert_li_jellyfish_jelly.textContent = "Jellyfish Jelly";
const dessert_p_jellyfish_jelly = document.createElement("p");
dessert_p_jellyfish_jelly.textContent = "A bowl of jelly made of translucent jellyfish.";
dessert_div_jellyfish_jelly.appendChild(dessert_li_jellyfish_jelly);
dessert_div_jellyfish_jelly.appendChild(dessert_p_jellyfish_jelly);
//Fish Pie
const dessert_div_fish_pie = document.createElement("div");
const dessert_li_fish_pie = document.createElement("li");
dessert_li_fish_pie.textContent = "Fish Pie";
const dessert_p_fish_pie = document.createElement("p");
dessert_p_fish_pie.textContent = "Fish in a pie, why not? Try with Seaweed Ice Cream for an ultimate ocean dessert."
dessert_div_fish_pie.appendChild(dessert_li_fish_pie);
dessert_div_fish_pie.appendChild(dessert_p_fish_pie);
//append
dessert_ul.appendChild(dessert_div_seaweed_ice_cream);
dessert_ul.appendChild(dessert_div_jellyfish_jelly);
dessert_ul.appendChild(dessert_div_fish_pie);
dessert_div.appendChild(dessert_h);
dessert_div.appendChild(dessert_ul);

menu_content.appendChild(appetizer_div);
menu_content.appendChild(entree_div);
menu_content.appendChild(dessert_div);
export {menu_content};