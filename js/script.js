export function create(array, productContainer) {
    for (let el of array) {
        let link = document.createElement("a");
        link.classList.add("link");
        link.href = el.about;

        let card = document.createElement("div");
        card.classList.add("card");

        let cardContent = document.createElement("div");
        cardContent.classList.add("card__content");

        let mainContent = document.createElement("div");
        mainContent.classList.add("main__content");

        let containerImg = createImgBlock(el);

        let productTitle = document.createElement("h3");
        productTitle.classList.add("product__title");
        productTitle.classList.add("title");
        productTitle.textContent = el.title;
        
        mainContent.prepend(productTitle);
        mainContent.prepend(containerImg);

        cardContent.prepend(mainContent);

        card.prepend(cardContent);
        link.append(card);
        productContainer.append(link);
    }
}

export function createImgBlock(el){
    let containerImg = document.createElement("div");
    containerImg.classList.add("container__img");

    let containerPointers = document.createElement("div");
    containerPointers.classList.add("container__pointers");

    let count = el.img.length < 6 ? el.img.length : 5;

    for(let i = 0; i < count; i++){
        let point = document.createElement("span");
        point.classList.add("point");
        containerPointers.prepend(point);
    }
    containerPointers.childNodes[0].classList.add("chosen");

    let productImg = document.createElement("img");
    productImg.classList.add("product__img");
    productImg.src = el.img[0];

    productImg.addEventListener("mousemove", event => {
        let count = el.img.length < 6 ? el.img.length : 5;
        let index = Math.round((event.offsetX) / (event.target.offsetWidth / count)) - 1;
        index = index > 0 ? index : 0;
        productImg.src = el.img[index];
        for(let el of containerPointers.childNodes){
            el.classList.remove("chosen");
        }
        containerPointers.childNodes[index].classList.add("chosen");
    });
    productImg.addEventListener("mouseout", event => {
        productImg.src = el.img[0];
        for(let el of containerPointers.childNodes){
            el.classList.remove("chosen");
        }
        containerPointers.childNodes[0].classList.add("chosen");
    });

    containerImg.prepend(productImg);
    containerImg.prepend(containerPointers);
    return containerImg;
}
