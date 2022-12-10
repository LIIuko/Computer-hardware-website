const arr = document.querySelectorAll(".block__move");
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

for (let el of arr) {
    console.log(el.getBoundingClientRect().top, window.screen.height);
    if(el.getBoundingClientRect().top - window.screen.height / 1.5 < scrollTop){
        el.classList.add("active");
    }
}

window.addEventListener('scroll', event =>{
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrollTop);
    for (let el of arr) {
        console.log(el.getBoundingClientRect().top);
        if(el.getBoundingClientRect().top - window.screen.height / 1.5 < scrollTop){
            el.classList.add("active");
        }
    }
});