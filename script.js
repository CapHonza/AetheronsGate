function hodiny() {
    const hodinyElement = document.querySelector('.clock');
    const ted = new Date()

    let hodina = ted.getHours();
    let minuta = ted.getMinutes();
    let sekunda = ted.getSeconds();

    hodina = (hodina < 10) ? "0" + hodina : hodina;
    minuta = (minuta < 10) ? "0" + minuta : minuta;
    sekunda = (sekunda < 10) ? "0" + sekunda : sekunda;

    let cas = hodina + ":" + minuta + ":" + sekunda

    hodinyElement.textContent = cas;
}

hodiny();

setInterval(hodiny, 1000);