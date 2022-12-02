import { create } from "./script.js";

const product = {
    img: ["/img/hdd.png", "/img/hdd/hdd2.png", "/img/hdd/hdd3.png", "/img/hdd/hdd4.png"],
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