import { create } from "./script.js";

const product = {
    img: ["/img/supply.png", "/img/supply/supply2.png", "/img/supply/supply3.png", "/img/supply/supply4.png", "/img/supply/supply5.png"],
    title: "Title",
    price: 100,
    about: "#",
};
const productContainer = document.querySelector(".product__container");

let processors = [];
for (let i = 0; i < 20; i++) {
    processors.push(product);
}

create(processors, productContainer);