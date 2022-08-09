let productsCarouselStep = 500; // how many pixels the products carousel will slide on button press

function setProductsCarouselButtons(number) {
    document.getElementById(`leftArrow${number}`).addEventListener('click', ()=>{
        document.querySelector(`#rowShowcaseItemAreaContainer${number}`).scrollLeft -= productsCarouselStep;
    });

    document.getElementById(`rightArrow${number}`).addEventListener('click', ()=>{
        document.querySelector(`#rowShowcaseItemAreaContainer${number}`).scrollLeft += productsCarouselStep;
    });
};

function setPriceAsCurrency(value) {
    let splited = value.split('.');
    splited.push('00');
    if (splited[1].length == 1) splited[1] = splited[1] + "0";
    let valueAsCurrency = "R$ " + splited[0] + "," + splited[1];
    return valueAsCurrency;
};

window.addEventListener('load', () => {

    setProductsCarouselButtons(1);

    // making numbers of summary calculate automatically
    let priceElements = document.querySelectorAll(".pedido-preco");
    let listOfPrices = [];
    priceElements.forEach((element)=>{
        listOfPrices.push(parseFloat(element.innerHTML.slice(3).split(",").join(".")));
    });
    let totalProductPrice = listOfPrices.reduce((partialSum, currentValue)=>{ return partialSum + currentValue });
    let shippingPrice = parseFloat(document.getElementById("shipping-value").innerHTML.slice(3).split(",").join("."));
    let totalValue = totalProductPrice + shippingPrice;

    document.getElementById("subtotal-value").innerHTML = setPriceAsCurrency(totalProductPrice + '');
    document.getElementById("total-value").innerHTML = setPriceAsCurrency(totalValue + '');

    
    // document.getElementById("more-qtd-button").addEventListener("click", async ()=>{
    //     let id_product = document.querySelector(".qtd-button").id;
    //     let qtd = document.querySelector(".qtd-button").innerHTML;
    //     let newQtd = parseInt(qtd) + 1;
    //     console.log(id_product, qtd, newQtd);
    //     await fetch("/cart/update", {
    //         method: 'POST',
    //         headers: new Headers({
    //             'Content-type': 'text/plain'
    //         }),
    //         body: JSON.stringify({
    //             id_product: id_product,
    //             qtd: newQtd
    //         })
    //     });
    // });

    // document.getElementById("less-qtd-button").addEventListener("click", ()=>{

    // });

})