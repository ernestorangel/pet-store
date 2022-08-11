let mainColor = '#3CACF6';
let secondaryColor = '#FF470A';

function setPriceAsCurrency(value) {
    let splited = value.split('.');
    splited.push('00');
    let valueAsCurrency = "R$ " + splited[0] + "," + splited[1];
    return valueAsCurrency;
};

function getPreviewImage(imageNumber) {
    return document.getElementById(`preview-${imageNumber}`);
};

function setPreviewImageBorder(imageNumber, color) {
    getPreviewImage(imageNumber).style.border = `1px solid ${color}`;
};

function resetPreviewImagesBorders() {
    document.querySelectorAll(".previewImage").forEach((preview)=>{
        preview.style.border = '1px solid lightgray';
    });
};

window.addEventListener("load", ()=>{

    // setPreviewImageBorder(1, secondaryColor);
    document.querySelectorAll(".previewImage")[0].style.border = `1px solid ${secondaryColor}`;
    document.querySelectorAll(".previewImage").forEach((preview)=>{
        preview.addEventListener("click", ()=>{
            document.querySelector(".mainPhoto").src = preview.src;

            resetPreviewImagesBorders();
            preview.style.border = `1px solid ${secondaryColor}`;
        });
    });

    let unityPrice = parseInt(document.querySelector(".unityPrice").innerHTML.slice(3).split(",").join("."));
    let selectedQuantity = document.querySelector(".productQuantity").value;
    let productPrice = unityPrice * selectedQuantity;
    document.querySelector(".productPrice").innerHTML = setPriceAsCurrency(productPrice + '');
    document.querySelector(".productQuantity").addEventListener("change", ()=>{
        let unityPrice = parseInt(document.querySelector(".unityPrice").innerHTML.slice(3).split(",").join("."));
        let selectedQuantity = document.querySelector(".productQuantity").value;
        let productPrice = unityPrice * selectedQuantity;
        document.querySelector(".productPrice").innerHTML = setPriceAsCurrency(productPrice + '');
    })
});