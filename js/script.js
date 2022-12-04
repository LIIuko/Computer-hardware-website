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

export function createSlider(imgs, slider){
    if(window.innerWidth > 768){
        let count = window.innerWidth > 1300 ? 5: 4;
        let countOffset = 0;
        let offset = window.innerWidth > 1300 ? 5.5: 5.4;
        offset = window.innerWidth > 992 ? offset: 4.5;
        let containerslider = document.createElement("div");
        containerslider.classList.add("container__slider");
        const mainSlide = document.createElement("img");
        mainSlide.classList.add("main__slide");
        mainSlide.src = imgs[0];

        for(let img of imgs){
            let slide = document.createElement("img");
            slide.classList.add("slide");
            slide.src = img;
            slide.addEventListener("click", event => {
                mainSlide.src = slide.src;
            });
            containerslider.append(slide);
        }
        for(let img of imgs){
            let slide = document.createElement("img");
            slide.classList.add("slide");
            slide.src = img;
            slide.addEventListener("click", event => {
                mainSlide.src = slide.src;
            });
            containerslider.append(slide);
        }

        let prevBttn = document.createElement("img");
        prevBttn.classList.add("button");
        prevBttn.classList.add("prev__img");
        prevBttn.src = "/img/next.png";
        if(countOffset <= 0){
            prevBttn.style.display = "none";
        }

        prevBttn.addEventListener("click", event => {
            if(countOffset < -1){
                nextBttn.style.display = "block";
            }
            else{
                nextBttn.style.display = "block";
                prevBttn.style.display = "none";
            }
            if(containerslider.children.length - 3 - countOffset > count){
                nextBttn.style.display = "block";
                countOffset++;
                for(let el of containerslider.children){
                    if(el.classList.contains("button")){continue}
                    el.style.left = offset * countOffset + "rem";
                }
            }
        });

        let nextBttn = document.createElement("img");
        nextBttn.classList.add("button");
        nextBttn.classList.add("next__img");
        nextBttn.src = "/img/next.png";
        if(containerslider.children.length - 2 + countOffset <= count){
            nextBttn.style.display = "none";
        }

        nextBttn.addEventListener("click", event => {
            if(containerslider.children.length - 2 + countOffset > count + 1){
                prevBttn.style.display = "block";
            }
            else{
                nextBttn.style.display = "none";
                prevBttn.style.display = "block";
            }
            if(containerslider.children.length - 2 + countOffset > count){
                prevBttn.style.display = "block";
                countOffset--;
                for(let el of containerslider.children){
                    if(el.classList.contains("button")){continue}
                    el.style.left = offset * countOffset + "rem";
                }
            }
        });

        containerslider.append(prevBttn);
        containerslider.append(nextBttn);

        slider.append(containerslider);
        slider.prepend(mainSlide);
    }
    else{
        let countOffset = 0;
        for(let img of imgs){
            let slide = document.createElement("img");
            slide.classList.add("slide");
            slide.src = img;
            slider.append(slide);
        }
        for(let img of imgs){
            let slide = document.createElement("img");
            slide.classList.add("slide");
            slide.src = img;
            slider.append(slide);
        }
        let prevBttn = document.createElement("img");
        prevBttn.classList.add("button");
        prevBttn.classList.add("prev__img");
        prevBttn.src = "/img/next.png";
        if(countOffset <= 0){
            prevBttn.style.display = "none";
        }

        prevBttn.addEventListener("click", event => {
            if(countOffset > -2){
                prevBttn.style.display = "none";
            }
            if(slider.children.length - 2 > countOffset){
                nextBttn.style.display = "block";
                countOffset++;
                for(let el of slider.children){
                    if(el.classList.contains("button")){continue}
                    el.style.left = 100 * countOffset + "%";
                }
            }
        });

        let nextBttn = document.createElement("img");
        nextBttn.classList.add("button");
        nextBttn.classList.add("next__img");
        nextBttn.src = "/img/next.png";
        if(slider.children.length - 2 <= countOffset){
            nextBttn.style.display = "none";
        }

        nextBttn.addEventListener("click", event => {
            if(slider.children.length - 4 + countOffset == 0){
                nextBttn.style.display = "none";
            }
            if(slider.children.length - 2 + countOffset > 0){
                prevBttn.style.display = "block";
                countOffset--;
                for(let el of slider.children){
                    if(el.classList.contains("button")){continue}
                    el.style.left = 100 * countOffset + "%";
                }
            }
        });

        slider.append(prevBttn);
        slider.append(nextBttn);
    }
}
