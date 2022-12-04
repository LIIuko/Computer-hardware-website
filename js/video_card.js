import { create } from "./script.js";
import { createSlider } from "./script.js";


const product = {
    img: ["/img/video_card.png", "/img/video_card/video_card2.png", "/img/video_card/video_card3.png", "/img/video_card/video_card4.png"],
    title: "Title",
    about: "/pages/about_video_card.html",
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