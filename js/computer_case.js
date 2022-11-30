import { create } from "./script.js";

const product = {
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sed.",
    img: "/img/computer_case.png",
    title: "Title",
    price: 100,
    about: "#",
};
const productContainer = document.querySelector(".product__container");

let processors = [];
for (let i = 0; i < 20; i++){
    processors.push(product);
}

create(processors, productContainer);