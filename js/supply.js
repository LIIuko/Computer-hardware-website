import { create } from "./script.js";
import { createSlider } from "./script.js";

const product = {
    img: ["/img/supply.png", "/img/supply/supply2.png", "/img/supply/supply3.png", "/img/supply/supply4.png", "/img/supply/supply5.png"],
    title: "Title",
    about: "/pages/about_supply.html",
};
const productContainer = document.querySelector(".product__container");

let processors = [];
for (let i = 0; i < 20; i++) {
    processors.push(product);
}

if(productContainer){
    create(processors, productContainer);
}

const slider = document.querySelector(".slider");

if(slider){
    createSlider(product.img, slider);
}