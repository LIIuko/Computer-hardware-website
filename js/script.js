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

        let productImg = document.createElement("img");
        productImg.classList.add("product__img");
        productImg.src = el.img[0];

        productImg.addEventListener("mousemove", event => {
            let count = el.img.length < 6 ? el.img.length : 5;
            let index = Math.round((event.offsetX) / (event.target.offsetWidth / count)) - 1
            index = index > 0 ? index : 0;
            productImg.src = el.img[index];
        });
        productImg.addEventListener("mouseout", event => {
            productImg.src = el.img[0];
        });

        let productTitle = document.createElement("h3");
        productTitle.classList.add("product__title");
        productTitle.classList.add("title");
        productTitle.textContent = el.title;
        
        mainContent.prepend(productTitle);
        mainContent.prepend(productImg);

        cardContent.prepend(mainContent);

        card.prepend(cardContent);
        link.append(card);
        productContainer.append(link);
    }
}
