// page config
let bannerWidth = 1280; // banner width in pixels
let carouselInterval = 3; // how many seconds the main carousel will stay at a banner
let productsCarouselStep = 500; // how many pixels the products carousel will slide on button press
let mainColor = '#3CACF6';
let secondaryColor = '#FF470A';

//functions declarations
function getNumberOfSlides() {
    return document.getElementById("carouselPosition").childElementCount;
};

function getCarouselButton(button) {
    let componentID = `banner-position-${button}`;
    return document.getElementById(componentID);
};

function setCarouselButtonColor(button, color) {
    let component = getCarouselButton(button);
    component.style.backgroundColor = color;
};

function resetCarouselButtonsColors() {
    let numberOfSlides = getNumberOfSlides();
    for (let j=0; j < numberOfSlides; j++) {
        setCarouselButtonColor(j+1, mainColor);
    };
};

function setCarouselSlide(pos) {
    let bannersContainer = document.getElementById("carouselShowcase");
    let currentScroll = bannersContainer.scrollLeft;
    let dif = pos - currentScroll;
    bannersContainer.scrollLeft += dif;
};

function setProductsCarouselButtons(number) {
    document.getElementById(`carouselLeftButton${number}`).addEventListener('click', ()=>{
        document.querySelector(`#rowShowcaseItemAreaContainer${number}`).scrollLeft -= productsCarouselStep;
    });

    document.getElementById(`carouselRightButton${number}`).addEventListener('click', ()=>{
        document.querySelector(`#rowShowcaseItemAreaContainer${number}`).scrollLeft += productsCarouselStep;
    });
};

function fixTimeUnitForShowcasing(number) {
    let string = number + '';
    if (string.length == 1) string = '0' + string;
    return string;
}

// page setup
window.addEventListener('load', () => {

    let numberOfSlides;

    // making toast show
    let toastStatus = document.querySelector('.toast-area').id;
    if(toastStatus == 'show') {
        document.querySelector('.toast-area').style.display = 'flex';
        let toastInterval = setInterval(() => {
            document.querySelector('.toast-area').style.display = 'none';
            clearInterval(toastInterval);
        }, 5 * 1000);
    }

    // making the main carousel move on its own
    setCarouselButtonColor(1, secondaryColor);
    numberOfSlides = getNumberOfSlides();
    let count = 1;
    let carouselSlideInterval = setInterval(()=>{
        if(count < numberOfSlides) {
            resetCarouselButtonsColors();
            setCarouselSlide(count * bannerWidth);
            setCarouselButtonColor(count + 1, secondaryColor);
            count++;
        } else {
            count = 1;
            resetCarouselButtonsColors();
            setCarouselSlide(0);
            setCarouselButtonColor(count, secondaryColor);
        };

    }, (carouselInterval * 1000));

    // making the main carousel buttons work
    for (let i=0; i < numberOfSlides; i++) {

        let component = getCarouselButton(i+1);
        let wantedPos =  i * bannerWidth;

        component.addEventListener('click', () => {
            resetCarouselButtonsColors(numberOfSlides);
            setCarouselSlide(wantedPos);
            setCarouselButtonColor(i+1, secondaryColor);
        });

    };

    // making the products carousel buttons work
    setProductsCarouselButtons(1);
    setProductsCarouselButtons(2);
    setProductsCarouselButtons(3);

    // making the countdown work
    let countdownInterval = setInterval(()=>{
        let showcaseTimer = document.querySelector('.showcaseTimer');
        let startDate = new Date();
        let endDate = new Date(showcaseTimer.id);
        let timeDiff = endDate.getTime() - startDate.getTime();
        let h = fixTimeUnitForShowcasing(Math.floor(timeDiff / 3600000));
        let m = fixTimeUnitForShowcasing(Math.floor((timeDiff / 60000) - (h * 60)));
        let s = fixTimeUnitForShowcasing(Math.floor((timeDiff / 1000) - (h * 3600) - (m * 60)));
        showcaseTimer.innerHTML = `Acaba em ${h}h ${m}m ${s}s`;
    }, 1000);

});