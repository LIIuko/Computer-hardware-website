import { create } from "./script.js";
import { createSlider } from "./script.js";

const product = {
    img: ["../img/ram.png", "../img/ram/ram2.png", "../img/ram/ram3.png", "../img/ram/ram4.png"],
    title: "Title",
    about: "../pages/about_ram.html",
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