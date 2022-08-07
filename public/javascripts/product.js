function setPriceAsCurrency(value) {
    let splited = value.split('.');
    splited.push('00');
    let valueAsCurrency = "R$ " + splited[0] + "," + splited[1];
    return valueAsCurrency;
};

window.addEventListener("load", ()=>{
    document.querySelector(".productQuantity").addEventListener("change", ()=>{
        let unityPrice = parseInt(document.querySelector(".unityPrice").innerHTML.slice(3).split(",").join("."));
        let selectedQuantity = document.querySelector(".productQuantity").value;
        let productPrice = unityPrice * selectedQuantity;
        document.querySelector(".productPrice").innerHTML = setPriceAsCurrency(productPrice + '');
    })
});