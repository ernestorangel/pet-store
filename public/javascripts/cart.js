let productsCarouselStep = 500; // how many pixels the products carousel will slide on button press

function setProductsCarouselButtons(number) {
    document.getElementById(`leftArrow${number}`).addEventListener('click', ()=>{
        document.querySelector(`#rowShowcaseItemAreaContainer${number}`).scrollLeft -= productsCarouselStep;
    });

    document.getElementById(`rightArrow${number}`).addEventListener('click', ()=>{
        document.querySelector(`#rowShowcaseItemAreaContainer${number}`).scrollLeft += productsCarouselStep;
    });
};

window.addEventListener('load', () => {

    setProductsCarouselButtons(1);

})