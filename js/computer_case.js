import { create } from "./script.js";

const product = {
    img: ["/img/computer_case.png", "/img/computer_case/computer_case2.png", "/img/computer_case/computer_case3.png", "/img/computer_case/computer_case4.png", "/img/computer_case/computer_case5.png"],
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