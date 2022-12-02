import { create } from "./script.js";

const product = {
    img: ["/img/processor.png", "/img/processor/processor2.png", "/img/processor/processor3.png", "/img/processor/processor4.png", "/img/processor/processor5.png"],
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