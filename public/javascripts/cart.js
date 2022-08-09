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

    document.getElementById("more-qtd-button").addEventListener("click", async ()=>{
        let id_product = document.querySelector(".qtd-button").id;
        let qtd = document.querySelector(".qtd-button").innerHTML;
        let newQtd = parseInt(qtd) + 1;
        console.log(id_product, qtd, newQtd);
        await fetch("/cart/update", {
            method: 'POST',
            headers: new Headers({
                'Content-type': 'text/plain'
            }),
            body: JSON.stringify({
                id_product: id_product,
                qtd: newQtd
            })
        });
    });

    document.getElementById("less-qtd-button").addEventListener("click", ()=>{

    });

})