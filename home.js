function makeLean() {
    document.querySelector('#primary').style.display = 'none';
}

setInterval(makeLean, 1);

window.addEventListener('hashchange', function () {
    console.log("stuff here")
    setInterval(makeLean, 2000);
});