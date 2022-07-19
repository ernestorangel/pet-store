window.addEventListener('load', () => {

    let numberOfSlides = document.getElementById("carouselPosition").childElementCount;

    let bannersContainer = document.getElementById("carouselBannersContainer");

    for (let i=0; i < numberOfSlides; i++) {

        let slideNumber = i + 1;
        let componentID = `banner-position-${slideNumber}`;
        let component = document.getElementById(componentID);
        let mathSignal = -1
        let wantedPos = mathSignal * i * 1280

        component.addEventListener('click', () => {

            for (let j=0; j < numberOfSlides; j++) {
                let slideNumber = j + 1;
                let componentID = `banner-position-${slideNumber}`;
                let component = document.getElementById(componentID);
                component.style.backgroundColor = '#3CACF6';
            }

            bannersContainer.style.left = wantedPos + 'px';
            component.style.backgroundColor = '#FF470A';
        })

    };

});