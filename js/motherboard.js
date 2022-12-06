import { create } from "./script.js";
import { createSlider } from "./script.js";

const product = {
    img: ["../img/motherboard.png", "../img/motherboard/motherboard2.png", "../img/motherboard/motherboard3.png", "../img/motherboard/motherboard4.png"],
    title: "Title",
    about: "../pages/about_motherboard.html",
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