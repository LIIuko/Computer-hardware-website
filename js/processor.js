import { create } from "./script.js";
import { createSlider } from "./script.js";


const product = {
    img: ["/img/processor.png", "/img/processor/processor2.png", "/img/processor/processor3.png", "/img/processor/processor4.png", "/img/processor/processor5.png"],
    title: "Title",
    about: "/pages/about_processor.html",
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