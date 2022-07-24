window.addEventListener('load', () => {

    let numberOfSlides = document.getElementById("carouselPosition").childElementCount;
    let bannersContainer = document.getElementById("carouselShowcase");

    for (let i=0; i < numberOfSlides; i++) {

        let componentID = `banner-position-${i + 1}`;
        let component = document.getElementById(componentID);
        let wantedPos =  i * 1280

        component.addEventListener('click', () => {

            for (let j=0; j < numberOfSlides; j++) {
                let componentID = `banner-position-${j + 1}`;
                let component = document.getElementById(componentID);
                component.style.backgroundColor = '#3CACF6';
            }

            let currentScroll = bannersContainer.scrollLeft;
            let dif = wantedPos - currentScroll;
            bannersContainer.scrollLeft += dif;
            component.style.backgroundColor = '#FF470A';
        })

    };

    document.getElementById('carouselLeftButton1').addEventListener('click', ()=>{
        document.querySelector('#rowShowcaseItemAreaContainer1').scrollLeft -= 50;
    });

    document.getElementById('carouselRightButton1').addEventListener('click', ()=>{
        document.querySelector('#rowShowcaseItemAreaContainer1').scrollLeft += 50;
    });

    document.getElementById('carouselLeftButton2').addEventListener('click', ()=>{
        document.querySelector('#rowShowcaseItemAreaContainer2').scrollLeft -= 50;
    });

    document.getElementById('carouselRightButton2').addEventListener('click', ()=>{
        document.querySelector('#rowShowcaseItemAreaContainer2').scrollLeft += 50;
    });

});