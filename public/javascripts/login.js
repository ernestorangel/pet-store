window.addEventListener('load', () => {

    let toastStatus = document.querySelector('.toast-login').id;
    console.log(toastStatus)
    if(toastStatus == 'show') {
        document.querySelector('.toast-login').style.display = 'flex';
        let toastInterval = setInterval(() => {
            document.querySelector('.toast-login').style.display = 'none';
            clearInterval(toastInterval);
        }, 5 * 1000);
    }

});